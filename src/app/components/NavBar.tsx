import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
    return (
        <nav>
            <div className="content">
                <div className="logo">
                    <Image
                        alt="logo"
                        width={80}
                        height={80}
                        src="/gymlogo.png"
                    />
                </div>
                <div className="links">
                    <Link href={"#section1"} style={{ textDecoration: "none", color: "white" }}> <p>Servicios</p></Link>
                    <Link href={"#section2"} style={{ textDecoration: "none", color: "white" }}> <p>Nosotros</p></Link>
                    <Link href={"#section4"} style={{ textDecoration: "none", color: "white" }}> <p>Contacto</p></Link>
                </div>
            </div>
        </nav>
    )
}