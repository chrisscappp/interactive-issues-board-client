import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_REFRESH_TOKEN } from '../consts/localStorageKeys'
import { $api } from './api'

export const refreshAuthToken = async () => {
    const refreshToken = localStorage.getItem(ISSUES_USER_REFRESH_TOKEN)
    
    if (!refreshToken) {
      	throw new Error('No refresh token')
    }

    const response = await $api.post('/refreshToken', {
      	refreshToken
    })

    const { accessToken } = response.data
    
    localStorage.setItem(ISSUES_USER_ACCESS_TOKEN, accessToken)
    
    return accessToken
}
