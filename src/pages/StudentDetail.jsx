import { Link, useParams } from 'react-router-dom'

function StudentDetail({ data }) {
  const { studentId } = useParams()
  const student = data.students.find((item) => String(item.id) === studentId)

  if (!student) {
    return (
      <section className="container section-spacing">
        <h1>Student not found</h1>
        <p>We could not find that student profile.</p>
        <Link className="button" to="/students">
          Back to students
        </Link>
      </section>
    )
  }

  return (
    <section className="container section-spacing student-detail">
      <img src={student.profileImage} alt={`Profile of ${student.name}`} className="detail-image" />
      <div>
        <h1>{student.name}</h1>
        <p className="muted">
          {student.specialization} · Batch {student.batch}
        </p>
        <p>{student.bio}</p>

        <h2>Skills</h2>
        <ul className="skill-list">
          {student.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <h2>Projects</h2>
        <ul className="project-list">
          {student.projects.map((project) => (
            <li key={project.id}>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default StudentDetail
