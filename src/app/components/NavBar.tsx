import Image from "next/image"

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
                    <p>Servicios</p>
                    <p>Nosotros</p>
                    <p>Productos</p>
                    <p>Contacto</p>
                </div>
            </div>
        </nav>
    )
}