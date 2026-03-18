import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/common/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import SolutionPage from './pages/SolutionPage'
import AiPlatformPage from './pages/AiPlatformPage'
import GivasPage from './pages/GivasPage'
import VmepsPage from './pages/VmepsPage'
import RmepsPage from './pages/RmepsPage'
import ClientsPage from './pages/ClientsPage'
import InfoPage from './pages/InfoPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFoundPage/>,
    children: [
      { index: true,         element: <HomePage/> },
      { path: 'company',     element: <CompanyPage/> },
      { path: 'solution',    element: <SolutionPage/> },
      { path: 'ai/platform', element: <AiPlatformPage/> },
      { path: 'ai/givas',    element: <GivasPage/> },
      { path: 'ai/vmeps',    element: <VmepsPage/> },
      { path: 'ai/rmeps',    element: <RmepsPage/> },
      { path: 'clients',     element: <ClientsPage/> },
      { path: 'info',        element: <InfoPage/> },
      { path: 'faq',         element: <FaqPage/> },
      { path: 'contact',     element: <ContactPage/> },
      { path: '*',           element: <NotFoundPage/> },
    ],
  },
  { path: '*', element: <NotFoundPage/> },
])

export default router
