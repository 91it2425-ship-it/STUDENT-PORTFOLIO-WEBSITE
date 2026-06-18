import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  return (
    <article className="student-card" aria-labelledby={`student-${student.id}`}>
      <img src={student.profileImage} alt={`Profile of ${student.name}`} loading="lazy" />
      <div className="student-card-body">
        <h3 id={`student-${student.id}`}>{student.name}</h3>
        <p>{student.specialization}</p>
        <p className="muted">Batch {student.batch}</p>
        <ul className="skill-list" aria-label={`${student.name} skills`}>
          {student.skills.slice(0, 4).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <Link className="button" to={`/students/${student.id}`}>
          View Portfolio
        </Link>
      </div>
    </article>
  )
}

export default StudentCard
