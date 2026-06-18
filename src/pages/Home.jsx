import { Link } from 'react-router-dom'
import StudentGrid from '@components/StudentGrid'

function Home({ data }) {
  const featuredStudents = data.students.slice(0, 3)

  return (
    <>
      <section className="hero container">
        <p className="eyebrow">{data.college.location}</p>
        <h1>{data.college.name} Student Portfolio Platform</h1>
        <p>{data.college.description}</p>
        <div className="hero-actions">
          <Link className="button" to="/students">
            Explore All Students
          </Link>
          <a className="button secondary" href={data.college.website} target="_blank" rel="noreferrer">
            Visit College
          </a>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="section-header">
          <h2>Featured Students</h2>
          <p>Automatically generated cards from student data.</p>
        </div>
        <StudentGrid students={featuredStudents} />
      </section>
    </>
  )
}

export default Home
