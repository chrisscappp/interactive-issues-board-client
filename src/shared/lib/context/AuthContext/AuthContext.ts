import type { IUser } from '@/entities/User'
import { createContext, type Dispatch, type SetStateAction } from 'react'

export interface IAuthContextProps {
	userId?: string,
	authData?: IUser,
	initAuth?: boolean,
	setUserId?: Dispatch<SetStateAction<string | undefined>>,
	setAuthData?: Dispatch<SetStateAction<IUser | undefined>>,
	setInitAuth?: Dispatch<SetStateAction<boolean | undefined>>
}

export const AuthContext = createContext<IAuthContextProps>({})
