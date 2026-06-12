import Image from "next/image";
import Header from "@/components/header/header";
import style from "./styles/home.module.css";
import HomePage from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
export default function Home() {
  const isLogin = true;
  const user = "admin";

  if (user === "admin" && isLogin) {
    return (
      <div className={style.maincontainer}>
        <Navbar />
      </div>
    );
  } else {
    return (
      <div className={style.maincontainer}>
        <Header />
        <HomePage />
      </div>
    );
  }
}

