import { useMemo, useState } from 'react'
import StudentGrid from '@components/StudentGrid'
import {
  filterByBatch,
  filterBySkill,
  filterBySpecialization,
  getUniqueValues,
  searchStudents,
} from '@utils/helpers'

function AllStudents({ data }) {
  const [searchText, setSearchText] = useState('')
  const [selectedBatch, setSelectedBatch] = useState('all')
  const [selectedSkill, setSelectedSkill] = useState('all')
  const [selectedSpecialization, setSelectedSpecialization] = useState('all')

  const batches = getUniqueValues(data.students, 'batch')
  const skills = Array.from(new Set(data.students.flatMap((student) => student.skills))).sort()
  const specializations = getUniqueValues(data.students, 'specialization')

  const filteredStudents = useMemo(() => {
    let students = searchStudents(data.students, searchText)
    students = filterByBatch(students, selectedBatch)
    students = filterBySkill(students, selectedSkill)
    students = filterBySpecialization(students, selectedSpecialization)
    return students
  }, [data.students, searchText, selectedBatch, selectedSkill, selectedSpecialization])

  return (
    <section className="container section-spacing">
      <div className="section-header">
        <h1>All Students</h1>
        <p>Filter by batch, skills, and specialization or search instantly.</p>
      </div>

      <form className="filters" aria-label="Student filters" onSubmit={(event) => event.preventDefault()}>
        <label>
          Search
          <input
            type="search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Name, skill, or specialization"
          />
        </label>

        <label>
          Batch
          <select value={selectedBatch} onChange={(event) => setSelectedBatch(event.target.value)}>
            <option value="all">All batches</option>
            {batches.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </label>

        <label>
          Skill
          <select value={selectedSkill} onChange={(event) => setSelectedSkill(event.target.value)}>
            <option value="all">All skills</option>
            {skills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </label>

        <label>
          Specialization
          <select
            value={selectedSpecialization}
            onChange={(event) => setSelectedSpecialization(event.target.value)}
          >
            <option value="all">All specializations</option>
            {specializations.map((specialization) => (
              <option key={specialization} value={specialization}>
                {specialization}
              </option>
            ))}
          </select>
        </label>
      </form>

      <p className="result-count" role="status">
        Showing {filteredStudents.length} of {data.students.length} students
      </p>
      <StudentGrid students={filteredStudents} />
    </section>
  )
}

export default AllStudents
