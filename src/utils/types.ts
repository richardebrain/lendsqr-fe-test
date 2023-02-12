export type sideBarProps = {
    title: string
    routes: {
        path: string
        name: string
        Icon: React.FC<React.SVGProps<SVGSVGElement>>


    }[]


}[]


export type AlluserProps = {
    accountBalance: number
    accountNumber: number
    createdAt: Date | number | Date
    email: string
    lastActiveDate: string
    userName: string
    orgName: string
    id: string
    phoneNumber: string
    guarantor: {
        address: string
        firstName: string
        gender: string
        lastName: string
        phoneNumber: string
    }
    education: {
        duration: string
        employmentStatus: string
        level: string
        loanRepayment: string
        officeEmail: string
        sector: string
        monthlyIncome: []
    }
    profile: {
        firstName: string
        lastName: string
        phoneNumber: string
        gender: string
        currency: string
        address: string
        bvn: string
        avatar: string
    }
    social: {
        facebook: string
        instagram: string
        twitter: string
    }
}

export type usersCardProps = {
    title: string
    count: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    color: string
}