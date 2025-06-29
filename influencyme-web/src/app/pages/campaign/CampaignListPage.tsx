import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import { useLazyFindManyCampaignQuery } from '../../services/campaign.service'
import './CampaignListPage.css'
import { icons } from '../../common/icons/icons'
const CampaignListPage = () => {
  const navigate = useNavigate()
  const [fetchManyHosts, { data: campaignManyData, error: campaignManyError, isLoading: campaignManyIsLoading }] = useLazyFindManyCampaignQuery()
  const [pagination, setPagination] = useState({ skip: 0, take: 20 })
  const goToHost = (ipAddress: string) => {
    navigate('/', { state: ipAddress })
  }

  const handleFetchHosts = () => {
    fetchManyHosts({
      take: String(pagination.take),
      skip: String(pagination.skip)
    })
  }
  const handleNext = () => {
    setPagination(prev => ({ ...prev, skip: prev.skip + prev.take }))
  }


  const handlePrevious = () => {
    setPagination(prev => ({ ...prev, skip: Math.max(prev.skip - prev.take, 0) }))
  }

  useEffect(() => {
    if (campaignManyData) {
      fetchManyHosts({
        take: String(pagination.take),
        skip: String(pagination.skip)
      })
    }
    if (!campaignManyData) {
      fetchManyHosts({
        take: String(pagination.take),
        skip: String(pagination.skip),
      })

    }
  }, [pagination, campaignManyData])

  return (
    <div className="container-vigilant">
      <div className="filter-container">
        <div className="filter">
          <h3 style={{ color: 'wheat' }} className="form-title">Campaign List</h3>
          <Form style={{ width: '18rem' }}>
            <div className="filter-buttons" style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Button onClick={handleFetchHosts}
              >
                {campaignManyIsLoading ? 'Searching...' : <>Search {icons.find}</>}
              </Button>
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
        {campaignManyError ? (
          <p className="error-message">
            Error fetching hosts{' '}
            {campaignManyError && 'data' in campaignManyError && (campaignManyError.data as any)?.message || ''}
          </p>
        ) : (
          <div className="host-info">
            {campaignManyData?.map((host) => (
              <div key={host.id} className="host-card">
                <strong>Host:</strong>
                <Button onClick={() => goToHost(host.ipAddress || '')}>
                  {host.ipAddress}
                </Button>
                <br />
                <strong>Country by registration: </strong>
                {host?.whois?.country} <span className={`fi fi-${host?.whois?.country.toLowerCase()}`}></span>
                <br />
                <strong>Recently CVE: </strong>
                {host.cves?.[0]}
                <br />
                <strong>Ports: </strong>
                {host.portNumbers?.join(' | ')}
                <br />
                <strong>Status: </strong>
                <span
                  className={`status ${host.status === 'UP'
                    ? 'status-up'
                    : host.status === 'DOWN'
                      ? 'status-down'
                      : 'status-pending'
                    }`}
                >
                  {host.status || "PENDING"}
                </span>
                <br />
                <strong>Risk Level: </strong>
                <span className={`risk-level risk-${calculateRisk(host).toLowerCase()}`}>
                  {calculateRisk(host)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div >
  )
}

export default CampaignListPage