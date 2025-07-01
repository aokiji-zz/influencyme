import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../redux/store'
import { urlBaseApiDev } from '../common/base-url'
import { Host } from './model/host'

export const campaignApi = createApi({
  reducerPath: 'campaignApi',
  tagTypes: ['Post', 'Get'],
  baseQuery: fetchBaseQuery({
    baseUrl: `${urlBaseApiDev}/campaign`,
    prepareHeaders: (headers, { getState }) => {
      const { access_token } = (getState() as RootState).authReducer
      if (access_token) {
        headers.set('authorization', `Bearer ${access_token}`)
      }
      return headers
    },
  }),
  endpoints: (build) => ({
    findManyCampaign: build.query<Host[], any>({
      query: ({ take, skip, ports, cves, cpes }) => {
        const params = new URLSearchParams();

        if (take) params.append('take', take);
        if (skip) params.append('skip', skip);
        if (ports) params.append('ports', ports);
        if (cves) params.append('cves', cves);
        if (cpes) params.append('cpes', cpes);

        return {
          method: 'GET',
          url: `findMany?${params.toString()}`,
        };
      },
    }),
    findUniqueCampaign: build.query<any, string>({
      query: (campaignCode) => ({
        method: 'GET',
        url: `${campaignCode}`,
      }),
    }),
  }),

})
export const { useLazyFindManyCampaignQuery, useLazyFindUniqueCampaignQuery } = campaignApi
