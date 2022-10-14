import Head from 'next/head';
import Image from 'next/image';
import loginPic from '../../public/login-pict.jpg';
import LoginButton from '../../components/buttons/LoginButton';
import Style from '../../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Pok One Hotel</title>
      </Head>

        <div className="flex flex-row font-sans">

          <div className="flex basis-2/4">
            <div className="flex container bg-white h-screen justify-center items-center">
              <div className="m-auto">
                  <div className="title font-black text-4xl mb-3 pb-5"><h1>Login</h1></div>

                  <div className="title font-bold text-lg mb-1"><p>Email</p></div>
                  <input type="text" name="email" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>
                
                  <div className="title font-bold text-lg mb-1"><p>Password</p></div>
                  <input type="password" name="password" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-10"/>

                  <div className=""><a href="/Beranda"><LoginButton/></a> Belum punya akun? <Link href="/loginregist/Registrasi"><a className="text-blue-400 text-extrabold">Daftar</a></Link></div>
              </div>
            </div>
          </div>


          <div className="flex basis-2/4">
              <Image
                src={loginPic}
                alt="Login Picture"
                className='object-cover rounded-l-xl'
              />
          </div>


        </div>
    </>
  )
}
