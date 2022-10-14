import Link from "next/link";
import styles from "../styles/components/Navbar.module.css"
import LoginButton from "./buttons/LoginButton";
import RegisterButton from "./buttons/RegisterButton";


export default function Navbar() {
    return(
        <>
            <div className={`${styles.navbar} bg-white p-5 flex justify-between align-middle z-50`}>
                <div className="logo mt-2">
                    <Link href="/"><a href="#" className="title font-bold">Hotel Pok One</a></Link>
                </div>

                <ul className={`${styles.navbarList} flex gap-10 mt-2`}>
                    <li className={`${styles.navbarItem}`}>
                        <Link href="/Beranda"><a>Beranda</a></Link>
                    </li>
                    <li className={`${styles.navbarItem}`}>
                        <Link href="/Kontak"><a>Kontak</a></Link>
                    </li>
                </ul>

                <div className="flex gap-5">
                    <LoginButton/>
                    <RegisterButton/>
                </div>
            </div>
        </>
    )
}