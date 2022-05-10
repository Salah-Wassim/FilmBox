import React from "react"
import {useState} from 'react-native'
import { set } from "react-native-reanimated"

import SignIn from './pages/signIn'

export default function securitySignIn() {

    const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        
        const getChangeEmail = (event) => {
            setEmailError('')
            setEmail(event.target.value)
        }
        const getChangePassowrd = (event) => {
            setPasswordError('')
            setPassword(event.target.value)
        }
        const 

        const onSubmit = () => {
            const body = {
                email : email,
                password: password,
            }
            setTimeout(() => {
                setEmail('')
                setPassword('')
            }, 300);
        }
        
    }

    return(
        <SignIn/>
    )
} 
