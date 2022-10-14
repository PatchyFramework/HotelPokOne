import Head from "next/head";
import Navbar2 from "../../components/Navbar2";
import Styles  from "../../styles/components/Fonts.module.css";
import Style from "../../styles/PersonalInfo.module.css"
import InfoButton from "../../components/buttons/InfoButton";
import Link from "next/link";


export default function PersonalInfo() {
    return(
        <>
        <Head>
            <title>Personal Info | Pok One Hotel</title>
        </Head>


        <Navbar2/>

        <div className={`${Styles.font} flex flex-row`}>
            <div className="flex basis-1/4 z-0">
                <div className="flex container bg-white h-screen justify-center m-auto drop-shadow-2xl relative">
                    <ul className={`${Styles.fontItem} space-y-1 absolute place-items-center p-50 mt-40`}>
                        <li className="text-bold mb-4 text-2xl">Informasi Personal</li>
                        <li className="text-bold text-2xl"><Link href="/profile/RiwayatBooking"> Riwayat Booking</Link></li>
                    </ul>
                </div>
            </div>

            
            <div className="flex basis-4/5">
                <div className="flex container bg-white h-screen justify-left items-center ml-10">
                    <div className="">
                            <div className="title font-black text-4xl mb-3 pb-5"><h1>Informasi Pribadi</h1></div>

                            <div className="title font-bold text-lg mb-1"><p>Nama Lengkap</p></div>
                            <input type="text" name="nama" id="" className={`${Style.inputField} bg-slate-200 rounded-md mb-4`} placeholder="Muhamad Ihsan Priyatna"/>
                
                            <div className="title font-bold text-lg mb-1"><p>Tanggal Lahir</p></div>
                            <input type="date" name="tgl_lahir" id="" className={`${Style.inputDate} bg-slate-200 rounded-md mb-4`} placeholder="13/04/2006"/>

                            <div className="title font-bold text-lg mb-1"><p>No. Telepon</p></div>
                            <input type="int" name="no_telepon" id="" className={`${Style.inputField} bg-slate-200 rounded-md mb-4`} placeholder="08818164995"/>
                
                            <div className="title font-bold text-lg mb-1"><p>NIK</p></div>
                            <input type="int" name="nik" id="" className={`${Style.inputField} bg-slate-200 rounded-md mb-4`} placeholder="3201241304060005"/>

                            <div className="title font-bold text-lg mb-1"><p>Alamat</p></div>
                            <input type="textarea" name="alamat" id="" className={`${Style.inputField} bg-slate-200 rounded-md mb-10`} placeholder="Jl. Veteran III RT 02/04 Desa Citapen Kecamatan Ciawi Kabupaten Bogor Jawa Barat 16720"/>

                            <div className=""><InfoButton/></div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    )
}