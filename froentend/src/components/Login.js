import React,{useState,useEffect} from 'react'

export default function Login() {
const [Login, setLogin] = useState(false)

useEffect(() => {
    if(localStorage.getItem("tresorUser")){
        setLogin(true)
    }
    else{
        setLogin(false)
    }
   
}, [])

    const handleLogin=()=>{
        if(localStorage.getItem("tresorUser")){
            localStorage.removeItem("tresorUser")
            setLogin(false)
        }
        else{
            localStorage.setItem("tresorUser","satyam")
            setLogin(true)
        }
    }
    return (
        <div>
            <button className="login-btn" onClick={handleLogin}>{Login?"Logout":"Login"}</button>
        </div>
    )
}
