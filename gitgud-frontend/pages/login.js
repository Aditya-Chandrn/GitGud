import { useRef } from "react"
import login from '../styles/login.module.css'
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login(){
    const router = useRouter();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    return(
        <>
        <div className={login.container}>
            <form className={login.form}>
                <h1 className={login.title}>Login Form</h1>
                <label for="email">Email</label><br />
                <input className={login.input} name="email" type="email" ref={emailInputRef}></input>
                <br /><br />
                <label for="password">Password</label><br />
                <input className={login.input} name="password" type="password" ref={passwordInputRef}></input>
                <br /><br />
                <Link href='/dashboard'><input type="submit" value="Log In" className={login.login}/></Link>
            </form>
        </div>
        <style jsx global>
        {`html, body {
          overflow-x: hidden;
          overflow-y: hidden;
        }`}
      </style>
      </>
    )
}