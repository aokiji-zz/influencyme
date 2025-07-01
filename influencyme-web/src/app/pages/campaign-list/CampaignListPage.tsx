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
  const goToHost = (ipAddress: string) => {
    navigate('/', { state: ipAddress })
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
    <div className="container-vigilant">
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
          <div className="host-info">
            {campaignsData?.map((campaign) => (
              <div key={campaign.id} className="host-card">
                <strong>name:</strong>
                <Button onClick={() => goToHost(campaign.id || '')}>
                  {`${campaign.name} - ${campaign.id}`}
                </Button>`
                <br />
                <strong>Name: </strong>
                {campaign?.name}
                <br />
                <strong>Description: </strong>
                {campaign.description || 'No description available'}
                <br />
                {/* <strong>Status: </strong>
                <span
                  className={`status ${campaign.status === 'UP'
                    ? 'status-up'
                    : campaign.status === 'DOWN'
                      ? 'status-down'
                      : 'status-pending'
                    }`}
                >
                  {campaign.status || "PENDING"}
                </span>
                <br /> */}
              </div>
            ))}
          </div>
        )}
      </div>

    </div >
  )
}

export default CampaignListPage