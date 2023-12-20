import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";
const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.header}>
      <div className={styles.content_header}>
        <p>{t("header")}</p>
      </div>
      <button>{t("WriteToUs")}</button>
    </div>
  );
};

export default Header;
