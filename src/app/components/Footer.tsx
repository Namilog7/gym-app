import { anton } from "../page"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="footer" id="section4">
            <div className="data">
                <h2 className={`${anton.className} titles`}>CONTACTO</h2>
                <p>Si tienes alguna pregunta o quieres más información, no dudes en comunicarte con nosotros.</p>
            </div>
            <div className="divredes">
                <a href="https://www.instagram.com/vikin_gym_/" className="redes ig">
                    <FaInstagram style={{ fontSize: "40px" }} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61556699037189" className="redes fb">
                    <FaFacebookF style={{ fontSize: "40px" }} />
                </a>
                <a href="https://wa.me/+5491149161112" className="redes wp">
                    <FaWhatsapp style={{ fontSize: "40px" }} />
                </a>
            </div>

        </div>
    )
}