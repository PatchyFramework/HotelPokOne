import Head from 'next/head';
import Image from 'next/image';
import registPic from '../../public/regist-pict.jpg';
import RegisterButton from '../../components/buttons/RegisterButton';
import Link from 'next/link';

export default function LanjutanRegistrasi() {
  return (
    <>
      <Head>
        <title>Lanjutan Registrasi | Pok One Hotel</title>
      </Head>



        <div className="flex flex-row">

          <div className="flex basis-2/4">
            <div className="flex container bg-white h-screen justify-center items-center">
              <div className="m-auto">
                  <div className="title font-black text-4xl mb-3 pb-5"><h1>Registrasi</h1></div>

                  <div className="title font-bold text-lg mb-1"><p>Tanggal Lahir</p></div>
                  <input type="date" name="tgl_lahir" id="" className="bg-slate-200 py-2 px-20 rounded-md mb-4"/>

                  <div className="title font-bold text-lg mb-1"><p>Alamat</p></div>
                  <input type="text" name="confirm_password" id="" className="bg-slate-200 py-20 px-20 rounded-md mb-10"/>

                  <div className=""><Link href="/Beranda"><RegisterButton/></Link> Sudah punya akun? <Link href="/loginregist/"><a className="text-blue-400 text-extrabold">Login</a></Link></div>
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
