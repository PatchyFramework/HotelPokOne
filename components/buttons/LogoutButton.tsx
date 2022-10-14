import Style from "../../styles/components/Buttons.module.css"

export default function LogoutButton() {
    return (
        <>
            <button className={`${Style.logoutButton} py-1 text-white rounded-md`}>Logout</button>
        </>
    )
}