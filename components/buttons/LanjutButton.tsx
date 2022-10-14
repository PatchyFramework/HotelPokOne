import Style from "../../styles/components/Buttons.module.css"
export default function LanjutButton() {
    return (
        <>
            <button className={`${Style.lanjutButton} py-1 text-white rounded-md`} type="button">Lanjut</button>
        </>
    )
}