import Link from "next/link";
import style from "../style/navbar.module.scss";

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <Link href="/">
                <h1>BuildTools</h1>
            </Link>
            <Link href="/">
                <p>
                    Home
                </p>
            </Link>
            <Link href="/">
                <p>
                    Build Tools
                </p>
            </Link>
            <Link href="/">
                <p>
                    Server Tools
                </p>
            </Link>
            <Link href="/">
                <p>
                    Documentation
                </p>
            </Link>
            <Link href="/contacts">
                <p>
                    Contacts
                </p>
            </Link>
        </nav>
    );
}