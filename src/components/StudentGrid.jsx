import StudentCard from '@components/StudentCard'

function StudentGrid({ students }) {
  if (!students.length) {
    return <p className="empty-state">No students match your filters.</p>
  }

  return (
    <section className="student-grid" aria-live="polite">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </section>
  )
}

export default StudentGrid
