import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="container section-spacing">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="button" to="/">
        Go back home
      </Link>
    </section>
  )
}

export default NotFound
