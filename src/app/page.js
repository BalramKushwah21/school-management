import Image from "next/image";
import Header from "@/components/header/header";
import style from "./styles/home.module.css";
export default function Home() {
  return (
    <div className={style.maincontainer}>
      <Header />
      <div className={style.container}>
        <Image
          className={style.homeImage}
          src="/school/HomePageImage.png"
          width={1000}
          height={1000}
          alt="Showcase Image"
        ></Image>

      <div className={style.content}>
        <h2 className={style.h2}>Convert your School into Smart School.</h2>
        <p className={style.para}>A powerful School Management Software for managing all the activities of school simply.</p>
      </div>
      </div>
    </div>
  );
}
