import React, { useState } from 'react'
import MyHomePage from './MyHomePage'
import LoginPage from './LoginPage'

const ConditionalRendering = () => {

const [isLoggedIn, setLoggedIn] = useState(false);

const HandleAuth=()=>{
    setLoggedIn(!isLoggedIn)
}

    if (isLoggedIn) {
        return (
            <div> <MyHomePage value ={HandleAuth} ></MyHomePage> </div>
        )
    } else {
        return (
            <div>
                <LoginPage value ={HandleAuth}></LoginPage>
            </div>
        )
    }

}

export default ConditionalRendering