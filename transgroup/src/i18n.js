import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "uz",
    resources: {
      en: {
        translation: {
          Home: "Home",
          AboutUs: "About us",
          Weoffer: "We offer",
          Price: "Price",
          WriteToUs: "Write to us",
          Contactus: "Contact Us",
          header: "Advertising subway in Tashkent",
          submityourapplication: "Submit your application",
          downloadslides: "Download presentation",
          learnmore: "Learn more",
          unique: "Unique Approach",
          unique_desc:
            "We study the product of each client to develop a suitable solution",
          quality: "Quality",
          quality_desc:
            "About the quality of our services, you can find in the block with reviews",
          team: "Experienced Team",
          team_desc:
            "Large and friendly family, with many years of experience in advertising",
          questions: "Have questions? We will answer.",
        },
      },
      uz: {
        translation: {
          Home: "Bosh sahifa",
          AboutUs: "Biz haqimizda",
          Weoffer: "Biz taklif etamiz",
          Price: "Narxlarimiz",
          WriteToUs: "Bizga yozing",
          Contactus: "Biz bilan bog'laning",
          header: "Toshkent metrosida reklama joylashtirish",
          submityourapplication: "Arizangizni yuboring",
          downloadslides: "Taqdimotni yuklab olish",
          learnmore: "Qo'shimcha ma'lumot olish uchun",
          unique: "Noyob yondashuv",
          unique_desc:
            "Tegishli yechimni ishlab chiqish uchun har bir mijozning mahsulotini o'rganamiz",
          quality: "Sifat",
          quality_desc:
            "Xizmatlarimiz sifati haqida siz sharhlar bilan blokda topishingiz mumkin",
          team: "Tajribali Jamoa",
          team_desc:
            "Reklama sohasida ko'p yillik tajribaga ega bo'lgan katta va do'stona oila",
          questions: "Savollaringiz bormi? Biz javob beramiz.",
        },
      },
      ru: {
        translation: {
          Home: "Главная",
          AboutUs: "О Компании",
          Weoffer: "Мы предлагаем",
          Price: "Стоимость",
          WriteToUs: "Напишите нам",
          Contactus: "Связаться с нами",
          header: "Размещение рекламы в Ташкентском метрополитене",
          submityourapplication: "Оставить заявку",
          downloadslides: "Скачать презентацию",
          learnmore: "Узнать больше",
          unique: "Уникальный подход",
          unique_desc:
            "Изучаем продукт каждого клиента, для разработки подходящего решения",
          quality: "Качество",
          quality_desc:
            "О качестве наших услуг, Вы можете ознакомиться в блоке с отзывами",
          team: "Опытная команда",
          team_desc:
            "Большая и дружная семья, с многолетним опытом работы в рекламе",
          questions: "Есть вопросы? Мы ответим.",
        },
      },
    },
  });
