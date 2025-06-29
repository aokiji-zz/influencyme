import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CampaignListPage from '../pages/campaign/CampaignListPage'

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<CampaignListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootNavigation
