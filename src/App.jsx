import { Navigate, Route, Routes } from 'react-router-dom'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import AllStudents from '@pages/AllStudents'
import StudentDetail from '@pages/StudentDetail'
import NotFound from '@pages/NotFound'
import data from '@/data/students.json'

function App() {
  const { college } = data

  return (
    <div className="app-shell">
      <Navigation college={college} />
      <main id="main-content" className="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/students" element={<AllStudents data={data} />} />
          <Route path="/students/:studentId" element={<StudentDetail data={data} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer college={college} />
    </div>
  )
}

export default App
