import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useLazyFindManyCampaignQuery } from '../../services/campaings.service'
import './CampaignListPage.css'
const CampaignListPage = () => {
  const navigate = useNavigate()
  const [fetchManyCampaigns, { data: campaignsData, error: campaignserror, isLoading: campaignsLoading }] = useLazyFindManyCampaignQuery()
  const [pagination, setPagination] = useState({ skip: 0, take: 20 })
  const goToCampaign = (id: string) => {
    navigate(`/campaigns`, { state: { id } })
  }
  const handleNext = () => {
    setPagination(prev => ({ ...prev, skip: prev.skip + prev.take }))
  }


  const handlePrevious = () => {
    setPagination(prev => ({ ...prev, skip: Math.max(prev.skip - prev.take, 0) }))
  }

  useEffect(() => {
    if (!campaignsLoading && !campaignsData) {
      fetchManyCampaigns({
        take: String(pagination.take),
        skip: String(pagination.skip),
      })
    }
    if (campaignsData) {
      fetchManyCampaigns({
        take: String(pagination.take),
        skip: String(pagination.skip),
      })
    }
  }, [pagination, campaignsData])

  return (
    <div className="principal-container">
      <div className="filter-container">
        <div className="filter">
          <h3 style={{ color: 'wheat' }} className="form-title">CAMPAIGN LIST</h3>
          <Form style={{ width: '18rem' }}>


            <div className="filter-buttons" style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                <Button onClick={handlePrevious} disabled={pagination.skip === 0} style={{ marginRight: '10px' }}>
                  Previous
                </Button>
                <Button onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>

          </Form>
        </div>
      </div>

      <div>
        {campaignserror ? (
          <p className="error-message">
            Error fetching hosts{' '}
            {campaignserror && 'data' in campaignserror && (campaignserror.data as any)?.message || ''}
          </p>
        ) : (
          <div className="info-container">
            {campaignsData?.map((campaign) => (
              <div key={campaign.id} className="info-card">
                <p><b>Name:</b></p>
                <Button onClick={() => goToCampaign(campaign.id || '')}>
                  {`${campaign.name} - ${campaign.id}`}
                </Button>`
                <br />
                <p><b>Description:</b></p>
                {campaign?.description || 'No description available'}
                <br />
                <p><b>Status:</b></p>
                <span
                  className={`status ${campaign?.isActive ? 'status-up' : 'status-down'}`}
                >
                  {campaign?.isActive ? 'Active' : 'Inactive'}
                </span>
                <br />
              </div>
            ))}
          </div>
        )
        }
      </div >

    </div >
  )
}

export default CampaignListPage