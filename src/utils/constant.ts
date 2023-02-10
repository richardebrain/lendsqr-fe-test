import { sideBarProps } from "./types";
import { IconBadge, IconBank, IconChart, IconClipboard, IconCoins, IconGuarantor, IconHandshake, IconKarma, IconLoan, IconLoanRequest, IconOrganisation, IconPiggy, IconScroll, IconServiceAccount, IconSettings, IconSlider, IconTransactions, IconUser, IconWhitelist } from '@/components/icons/svgs'

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