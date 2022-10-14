import Style from "../../styles/components/Buttons.module.css"
export default function RegisterButton() {
    return (
        <>
            <button className={`${Style.registerButton} py-1 title rounded-md hover:text-white`}>
                Daftar
            </button>
        </>
    )
}