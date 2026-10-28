export function Footer() {
  return (
    <footer className="foot">
      <span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
        Kushal M R · RV College of Engineering · this page loads nothing but itself
      </span>
      <span>
        Crafted in the CueSeek design system · <a href="https://github.com/Kushal-MR">GitHub</a> ·{' '}
        <a href="#top">Back to top ↑</a>
      </span>
    </footer>
  )
}
