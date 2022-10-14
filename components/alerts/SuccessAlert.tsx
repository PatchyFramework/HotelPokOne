import Style from "../../styles/components/Alerts.module.css";
export default function SuccessAlert() {
    return (
        <>
            <button disabled className={`${Style.successAlert} py-1 text-green-600 rounded-md border-green-600`} type="button">Booking Berhasil!</button>
        </>
    )
}