import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Wino from './pages/Wino.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Academy from './pages/Academy.jsx'
import Training from './pages/Training.jsx'
import Fae from './pages/Fae.jsx'
import Masterclass from './pages/Masterclass.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Legal from './pages/Legal.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wino" element={<Wino />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/training" element={<Training />} />
        <Route path="/fae" element={<Fae />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/privacy" element={<Legal type="privacy" />} />
        <Route path="/terms" element={<Legal type="terms" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
