import { useRouter } from 'next/router'
import home from '../styles/home.module.css'

export default function Home(){
  const router = useRouter();
    return(
      <>
        <div className={home.container}>
            <div className={home.title}>GitGud</div>
            <h6 className={home.desc}>The new standard of Indian ANPR systems</h6>
            <button className={home.login} onClick={() => router.replace('/login')}>Log In</button>
        </div>
        <style jsx global>
          {`html, body {
            overflow-x: hidden;
            overflow-y: hidden;
            background-color: rgb(168, 84, 168);
          }`}
        </style>
      </>
    )
}