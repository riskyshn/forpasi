import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Services'
import SIssue from '../pages/Strategic-Issue'
import Programme from '../pages/Programme'
import News from '../pages/News'
import Support from '../pages/Support'

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/strategic-issues" element={<SIssue />} />
      <Route path="/programme" element={<Programme />} />
      <Route path="/news" element={<News />} />
      <Route path="/support-us" element={<Support />} />
    </Routes>
)

export default AppRoutes
