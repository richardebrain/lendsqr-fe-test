import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './signin.scss'
import landingImage from '../../assets/sign-in-image.png'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '@/context/MainContext'

const SignInPage = () => {
    const { setAdminLogin, adminLogin, loading, setLoading ,setIsAdmin} = useAppContext()
    const [show, setShow] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAdminLogin({ ...adminLogin, [name]: value })
    }
    const navigate = useNavigate()
    const [errors, setErrors] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (adminLogin.email.trim() === '' && adminLogin.password.trim() === '') return;
        setLoading(true)
        setTimeout(() => {
            navigate('/users')
            setLoading(false)
        }, 4000)
        setIsAdmin(true)
    }

    return (
        <main className='sign_container'>
            <div className='container_first'>
                <Logo className='logo' />
                <img src={landingImage} alt="pablo" />

            </div>
            <div className='container_second'>
                <div className='welcome'>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>

                </div>
                <form className='form' onSubmit={(e) => e.preventDefault()}>
                    <div className={`input_container ${errors && 'error'}`}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Email'
                            onChange={(e) => handleChange(e)}
                            required

                        />
                    </div>
                    <div className='input_container'>
                        <input
                            type={show ? 'text' : 'password'}
                            name="password"
                            id="password"
                            placeholder='Password'
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <span className='show_password'
                            onClick={(e) => {
                                e.preventDefault()
                                setShow(!show)
                            }}
                        >
                            {
                                show ? 'Hide' : 'Show'
                            }
                        </span>
                    </div>
                    <Link to='/forgot-password' className='forgot_password'>FORGOT PASSWORD?</Link>
                    <button type="button" className='button' onClick={handleSubmit}>
                        {loading ? 'LOADING...' : 'LOG IN'

                        }
                    </button>


                </form>

            </div>


        </main>
    )
}

export default SignInPage