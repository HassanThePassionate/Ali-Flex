import Link from "next/link";
import style from "../styles/navbar.module.css";
import Nav from "./Nav";
import { Bebas_Neue } from "next/font/google";

const workbench = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
const Header = () => {
  return (
    <>
      <header className={style.main_header}>
        <div className={style.navbar_brand}>
          <Link href="/">
            <h4 className={workbench.className}>AliFlex</h4>
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
