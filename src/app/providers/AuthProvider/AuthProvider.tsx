import type { IUser } from '@/entities/User'
import { AuthContext } from '@/shared/lib/context/AuthContext/AuthContext'
import { type ReactNode, useMemo, useState } from 'react'

interface AuthProviderProps {
	children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {

	const [userId, setUserId] = useState<string>()
	const [authData, setAuthData] = useState<IUser>()
	const [initAuth, setInitAuth] = useState<boolean>()

	const defaultProps = useMemo(() => ({
		userId,
		authData,
		initAuth,
		setUserId,
		setAuthData,
		setInitAuth
	}), [authData, initAuth, userId])

	return (
		<AuthContext.Provider value={defaultProps}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
