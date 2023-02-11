import { sideBarProps, usersCardProps } from "./types";
import { IconActiveUser, IconBadge, IconBank, IconChart, IconClipboard, IconCoins, IconFilter, IconGuarantor, IconHandshake, IconKarma, IconLoan, IconLoanRequest, IconOrganisation, IconPiggy, IconScroll, IconServiceAccount, IconSettings, IconSlider, IconTransactions, IconUser, IconUsersCard, IconUsersLoan, IconUsersSave, IconWhitelist } from '@/components/icons/icon'

export const sidebarRoutes: sideBarProps = [
    {
        title: 'Customer',
        routes: [
            {
                path: '/users',
                name: 'Users',
                Icon: IconUser
            },
            {
                path: '/Guarator',
                name: 'Guarantors',
                Icon: IconGuarantor
            },
            {
                path: '/loan',
                name: 'Loans',
                Icon: IconLoan
            },
            {
                path: '/decison-models',
                name: 'Decison Models',
                Icon: IconHandshake
            },
            {
                path: '/savings',
                name: 'Savings',
                Icon: IconPiggy
            },
            {
                path: '/loan-request',
                name: 'Loan Request',
                Icon: IconLoanRequest
            },
            {
                path: '/whitelist',
                name: 'Whitelist',
                Icon: IconWhitelist
            },
            {
                path: '/karma',
                name: 'Karma',
                Icon: IconKarma
            },
        ]

    },
    {
        title: 'Businesses',
        routes: [
            {
                path: '/organisation',
                name: 'Organistaion',
                Icon: IconOrganisation
            },
            {
                path: '/loan-products',
                name: 'Loan Products',
                Icon: IconLoanRequest
            },
            {
                path: '/savings-products',
                name: 'Savings Products',
                Icon: IconBank
            },
            {
                path: '/fees-and-charges',
                name: 'Fess And Charges',
                Icon: IconCoins
            },
            {
                path: '/transactions',
                name: 'Transactions',
                Icon: IconTransactions
            },
            {
                path: '/settings',
                name: 'Settings',
                Icon: IconSettings
            },
            {
                path: '/service-account',
                name: 'Service Account',
                Icon: IconServiceAccount
            },
            {
                path: '/settlement',
                name: 'Settlement',
                Icon: IconScroll
            },
            {
                path: '/reports',
                name: 'Reports',
                Icon: IconChart
            },
        ]

    },
    {
        title: 'Settings',
        routes: [
            {
                path: '/preferences',
                name: 'Preferences',
                Icon: IconSlider
            },
            {
                path: '/fees-and-pricings',
                name: 'Fees And Pricings',
                Icon: IconBadge
            },
            {
                path: '/audit-logs',
                name: 'Audit Logs',
                Icon: IconClipboard
            },

        ]
    }

]

export const usersCard: usersCardProps[] = [
    {
        title: 'Users',
        Icon: IconUsersCard,
        count: '2,453',
        color: 'rgba(223, 24, 255, 0.1)'
    },
    {
        title: 'Active Users',
        Icon: IconActiveUser,
        count: '2,453',
        color: 'rgba(87, 24, 255, 0.1)'
    },
    {
        title: 'Users With Loans',
        Icon: IconUsersLoan,
        count: '12,453',
        color: 'rgba(245, 95, 68, 0.1)'
    },
    {
        title: 'Users With Savings',
        Icon: IconUsersSave,
        count: ' 102,453',
        color: 'rgba(255, 51, 102, 0.1)'
    }
]

export const tableHeader = [
    {
        title: 'Organisation',
        Icon:IconFilter,
        
    },
    {
        title: 'UserName',
        Icon:IconFilter,
        
    },
    {
        title: 'Email',
        Icon:IconFilter,
        
    },
    {
        title: 'Phone Number',
        Icon:IconFilter,
        
    },
    {
        title: 'Date Joined',
        Icon:IconFilter,
        
    },
    {
        title: 'Status',
        Icon:IconFilter,
        
    }

]