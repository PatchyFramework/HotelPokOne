import Head from 'next/head';
import Image from 'next/image';
import registPic from '../../public/regist-pict.jpg';
import LanjutButton from '../../components/buttons/LanjutButton';
import Link from 'next/link';

export default function Registrasi() {
  return (
    <>
      <Head>
        <title>Registrasi | Pok One Hotel</title>
      </Head>

        <div className="flex flex-row">

          <div className="flex basis-2/4">
            <div className="flex container bg-white h-screen justify-center items-center">
              <div className="m-auto">
                  <div className="title font-black text-4xl mb-3 pb-5"><h1>Registrasi</h1></div>

                  <div className="title font-bold text-lg mb-1"><p>Nama Lengkap</p></div>
                  <input type="text" name="nama" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>
                
                  <div className="title font-bold text-lg mb-1"><p>NIK</p></div>
                  <input type="int" name="nik" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>

                  <div className="title font-bold text-lg mb-1"><p>Nomor Telepon</p></div>
                  <input type="int" name="no_telepon" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>
                
                  <div className="title font-bold text-lg mb-1"><p>Email</p></div>
                  <input type="text" name="email" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>

                  <div className="title font-bold text-lg mb-1"><p>Password</p></div>
                  <input type="password" name="password" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>
                
                  <div className="title font-bold text-lg mb-1"><p>Konfirmasi Password</p></div>
                  <input type="password" name="confirm_password" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-10"/>

                  <div className=""><Link href="/loginregist/LanjutanRegistrasi"><a><LanjutButton/></a></Link> Sudah punya akun? <Link href="/loginregist/"><a className="text-blue-400 text-extrabold">Login</a></Link></div>
              </div>
            </div>
          </div>


          <div className="flex basis-2/4">
              <Image
                src={registPic}
                alt="Login Picture"
                className='object-cover rounded-l-xl'
              />
          </div>


        </div>
    </>
  )
}
