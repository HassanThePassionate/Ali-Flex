import Link from "next/link";
import style from "../styles/navbar.module.css";

const Nav = () => {
  return (
    <>
      <nav className={style.navbar}>
        <div>
          <ul className={style.navbarList}>
            <li className={style.navbarIteam}>
              <Link href="/">Home</Link>
            </li>

            <li className={style.navbarIteam}>
              <Link href="/About">About</Link>
            </li>

            <li className={style.navbarIteam}>
              <Link href="/Movie">Movies</Link>
            </li>

            <li className={style.navbarIteam}>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
