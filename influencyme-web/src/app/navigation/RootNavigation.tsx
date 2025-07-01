import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CampaignListPage from '../pages/campaign-list/CampaignListPage'
import CampaignDetailPage from '../pages/campaign/CampaignPage'
import CampaignCreatePage from '../pages/campaign-create/CampaignCreatePage'

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CampaignCreatePage />} />
        <Route path="/list" element={<CampaignListPage />} />
        <Route path="/campaigns" element={<CampaignDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootNavigation
