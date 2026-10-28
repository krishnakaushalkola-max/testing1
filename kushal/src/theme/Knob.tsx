import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import { flushSync } from 'react-dom'
import { initialStop, paint, remember } from './apply.ts'
import { STOPS } from './stops.ts'
import './Knob.css'

const SWEEP = 270
const START = -SWEEP / 2
const STEP = SWEEP / (STOPS.length - 1)
const LAST = STOPS.length - 1

const angleOf = (position: number) => START + position * STEP
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

export function Knob() {
  const [index, setIndex] = useState(initialStop)
  const [position, setPosition] = useState<number>(index)
  const [dragging, setDragging] = useState(false)
  const self = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; moved: boolean; detent: number } | null>(null)
  const busy = useRef(false)

  useEffect(() => {
    paint(index)
  }, [])

  function go(next: number) {
    const target = Math.min(Math.max(next, 0), LAST)
    if (target === index || busy.current) return
    const commit = () => {
      setIndex(target)
      setPosition(target)
      paint(target)
    }
    remember(target)

    const knob = self.current?.getBoundingClientRect()
    if (!knob || reducedMotion() || !('startViewTransition' in document)) {
      commit()
      return
    }
    const x = knob.left + knob.width / 2
    const y = knob.top + knob.height / 2
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    busy.current = true
    const t = (document as any).startViewTransition(() => flushSync(commit))
    t.ready.then(() =>
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 560, easing: 'cubic-bezier(0.2, 0, 0, 1)', pseudoElement: '::view-transition-new(root)' },
      ),
    )
    t.finished.finally(() => (busy.current = false))
  }

  useEffect(() => {
    const el = self.current
    if (!el) return
    let travel = 0
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      travel += e.deltaY
      if (Math.abs(travel) < 40) return
      go(index + Math.sign(travel))
      travel = 0
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  })

  function positionAt(e: PointerEvent): number {
    const r = self.current!.getBoundingClientRect()
    let deg = (Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180) / Math.PI
    if (deg > SWEEP / 2) deg = SWEEP / 2
    if (deg < -SWEEP / 2) deg = -SWEEP / 2
    return (deg - START) / STEP
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (busy.current) return
    e.currentTarget.setPointerCapture(e.pointerId)
    drag.current = { x: e.clientX, y: e.clientY, moved: false, detent: index }
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return
    const d = drag.current
    if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 3) {
      d.moved = true
      setDragging(true)
    }
    if (d.moved) {
      const p = positionAt(e)
      setPosition(p)
      paint(p)
    }
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return
    const d = drag.current
    drag.current = null
    setDragging(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }

    if (d.moved) {
      const nearest = Math.round(positionAt(e))
      go(nearest)
      paint(nearest)
    } else {
      go(index === LAST ? 0 : index + 1)
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      go(index + 1)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      go(index - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      go(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      go(LAST)
    }
  }

  return (
    <div className="knob-container" title="Theme rotary dial (click, drag, or scroll)">
      <span className="knob-label">{STOPS[index].name}</span>
      <div
        ref={self}
        className="knob"
        role="slider"
        tabIndex={0}
        aria-label="Theme"
        aria-valuemin={0}
        aria-valuemax={LAST}
        aria-valuenow={index}
        aria-valuetext={STOPS[index].name}
        data-dragging={dragging ? '' : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        {STOPS.map((stop, i) => {
          const a = (angleOf(i) * Math.PI) / 180
          const r = 20
          const x = 24 + r * Math.sin(a)
          const y = 24 - r * Math.cos(a)
          return (
            <span
              key={stop.id}
              className="led"
              style={{ left: `${x - 2}px`, top: `${y - 2}px` }}
              data-lit={Math.abs(position - i) < 0.4 ? '' : undefined}
            />
          )
        })}
        <div className="dial" style={{ transform: `rotate(${angleOf(position)}deg)` }}>
          <span className="notch" />
        </div>
      </div>
    </div>
  )
}
