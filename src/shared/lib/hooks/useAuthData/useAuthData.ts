import type { IUser } from '@/entities/User'
import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_ID, ISSUES_USER_REFRESH_TOKEN } from '../../../consts/localStorageKeys'
import { useCallback, useState } from 'react'
import { QueryKey } from '../../../consts/queryKeys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authByEmailAsync, type AuthByEmailResponse } from '../../queries/authByEmailAsync'

export function useAuthData() {
	const [inited, setInited] = useState(false)

	const queryClient = useQueryClient()

	const fetchAuthDataQuery = useQuery<IUser>({
    	queryKey: [QueryKey.AUTH, QueryKey.USER],
    	//queryFn: fetchCurrentUser, + inited
  	})

	const loginMutation = useMutation({
		mutationFn: authByEmailAsync,
		onSuccess: (data: AuthByEmailResponse) => {
			setInited(true)
			queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], data.user)
		}
	})

	const onLogout = useCallback(() => {
		localStorage.removeItem(ISSUES_USER_ACCESS_TOKEN)
		localStorage.removeItem(ISSUES_USER_REFRESH_TOKEN)
		localStorage.removeItem(ISSUES_USER_ID)

		queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], null)
      	queryClient.removeQueries({ queryKey: [QueryKey.AUTH] })
	}, [queryClient])

	return { 
		fetchAuthDataQuery,
		loginMutation,
		isAuth: !!fetchAuthDataQuery.data,
		onLogout,
		inited
	}
}
