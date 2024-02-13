import hero from "../styles/herosection.module.css";
import style from "../styles/common.module.css";
import Link from "next/link";
import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const HeroSection = (props) => {
  return (
    <>
      <main className={hero.main_section}>
        <div className={style.container}>
          <div className={style.grid_two_section}>
            <div className={hero.hero_content}>
              <h1>{props.title}</h1>
              <p>
                From award-winning dramas to blockbuster action movies,
                we&apos;ve got you covered. Browse our selection of the latest
                and greatest movies, and find your new favorite today.
              </p>
              <Link href="/Movie">
                <button className={mulish.className}>Explore Movies</button>
              </Link>
            </div>
            <div className={hero.hero_image}>
              <Image
                src={props.imageUrl}
                alt="Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
