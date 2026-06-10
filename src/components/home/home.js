import React from 'react'
import style from "./home.module.css"
import Image from "next/image"
export default function home() {
  return (
    <div>
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
          <p className={style.para}>
            A powerful School Management Software for managing all the
            activities of school simply.
          </p>
        </div>
      </div>
    </div>
  );
}
