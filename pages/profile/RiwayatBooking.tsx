import Head from "next/head";
import Navbar2 from "../../components/Navbar2";
import Link from "next/link";
import Styles  from "../../styles/components/Fonts.module.css";
import SuccessAlert from "../../components/alerts/SuccessAlert";
import PendingAlert from "../../components/alerts/PendingAlert";
import BatalButton from "../../components/buttons/BatalButton";

export default function PersonalInfo() {
    return(
<>
        <Head>
            <title>Booking History | Pok One Hotel</title>
        </Head>


        <Navbar2/>

        <div className="flex flex-row">
            <div className="flex basis-1/4 z-0">
                <div className="flex container bg-white h-screen justify-center m-auto drop-shadow-2xl relative">
                    <ul className={`${Styles.fontItem} space-y-1 absolute place-items-center p-50 mt-40`}>
                        <li className="text-bold mb-4 text-2xl"><Link  href="/profile/PersonalInfo"><a> Informasi Personal</a></Link></li>
                        <li className="text-bold mb-4 text-2xl"><Link  href="/profile/RiwayatBooking"><a> Riwayat Booking</a></Link></li>
                    </ul>
                </div>
            </div>

            
            <div className="flex basis-4/5">
                <div className="flex container bg-white h-screen justify-left items-center ml-10 pl-5">
                    <div className={`${Styles.booking}`}>

                            <div className="flex flex-col bg-white rounded-lg drop-shadow-xl pl-4 my-10 relative">
                                <div className="font-bold text-lg my-5">History Booking</div>

                                <div className="font font-medium space-y-2 mb-5">
                                    <div className="">ID Booking : 1304060005</div>
                                    <div className="">Tipe Kamar : VIP</div>
                                    <div className="">Total Harga : Rp. 3.999.000</div>
                                        <div className="flex basis-3/4">2 Hari 1 Malam | Kamis, 13 April 2006 | Sabtu, 15 April 2006 <div className="right-0 absolute mr-3"><Link href="/Beranda"><BatalButton/></Link></div></div>
                                </div>

                                <div className="absolute right-0 top-0 mt-3 mr-3"><PendingAlert/></div>
                            </div>

                            <div className="flex flex-col bg-white rounded-lg drop-shadow-xl pl-4 my-10 px-20 relative">
                                <div className="font-bold text-lg my-5">History Booking</div>

                                <div className="font font-medium space-y-2 mb-5">
                                    <div className="">ID Booking : 1304060005</div>
                                    <div className="">Tipe Kamar : Reguler</div>
                                    <div className="">Total Harga : Rp. 300.000</div>
                                    <div className="">2 Hari 1 Malam | Kamis, 13 April 2006 | Sabtu, 15 April 2006</div>
                                </div>

                                <div className="absolute top-0 right-0 mt-3 mr-3"><SuccessAlert/></div>
                            </div>

                            <div className="flex flex-col bg-white rounded-lg drop-shadow-xl pl-4 my-10 px-20 relative">
                                <div className="font-bold text-lg my-5">History Booking</div>

                                <div className="font font-medium space-y-2 mb-5">
                                    <div className="">ID Booking : 1304060005</div>
                                    <div className="">Tipe Kamar : Reguler</div>
                                    <div className="">Total Harga : Rp. 300.000</div>
                                    <div className="">2 Hari 1 Malam | Kamis, 13 April 2006 | Sabtu, 15 April 2006</div>
                                </div>

                                <div className="absolute top-0 right-0 mt-3 mr-3"><SuccessAlert/></div>
                            </div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    )
}