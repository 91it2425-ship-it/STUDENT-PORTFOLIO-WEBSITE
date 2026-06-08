import React from "react";
import Navigation from './components/Navigation';
import AllStudents from './pages/AllStudents';

export default function App() {
  return (
    <div style={{fontFamily: 'Inter, sans-serif'}}>
      <Navigation />
      <main>
        <header style={{padding:24}}>
          <h1 style={{margin:0}}>FolioHub</h1>
          <p style={{color:'#444'}}>Multi-student portfolio platform — browse student portfolios created by your college.</p>
        </header>
        <AllStudents />
      </main>
    </div>
  );
}
