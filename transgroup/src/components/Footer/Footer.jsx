import React from "react";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper_footer}>
      <div className={styles.container_footer}>
        <h1>{t("questions")}</h1>
        <div className={styles.emails}>
          <h2>info@reklamavmetro.uz</h2>
          <h2>info@transgroup.uz</h2>
        </div>

        <button>{t("WriteToUs")}</button>
      </div>
      <div className={styles.footer_content_wrapper}>
        <article>
          <div className={styles.logo}></div>
        </article>
        <article></article>
        <article></article>
        <article></article>
      </div>
    </div>
  );
};

export default Footer;
