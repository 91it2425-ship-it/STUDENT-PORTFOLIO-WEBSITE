import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation({ college }) {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  )

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" to="/">
          <img className="brand-logo" src={college.logo} alt={`${college.name} logo`} />
          <div>
            <strong>{college.name}</strong>
            <p>{college.tagline}</p>
          </div>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/students">Students</NavLink>
          <a href={college.website} target="_blank" rel="noreferrer">
            College Site
          </a>
          <button
            type="button"
            className="mode-toggle"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            aria-pressed={isDarkMode}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
