import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { login as authLogin} from '../store/authslice'
import {Button , Input ,Logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form" 

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const{register,handleSubmit}= useForm()
    const[error,setError]= useState("")
    const[isLoading, setIsLoading] = useState(false)
    
    const login = async(data)=> {
        setError("")
        setIsLoading(true)
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin({ userdata: userData }));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <div className='min-h-screen flex items-center justify-center w-full py-8 px-4'>
            <div className='relative w-full max-w-md'>
                {/* Background decoration */}
                <div className='absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-muted/20 rounded-full blur-xl'></div>
                <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl'></div>
                
                <div className='relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-muted/20'>
                    <div className="mb-6 flex justify-center">
                        <div className='w-24 h-24'>
                            <Logo width="100%" />
                        </div>
                    </div>
                    
                    <div className='text-center mb-8'>
                        <h2 className="text-3xl font-bold text-primary mb-2">Welcome Back</h2>
                        <p className="text-secondary">Sign in to continue your journey</p>
                    </div>
                    
                    {error && (
                        <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-xl'>
                            <p className="text-red-600 text-sm text-center">{error}</p>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit(login)} className='space-y-6'>
                        <Input
                            label="Email Address"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full py-3 text-lg font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className='flex items-center justify-center'>
                                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></div>
                                    Signing in...
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </Button>
                    </form>
                    
                    <div className='mt-8 text-center'>
                        <p className="text-secondary">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-semibold text-accent hover:text-primary transition-colors duration-300 underline-offset-4 hover:underline"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
