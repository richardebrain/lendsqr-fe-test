import { UserDetailsView} from '@/utils/constant';
import { createContext, useContext, useEffect, useState } from 'react';

export type MainContextType = {
    ActiveView: { screen: keyof typeof UserDetailsView },
    setActiveView: React.Dispatch<React.SetStateAction<ScreenProps>>
    adminLogin: { email: string, password: string },
    setAdminLogin: React.Dispatch<React.SetStateAction<{ email: string, password: string }>>
    logout: () => void
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    adminLogout: boolean

}
type Props = {
    children: React.ReactNode
}
export const MainContext = createContext<MainContextType>({} as MainContextType);
type ScreenProps = {
    screen: keyof typeof UserDetailsView
}
export const AppWrapper = ({ children }: Props) => {
    const [ActiveView, setActiveView] = useState<ScreenProps>({ screen: 'General Details' })
    const [adminLogin, setAdminLogin] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const[adminLogout, setAdminLogout] = useState(false)

    const logout = () => {
        setAdminLogout(true)
        setAdminLogin({
            email: '',
            password: ''
        })
    }

    return (
        <MainContext.Provider value={{
            ActiveView,
            setActiveView,
            adminLogin,
            setAdminLogin,
            logout,
            loading,
            setLoading,
            adminLogout,
        }}>
            {children}
        </MainContext.Provider>
    )

}

export const useAppContext = () => {
    return useContext(MainContext);
}