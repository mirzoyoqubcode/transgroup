import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo2.png";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <ul className={styles.links}>
          <li>{t("Home")}</li>
          <li>{t("AboutUs")}</li>
          <li>{t("Weoffer")}</li>
          <li>{t("Price")}</li>
          <li>{t("downloadslides")}</li>
        </ul>
        <div className={styles.lang}>
          <p onClick={() => i18n.changeLanguage("en")}>
            <img src="https://flagcdn.com/w20/us.png" alt="Russia" />
            ENG
          </p>
          <p onClick={() => i18n.changeLanguage("ru")}>
            <img src="https://flagcdn.com/w20/ru.png" alt="Russia" />
            RUS
          </p>
          <p onClick={() => i18n.changeLanguage("uz")}>
            <img src="https://flagcdn.com/w20/uz.png" alt="Russia" />
            UZ
          </p>
        </div>
        <div
          onClick={() => setShowNavMenu(!showNavMenu)}
          className={styles.menu}
        >
          <MenuIcon />
        </div>
      </div>

      <div
        className={clsx({
          [styles.navMenu]: true,
          [styles.showMenu]: showNavMenu,
        })}
      >
        <ul>
          <li>{t("Home")}</li>
          <li>{t("AboutUs")}</li>
          <li>{t("Weoffer")}</li>
          <li>{t("Price")}</li>
          <li>{t("downloadslides")}</li>
        </ul>
        <div className={styles.mobilelang}>
          <p onClick={() => i18n.changeLanguage("en")}>
            <img src="https://flagcdn.com/w20/us.png" alt="Russia" />
            ENG
          </p>
          <p onClick={() => i18n.changeLanguage("ru")}>
            <img src="https://flagcdn.com/w20/ru.png" alt="Russia" />
            RUS
          </p>
          <p onClick={() => i18n.changeLanguage("uz")}>
            <img src="https://flagcdn.com/w20/uz.png" alt="Russia" />
            UZ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
