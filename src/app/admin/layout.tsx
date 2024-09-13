import { NavAdmin } from "./components/NavAdmin";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavAdmin />
            {children}
        </>
    )
}