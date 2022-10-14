import Style from "../../styles/components/Alerts.module.css";
export default function PendingAlert() {
    return (
        <>
            <button disabled className={`${Style.pendingAlert} py-1 text-amber-500 rounded-md`}>Sedang Berlangsung</button>
        </>
    )
}