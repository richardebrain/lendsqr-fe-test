import { checkActive, formattedDate } from '@/hooks/dateHook';
import { formatNumbers } from '@/hooks/phoneNumber';
import { AlluserProps, FilterState } from '@/utils/types';
import { createContext, useContext, useState } from 'react';

export type userContextType = {
    users: AlluserProps[],
    loading: boolean,
    getUsers: () => void
    user?: AlluserProps | null,
    loadingId: boolean,
    getUser: (id: string) => void
    setUser: React.Dispatch<React.SetStateAction<AlluserProps | null>>
    setLoadingId: React.Dispatch<React.SetStateAction<boolean>>
    setBlackListUser: (id: string) => void,
    setIsActivated: (id: string) => void,
    handleDateChange: (date: Date | null) => void,
    handleChanges: (e: any) => void,
    filterForm: FilterState
    setFilterForm: React.Dispatch<React.SetStateAction<FilterState>>
    handleResets: () => void




}
type Props = {
    children: React.ReactNode
}
export const UserContext = createContext<userContextType>({} as userContextType);

export const UserWrapper = ({ children }: Props) => {
    const [users, setUsers] = useState<AlluserProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingId, setLoadingId] = useState(true);
    const [user, setUser] = useState<AlluserProps | null>(null);
    const [filterForm, setFilterForm] = useState<FilterState>({
        organisation: '',
        status: '',
        username: '',
        email: '',
        date: null,
        phoneNumber: '',
    })
    const handleDateChange = (date: Date | null) => {
        setFilterForm({
            ...filterForm,
            date
        })
    }
    const handleChanges = (e: any) => {

        const { name, value } = e.target
        setFilterForm({
            ...filterForm,
            [name]: value,
        })
    }



    // this function is used to add the properties isBlackListed, isBlackListedPending, isActivatedPending, isActivated and format some datas before updating the state to the user object
    const addProperTies = (data: AlluserProps[]) => {
        const properData = data.map((item: AlluserProps) => {
            return {
                ...item,
                status: {
                    ...item.status,
                    isBlackListed: false,
                    isBlackListedPending: false,
                    isActivatedPending: false,
                    isActivated: checkActive(item.lastActiveDate),

                },
                profile: {
                    ...item.profile,
                    phoneNumber: formatNumbers(item.profile.phoneNumber)!
                },
                phoneNumber: formatNumbers(item.phoneNumber)!,
                lastActiveDate: formattedDate(item.lastActiveDate)!,
                createdAt: formattedDate(item.createdAt)!
            }
        })
        return properData;
    }
    const getUsers = async () => {
        try {
            const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/');
            const data = await response.json();

            const properData = addProperTies(data);
            setUsers(properData);

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    const setBlackListUser = (id: string) => {
        const findUser = users.find((user: AlluserProps) => user.id === id);
        if (findUser) {
            //wait3 seconds before setting the user to blacklisted
            if (findUser.status.isBlackListed) return;
            const updatedUser = {
                ...findUser,
                status: {
                    ...findUser.status,
                    isBlackListedPending: true,
                    isActivated: false
                }

            }
            const updatedUsers = users.map((user: AlluserProps) => {
                if (user.id === id) {
                    return updatedUser
                }
                return user;
            })
            setUsers(updatedUsers);

            setTimeout(() => {
                const updatedUser = {
                    ...findUser,
                    status: {
                        ...findUser.status,
                        isBlackListed: true,
                        isBlackListedPending: false,
                        isActivated: false
                    }


                }
                const updatedUsers = users.map((user: AlluserProps) => {
                    if (user.id === id) {
                        return updatedUser
                    }
                    return user;
                })
                setUsers(updatedUsers);
            }, 3000)
        }

    }
    const setIsActivated = (id: string) => {
        const findUser = users.find((user: AlluserProps) => user.id === id);
        if (findUser) {
            //set pending to true before setting the user to activated
            if (findUser.status.isActivated) return;
            const updatedUser = {
                ...findUser,
                status: {
                    ...findUser.status,
                    isActivatedPending: true,
                    isBlackListed: false
                }

            }
            const updatedUsers = users.map((user: AlluserProps) => {
                if (user.id === id) {
                    return updatedUser
                }
                return user;
            }
            )
            setUsers(updatedUsers);
            setTimeout(() => {
                const updatedUser = {
                    ...findUser,
                    status: {
                        ...findUser.status,
                        isActivated: true,
                        isActivatedPending: false,
                        isBlackListed: false
                    }
                }
                const updatedUsers = users.map((user: AlluserProps) => {
                    if (user.id === id) {
                        return updatedUser
                    }
                    return user;
                })
                setUsers(updatedUsers);
            }
                , 3000)

        }
    }

    const getUser = async (id: string) => {
        try {
            const response = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
            const data = await response.json();
            const properData = data.map((item: AlluserProps) => {
                return {
                    ...item,
                    status: {
                        ...item.status,
                        isBlackListed: false,
                        isBlackListedPending: false,
                        isActivatedPending: false,
                        isActivated: checkActive(item.lastActiveDate),

                    },
                    profile: {
                        ...item.profile,
                        phoneNumber: formatNumbers(item.profile.phoneNumber)!
                    },
                    phoneNumber: formatNumbers(item.phoneNumber)!,
                    lastActiveDate: formattedDate(item.lastActiveDate)!,
                    createdAt: formattedDate(item.createdAt)!
                }
            })
            setUser(properData);
            setLoadingId(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const handleResets = () => {
        setFilterForm({
            organisation: '',
            status: '',
            username: '',
            email: '',
            date: null,
            phoneNumber: '',
        })


    }


    return (
        <UserContext.Provider value={{
            users,
            loading,
            getUsers,
            user,
            loadingId,
            getUser,
            setUser,
            setLoadingId,
            setBlackListUser,
            setIsActivated,
            handleDateChange,
            handleChanges,
            filterForm,
            setFilterForm,
            handleResets
        }}>

            {children}
        </UserContext.Provider>
    )

}








export const useUserContext = () => {

    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useAppContext must be used within a UserWrapper')
    }
    return context;
}