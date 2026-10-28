import { DAY, NIGHT, STOPS, TOKENS, declarations, type Stop } from './stops.ts'

const KEY = 'kushal.theme'

export function initialStop(): number {
  try {
    const saved = STOPS.findIndex((s) => s.id === localStorage.getItem(KEY))
    if (saved >= 0) return saved
  } catch {
    // LocalStorage fallback
  }
  return matchMedia('(prefers-color-scheme: light)').matches ? DAY : NIGHT
}

export function remember(index: number) {
  try {
    localStorage.setItem(KEY, STOPS[index].id)
  } catch {
    // Ignore storage errors
  }
}

export function paint(position: number) {
  const p = Math.min(Math.max(position, 0), STOPS.length - 1)
  const a = STOPS[Math.floor(p)]
  const b = STOPS[Math.ceil(p)]
  const t = p - Math.floor(p)
  const root = document.documentElement

  if (t === 0) {
    root.style.cssText = declarations(a)
  } else {
    for (const token of TOKENS) root.style.setProperty(`--${token}`, mix(a, b, token, t))
    root.style.colorScheme = t < 0.5 ? a.scheme : b.scheme
  }
  root.dataset.stop = (t < 0.5 ? a : b).id
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', t < 0.5 ? a.colors.bg : b.colors.bg)
}

function mix(a: Stop, b: Stop, token: (typeof TOKENS)[number], t: number): string {
  const x = rgb(a.colors[token])
  const y = rgb(b.colors[token])
  return `rgb(${x.map((v, i) => Math.round(v + (y[i] - v) * t)).join(' ')})`
}

function rgb(hex: string): number[] {
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16))
}
