import Style from "../../styles/components/Buttons.module.css"
export default function InfoButton() {
    return (
        <>
            <button className={`${Style.infoButton} py-1 text-white rounded-md`} type="button">Edit Informasi</button>
        </>
    )
}