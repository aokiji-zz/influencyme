import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import '../campaign-list/CampaignListPage.css'
import { icons } from '../../common/icons/icons'
import { useCreateCampaignMutation } from '../../services/campaings.service'
import { CampaignType } from '../../services/model/campaign.dto'

const CampaignCreatePage = () => {
  const navigate = useNavigate()
  const [createCampaign, { data: createdCampaign, error: createError, isLoading: creating }] = useCreateCampaignMutation()

  const [campaign, setCampaign] = useState({
    name: '',
    description: '',
    type: CampaignType.INFLUENCE,
    cost: '', // Alterado para string
    workedHours: 0,
    startDate: '',
    endDate: '',
    isActive: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //@ts-ignore
    const { name, value, type, checked } = e.target as any
    setCampaign(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const costInCents = Math.round(
      Number(
        String(campaign.cost)
          .replace(/\./g, '') // remove pontos de milhar
          .replace(',', '.')  // troca vírgula por ponto decimal
      )
    )
    await createCampaign({
      ...campaign,
      cost: costInCents,
      workedHours: Number(campaign.workedHours),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  }


  const goToList = () => navigate('/list')

  return (
    <div className="principal-container">
      <div className="form-wrapper">
        <h3 className="form-title" style={{ color: 'wheat' }}>Create Campaign</h3>
        <Form onSubmit={handleSubmit} className="form-fields">

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Name</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              type="text"
              name="name"
              placeholder="Enter campaign name"
              value={campaign.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Description</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              as="textarea"
              rows={3}
              name="description"
              placeholder="Enter campaign description"
              value={campaign.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Type</Form.Label>
            <Form.Select
              name="type"
              value={campaign.type}
              onChange={handleChange}
              style={{ marginLeft: '0.5rem' }}
            >
              <option value={CampaignType.INFLUENCE}>INFLUENCE</option>
              <option value={CampaignType.TRADITIONAL}>TRADITIONAL</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Cost</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              type="text"
              name="cost"
              placeholder="Ex: 123,45"
              value={campaign.cost}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Worked Hours</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              type="number"
              name="workedHours"
              value={campaign.workedHours}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>Start Date</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              type="datetime-local"
              name="startDate"
              value={campaign.startDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ color: 'wheat' }}>End Date</Form.Label>
            <Form.Control
              style={{ marginLeft: '0.5rem' }}
              type="datetime-local"
              name="endDate"
              value={campaign.endDate}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="isActive">
            <Form.Check
              style={{ color: 'wheat' }}
              type="checkbox"
              label="Active"
              name="isActive"
              checked={campaign.isActive}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="form-buttons">
            <Button type="submit" disabled={creating}>
              {creating ? 'Creating...' : 'Create'}
            </Button>
            <Button variant="secondary" type="button" onClick={goToList}>
              List {icons.list}
            </Button>
          </div>
        </Form>

        {creating && <p style={{ color: 'wheat' }}>Creating...</p>}

        {createError && (
          <p className="error-message">
            Error creating campaign{' '}
            {createError && 'data' in createError && (createError.data as any)?.message || ''}
          </p>
        )}

        {createdCampaign && (
          <div className="info-container">
            <div className='info-card'>
              <h4>Campaign created successfully!</h4>
              <p><b>Name:</b> {createdCampaign.name}</p>
              <p><b>Description:</b> {createdCampaign.description}</p>
              <p><b>Status:</b> {createdCampaign.isActive ? 'Active' : 'Inactive'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CampaignCreatePage
