function Footer({ college }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>
          © {new Date().getFullYear()} {college.name} · {college.location}
        </p>
        <p>{college.tagline}</p>
      </div>
    </footer>
  )
}

export default Footer
