import React, { useMemo, useState } from 'react';
import students from '../data/students.json';
import StudentCard from '../components/StudentCard';

export default function AllStudents() {
  const [query, setQuery] = useState('');
  const [batch, setBatch] = useState('All');

  const batches = useMemo(() => ['All', ...Array.from(new Set(students.map(s=>s.batch))).sort()], []);

  const filtered = students.filter(s => {
    if (batch !== 'All' && s.batch !== batch) return false;
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return s.name.toLowerCase().includes(q) || s.skills.join(' ').toLowerCase().includes(q) || s.specialization.toLowerCase().includes(q);
  });

  return (
    <section id="directory" style={{padding:16}}>
      <h2>Student Directory</h2>
      <p style={{color:'#555'}}>Browse and filter student portfolios by batch, skills, or specialization.</p>

      <div style={{display:'flex', gap:8, margin:'12px 0', alignItems:'center'}}>
        <input aria-label="Search students" placeholder="Search by name, skill, or specialization" value={query} onChange={e=>setQuery(e.target.value)} style={{flex:1, padding:8, borderRadius:6, border:'1px solid #ddd'}} />
        <select aria-label="Filter by batch" value={batch} onChange={e=>setBatch(e.target.value)} style={{padding:8, borderRadius:6, border:'1px solid #ddd'}}>
          {batches.map(b=> <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:12}}>
        {filtered.map(s => <StudentCard key={s.id} student={s} />)}
      </div>
    </section>
  )
}
