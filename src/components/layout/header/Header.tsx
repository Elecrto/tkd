"use client"
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import cn from "classnames";
import Link from "next/link";
import Burger from "../../UI/burger/Burger";

const Header = () => {
   const [isShow, setIsShow] = useState(false);
   const pathname = usePathname();
   const closeMenu = () => {
      setIsShow(false);
   };
   const scrollToBottom = () => {
      const top = document.body.scrollHeight;
      closeMenu();
      window.scroll({
         top,
         behavior: "smooth",
      });
   };
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles["header-container"]}>
                  <Link href="/" className="flex shrink-0 items-center gap-x-4">
                     <div className="size-[70px] max-xl:size-14 bg-main rounded-full" />
                     <div className={styles.label}>
                        Федерация Тхэквондо ГТФ Республики Татарстан
                     </div>
                  </Link>
                  <div
                     className={cn(styles["menu-wrapper"], {
                        [styles._active]: isShow,
                     })}
                  >
                     <menu className={styles.menu}>
                        <nav className={styles.nav}>
                           <Link
                              href="/"
                              className={cn(styles.item, {
                                 [styles._active]: pathname === "/",
                              })}
                              onClick={closeMenu}
                           >
                              Главная
                           </Link>
                           <Link
                              href="/calendar"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("calendar"),
                              })}
                              onClick={closeMenu}
                           >
                              Календарный план
                           </Link>
                           <Link
                              href="/structure"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("structure"),
                              })}
                              onClick={closeMenu}
                           >
                              Структура организации
                           </Link>
                           <Link
                              href="/schedule"
                              className={cn(styles.item, {
                                 [styles._active]:
                                    pathname.includes("schedule"),
                              })}
                              onClick={closeMenu}
                           >
                              Расписание
                           </Link>
                           <button
                              className={styles.item}
                              onClick={scrollToBottom}
                           >
                              Контакты
                           </button>
                        </nav>
                     </menu>
                     <Link href="/record">
                        <button className={styles.button}>Записаться</button>
                     </Link>
                     <Burger isShow={isShow} setIsShow={setIsShow} />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
