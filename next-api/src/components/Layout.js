import Link from "next/link";

export default function Layout({children}){
    return(
        <>
        <nav>
            <ul className="meny">
                <li><Link href="/">Hjem</Link></li>
                <li><Link href="/games">Spill</Link></li>
                <li><Link href="/add-game">Legg til spill</Link></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        </>
    )
}