import React from 'react';
import college from '../data/college.json';

export default function Navigation() {
  return (
    <header style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:16, borderBottom:'1px solid #eee'}}>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <div style={{width:44, height:44, borderRadius:8, background:college.brandColor}} aria-hidden></div>
        <div>
          <div style={{fontWeight:700}}>{college.name}</div>
          <div style={{fontSize:12, color:'#666'}}>{college.tagline}</div>
        </div>
      </div>
      <nav aria-label="Main navigation">
        <a href="#directory" style={{marginRight:12}}>Directory</a>
        <a href="#add-student">Add Student</a>
      </nav>
    </header>
  )
}
