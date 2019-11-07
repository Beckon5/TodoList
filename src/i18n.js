import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./translation/translation.json"
// the translations
// (tip move them in a JSON file and import them)
// const resources = {
//   en: {
//     translation: {
//       "title": "To do list",
//       "inputPlaceholder":"What to do?",
//         "all": "All",
//         "completed": "Completed",
//         "inProgress": "In progress"
    
//     }
//   },
//   ru: {
//     translation: {
//       "title": "Список дел",
//       "inputPlaceholder":"Что будем делать?",
//           "all": "Все",
//           "completed": "Завершенные",
//           "inProgress": "В процессе"
      
//     }
//   }
// };

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;