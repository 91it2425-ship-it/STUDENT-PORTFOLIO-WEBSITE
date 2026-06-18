export function searchStudents(students, query) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) return students

  return students.filter((student) => {
    const searchable = [student.name, student.specialization, ...student.skills]
      .join(' ')
      .toLowerCase()

    return searchable.includes(normalizedQuery)
  })
}

export function filterByBatch(students, batch) {
  if (!batch || batch === 'all') return students
  return students.filter((student) => student.batch === batch)
}

export function filterBySkill(students, skill) {
  if (!skill || skill === 'all') return students
  return students.filter((student) => student.skills.includes(skill))
}

export function filterBySpecialization(students, specialization) {
  if (!specialization || specialization === 'all') return students
  return students.filter((student) => student.specialization === specialization)
}

export function getUniqueValues(students, key) {
  return Array.from(new Set(students.map((student) => student[key]))).sort()
}
