import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom'
import '../campaign-list/CampaignListPage.css'
import { icons } from '../../common/icons/icons'
import { useLazyFindUniqueCampaignQuery } from '../../services/campaings.service'
function formatCurrencyFromCents(cents: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100)
}

const CampaignDetailPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [fetchHost, { data: campaignData, error: campaignError, isLoading: campaignLoading }] = useLazyFindUniqueCampaignQuery()

  const [campaign, setCampaign] = useState({
    id: (location.state.id as string) || '',
  })

  useEffect(() => {
    if (campaignData) return
    if (campaign.id) {
      fetchHost({ id: campaign.id }, true)
    }
  }, [campaignData])


  const handleFetchHosts = () => {
    fetchHost({ id: campaign.id }, true)
  }

  const goToList = () => {
    navigate('/list')
  }

  return (
    <div className="principal-container">
      <div className="filter-container">
        <div className="filter">
          <h3 style={{ color: 'wheat' }} className="form-title">Campaign Detail</h3>
          <Form>
            <Form.Group controlId="id">
              <Form.Control
                style={{ backgroundColor: 'grey' }}
                type="text"
                placeholder="Enter your campaign ID here"
                value={campaign.id}
                onChange={(e) => setCampaign({ id: e.target.value })} // Atualiza o estado
              />
            </Form.Group>
            <div className="filter-buttons" style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Button onClick={handleFetchHosts} disabled={!campaign.id || campaignLoading}>
                {campaignLoading ? 'Finding...' : <>Find {icons.find}</>}
              </Button>
              <div>
                <Button onClick={() => goToList()}>
                  List {icons.list}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      {campaignLoading ? (
        <h3>Loading...</h3>
      ) : campaignError ? (
        <p className="error-message">
          Error fetching campaign{' '}
          {campaignError && 'data' in campaignError && (campaignError.data as any)?.message || ''}
        </p>
      ) : (
        <div className="info-container">
          <div className='info-card'>
            <p><b>Name:</b></p>
            {campaignData?.name || 'No name available'}
            <br />
            <p><b>Description:</b></p>
            {campaignData?.description || 'No description available'}
            <br />
            <p><b>Start date:</b></p>
            {campaignData?.startDate || 'No description available'}
            <br />
            <p><b>End date:</b></p>
            {campaignData?.endDate || 'No description available'}
            <br />
            <p><b>Worked hours:</b></p>
            {campaignData?.workedHours || 'No description available'}
            <br />
            <p><b>Cost:</b></p>
            {typeof campaignData?.cost === 'number'
              ? formatCurrencyFromCents(campaignData.cost)
              : 'No description available'}

            <br />
            <p><b>Status:</b></p>
            <span
              className={`status ${campaignData?.isActive ? 'status-up' : 'status-down'}`}
            >
              {campaignData?.isActive ? 'Active' : 'Inactive'}
            </span>
            <br />
          </div>
        </div>
      )}
    </div >
  )
}

export default CampaignDetailPage