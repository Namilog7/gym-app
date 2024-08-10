import Image from "next/image"

export const NavBar = () => {
    return (
        <nav>
            <div className="content">
                <div className="logo">
                    <Image
                        alt="logo"
                        width={120}
                        height={120}
                        src="/gymlogo.png"
                    />
                </div>
                <div>
                    <p>Inicio</p>
                    <p>Servicios</p>
                    <p>Testimonios</p>
                    <p>Contacto</p>
                </div>
            </div>
        </nav>
    )
}