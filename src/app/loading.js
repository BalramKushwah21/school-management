import style from "./styles/loading.module.css";

export default function Loading() {
  return (
    <div className={style.skeletonPage}>
      <div className={style.navbar}></div>

      <div className={style.content}>
        <div className={style.sidebar}></div>

        <div className={style.main}>
          <div className={style.card}></div>
          <div className={style.card}></div>
          <div className={style.card}></div>
        </div>
      </div>
    </div>
  );
}
