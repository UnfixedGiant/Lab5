"use client"

import CustomLoginForm from "./CustomLoginForm"
import SigninButton from "./SigninButton"
import { useState } from "react"

import { handleGoogleLogin } from "@/app/actions/GoogleAction"



const LoginPage = () => {

    const [elogin, setElogin] = useState(false)


    const ShowEmailLogin = () => {
        setElogin(!elogin)
    }

    return (
        <>
            <h2 className="card-title text-2xl justify-center">Please Sign In</h2>
            <form className="mt-4">
                <SigninButton
                    text="Google"
                    style="btn btn-primary w-full"
                    formAction={handleGoogleLogin}
                />
            </form>
            <div className="mt-4">
                <SigninButton
                    text="Email"
                    style="btn btn-primary w-full"
                    callback={ShowEmailLogin}
                />
            </div>
            {elogin ? <CustomLoginForm /> : ""}
        </>

    )
}

export default LoginPage