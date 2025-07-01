import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../redux/store'
import { urlBaseApiDev } from '../common/base-url'
import { Campaign } from './model/campaign.dto'

export const campaignsApi = createApi({
  reducerPath: 'campansApi',
  tagTypes: ['Post', 'Get'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${urlBaseApiDev}/campaigns`,
    prepareHeaders: (headers, { getState }) => {
      const { access_token } = (getState() as RootState).authReducer
      if (access_token) {
        headers.set('authorization', `Bearer ${access_token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    findManyCampaign: build.query<Campaign[], any>({
      query: ({ take, skip }) => {
        const params = new URLSearchParams();

        if (take) params.append('take', take);
        if (skip) params.append('skip', skip);

        return {
          method: 'GET',
          url: `?${params.toString()}`,
        };
      },
    }),
    findUniqueCampaign: build.query<Campaign, { id: string }>({
      query: ({ id }) => ({
        method: 'GET',
        url: `/${id}`,
      }),
    }),
    createCampaign: build.mutation<Campaign, Omit<Campaign, 'id'>>({
      query: (body) => ({
        method: 'POST',
        body: body,
        url: ``,
      }),
    }),
  }),

})
export const { useLazyFindManyCampaignQuery, useLazyFindUniqueCampaignQuery, useCreateCampaignMutation } = campaignsApi
