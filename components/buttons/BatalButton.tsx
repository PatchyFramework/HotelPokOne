import Style from "../../styles/components/Buttons.module.css";

export default function BatalButton() {
    return (
        <>
            <button className={`${Style.batalButton} py-1 text-red-600 rounded-md`} type="button">Batalkan</button>
        </>
    )
}