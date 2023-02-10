import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './signin.scss'
import landingImage from '../../assets/sign-in-image.png'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [show, setShow] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const navigate = useNavigate()
    const [errors, setErrors] = useState<string[]>([])
    const handleSubmit = () => {
        if (user.email.trim() === '' || user.password.trim() === ''){
            setErrors(['Please fill all fields'])
            return

        };

        navigate('/users')
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
                <form action="" className='form'>
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
                    <button type="submit" className='button' onClick={() => handleSubmit()}>LOG IN</button>


                </form>

            </div>


        </main>
    )
}

export default SignInPage