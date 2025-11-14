import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_ID, ISSUES_USER_REFRESH_TOKEN } from '../../../consts/localStorageKeys'
import { useCallback, useEffect, useState } from 'react'
import { QueryKey } from '../../../consts/queryKeys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authByEmailAsync, type AuthByEmailResponse } from '../../queries/authByEmailAsync'
import { fetchUserDataAsync } from '../../queries/fetchUserDataAsync'
import type { IUser } from '@/entities/User'

export function useAuthData() {
	const [inited, setInited] = useState(false)
	const [userId, setUserId] = useState(localStorage.getItem(ISSUES_USER_ID) ?? '')
	const queryClient = useQueryClient()

	useEffect(() => {
		setInited(true)
	}, [])

	const fetchAuthDataQuery = useQuery<IUser>({
    	queryKey: [QueryKey.AUTH, QueryKey.USER],
    	queryFn: () => fetchUserDataAsync(userId),
		enabled: !!userId && inited
  	})

	const loginMutation = useMutation({
		mutationFn: authByEmailAsync,
		onSuccess: (data: AuthByEmailResponse) => {
			setUserId(String(data.user.id))
			queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], data.user)
		}
	})

	const onLogout = useCallback(() => {
		localStorage.removeItem(ISSUES_USER_ACCESS_TOKEN)
		localStorage.removeItem(ISSUES_USER_REFRESH_TOKEN)
		localStorage.removeItem(ISSUES_USER_ID)
		setUserId('')

		// Инвалидируем кеш. запрос повторно не отойдет
		queryClient.removeQueries({ queryKey: [QueryKey.AUTH] })
		queryClient.removeQueries({ queryKey: [QueryKey.USER] })
		queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], undefined)
	}, [queryClient])

	return { 
		fetchAuthDataQuery,
		loginMutation,
		authData: fetchAuthDataQuery.data,
		isAuth: !!fetchAuthDataQuery.data,
		onLogout,
		inited
	}
}
