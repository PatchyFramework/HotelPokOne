import Style from "../../styles/components/Buttons.module.css"
export default function LoginButton() {
    return (
        <>
            <button className={`${Style.loginButton} py-1 text-white rounded-md`}>Login</button>
        </>
    )
}