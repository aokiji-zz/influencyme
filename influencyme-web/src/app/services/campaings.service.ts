import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../redux/store'
import { urlBaseApiDev } from '../common/base-url'
import { Campaign } from './model/campaign'

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
    findUniqueCampaign: build.query<any, string>({
      query: (ipAddressOrDomain) => ({
        method: 'GET',
        url: `/${ipAddressOrDomain}`,
      }),
    }),
  }),

})
export const { useLazyFindManyCampaignQuery, useLazyFindUniqueCampaignQuery } = campaignsApi
