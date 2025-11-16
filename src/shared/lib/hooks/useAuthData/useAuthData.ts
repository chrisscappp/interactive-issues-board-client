import { ISSUES_USER_ACCESS_TOKEN, ISSUES_USER_ID, ISSUES_USER_REFRESH_TOKEN } from '../../../consts/localStorageKeys'
import { useCallback, useContext, useEffect } from 'react'
import { QueryKey } from '../../../consts/queryKeys'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authByEmailAsync, type AuthByEmailResponse } from '../../queries/authByEmailAsync'
import { fetchUserDataAsync } from '../../queries/fetchUserDataAsync'
import type { IUser } from '@/entities/User'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { useNavigate } from '@tanstack/react-router' 

export function useAuthData() {
	const { authData, initAuth, userId, setInitAuth, setUserId, setAuthData } = useContext(AuthContext)
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	useEffect(() => {
		setUserId?.(localStorage.getItem(ISSUES_USER_ID) ?? '')
	}, [setUserId])

	const fetchAuthDataQuery = useQuery<IUser>({
    	queryKey: [QueryKey.AUTH, QueryKey.USER],
    	queryFn: async () => {
			const user = await fetchUserDataAsync(userId ?? '')
			setAuthData?.(user)
			setInitAuth?.(true)
			
			return user
		},
		enabled: !!userId && !initAuth
  	})

	const loginMutation = useMutation({
		mutationFn: authByEmailAsync,
		onSuccess: (data: AuthByEmailResponse) => {
			setUserId?.(String(data.user.id))
			setAuthData?.(data.user)
			setInitAuth?.(true)
			queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], data.user)
		}
	})

	const onLogout = useCallback(() => {
		localStorage.removeItem(ISSUES_USER_ACCESS_TOKEN)
		localStorage.removeItem(ISSUES_USER_REFRESH_TOKEN)
		localStorage.removeItem(ISSUES_USER_ID)
		setUserId?.('')
		setAuthData?.(undefined)

		// Инвалидируем кеш. запрос повторно не отойдет
		queryClient.removeQueries({ queryKey: [QueryKey.AUTH] })
		queryClient.removeQueries({ queryKey: [QueryKey.USER] })
		queryClient.setQueryData([QueryKey.AUTH, QueryKey.USER], undefined)

		navigate({ to: '/' })
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryClient, setAuthData, setUserId])

	return { 
		fetchAuthDataQuery,
		loginMutation,
		authData,
		userId,
		isAuth: authData,
		onLogout,
		initAuth
	}
}

export type UseAuthDataContext = ReturnType<typeof useAuthData>
