import { anton } from "../page"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="data">
                <h2 className={anton.className} style={{ fontSize: "50px", margin: "0" }}>Contáctanos</h2>
                <p>Si tienes alguna pregunta o quieres más información, no dudes en comunicarte con nosotros.</p>
            </div>
        </div>
    )
}