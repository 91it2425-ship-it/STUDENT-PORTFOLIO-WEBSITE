import React from 'react';

export default function StudentCard({ student }) {
  return (
    <article aria-labelledby={"name-" + student.id} style={{border: '1px solid #e6e6e6', borderRadius:8, padding:12, display:'flex', gap:12, alignItems:'center'}}>
      <img src={student.avatar} alt={`${student.name} avatar`} width={80} height={80} style={{borderRadius:8, objectFit:'cover'}} />
      <div>
        <h3 id={"name-" + student.id} style={{margin:0}}>{student.name}</h3>
        <p style={{margin:'4px 0', color:'#555'}}>{student.specialization} • Batch {student.batch}</p>
        <p style={{margin:'6px 0'}}>{student.summary}</p>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          {student.skills.map(s => (
            <span key={s} style={{background:'#f1f5ff', color:'#0b5fff', padding:'4px 8px', borderRadius:6, fontSize:12}}>{s}</span>
          ))}
        </div>
        <p style={{marginTop:8}}><a href={student.portfolio} target="_blank" rel="noreferrer">View portfolio</a></p>
      </div>
    </article>
  )
}
