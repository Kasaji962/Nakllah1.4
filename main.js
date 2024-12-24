// function changeLanguage(languageCode) {
//     Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
//         if (elem.classList.contains('lang-' + languageCode)) {
//              elem.style.display = 'initial';
//         }
//         else {
//              elem.style.display = 'none';
//         }
//     });
// }

// // select handler
// const selector = document.getElementById('langSelector');
// selector.addEventListener('change', function (evt) {
//     changeLanguage(this.value);
// });

// // detect initial browser language
// const lang = navigator.userLanguage || navigator.language || 'en-EN';
// const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
// changeLanguage(startLang);

// // updating select with start value
// selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang)

// fill "The selected language is:"
// document.getElementById('browserLang').innerText = lang;
// document.getElementById('startLang').innerText = startLang;



// function changeLanguage(languageCode) {
//     Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
//         if (elem.classList.contains('lang-' + languageCode.toLowerCase())) {
//             elem.style.display = ''; // Reset to default display value
//         } else {
//             elem.style.display = 'none'; // Hide other languages
//         }
//     });
// }

// // Select handler
// const selector = document.getElementById('langSelector');
// if (selector) {
//     selector.addEventListener('change', function () {
//         changeLanguage(this.value);
//     });

//     // Detect initial browser language
//     const lang = (navigator.userLanguage || navigator.language || 'en').toLowerCase();
//     const availableLanguages = Array.from(selector.options).map(opt => opt.value.toLowerCase());
//     const startLang = availableLanguages.find(val => lang.includes(val)) || 'en';

//     changeLanguage(startLang);

//     // Update select with start value
//     selector.selectedIndex = availableLanguages.indexOf(startLang);
// } else {
//     console.warn("Language selector not found.");
// }






//   const greeting = document.getElementById('greeting');
//   const languageSelect = document.getElementById('language-select');

//   languageSelect.addEventListener('change', function() {
//     if (languageSelect.value === 'ar') {
//       greeting.textContent = 'مرحبا';
//     } else if (languageSelect.value === 'en') {
//       greeting.textContent = 'Hello';
//     }
//   });



// const translations = {
//     en: {

//         // navbar1: "Home",
//         // navbar2: "About us",
//         // navbar3: "login",
//         // navbar4: "signup",
//         title: "what are you looking for? (Excavator or truck?)"

//     },
//     ar: {

//      
//         title: "عن ماذا تبحث؟ (جرافة او ناقلة؟)"

//     }
// }

// const langSelectop = document.querySelector("select");
// let TheQustion = document.getElementById("TheQustion");
// // let TheQustion = document.getElementById("TheQustion");
// // let TheQustion = document.getElementById("TheQustion");
// // let TheQustion = document.getElementById("TheQustion");

// langSelectop.addEventListener("change", (event)=> {
//     setLanguage(event.target.value)
// })

// const setLanguage = (language)=> {
//     if(language== "ar"){
//         TheQustion.innerText = translations.ar.title;

//     }else if (language == "en"){
//         TheQustion.innerText = translations.en.title    }
// }


const translations = {
    en: {
        title: "What are you looking for? (Excavator or truck?)",
        navbar1: "Home",
        navbar2: "About us",
        navbar3: "login",
        navbar4: "signup",

    },
    ar: {
        title: "عن ماذا تبحث؟ (جرافة او ناقلة؟)",
        navbar1: "الرئيسية",
        navbar2: "من نحن",
        navbar3: "تسجيل الدخول",
        navbar4: "انشاء حساب",

    }
};

const langSelector = document.querySelector("select");
const theQuestion = document.getElementById("TheQustion");
const navH = document.getElementById("navH");
const navA = document.getElementById("navA");
const navL = document.getElementById("navL");
const navS = document.getElementById("navS");

// تغيير اللغة عند اختيار المستخدم
langSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

// دالة لتغيير النص بناءً على اللغة
const setLanguage = (language) => {
    if (language === "ar") {
        theQuestion.innerText = translations.ar.title;
        navH.innerText = translations.ar.navbar1;
        navA.innerText = translations.ar.navbar2;
        navL.innerText = translations.ar.navbar3;
        navS.innerText = translations.ar.navbar4;

    } else if (language === "en") {
        theQuestion.innerText = translations.en.title;
        navH.innerText = translations.en.navbar1;
        navA.innerText = translations.en.navbar2;
        navL.innerText = translations.en.navbar3;
        navS.innerText = translations.en.navbar4;
    }
};

// تحديد اللغة الافتراضية عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const defaultLanguage = langSelector.value || "en";
    setLanguage(defaultLanguage);
});







// var imgSrc = "en";
// var ActiveDic;
// var langSel;
// if(window.name){
//     langSel=window.name;
//     }
// else{langSel="English";
// }

// function LangChange(){
// langClass = document.getElementsByClassName("dicRef");
// var i = langClass.length;
// var Start, Stop, idSrc, idDic;
// var navText;

// switch(langSel){
//     case "French":
//         langSel="French";
//         imgSrc = "en";
//         navText="Anglais";
//         break;
//     case "English":
//     case "Anglais":
//     default:
//         langSel="English";
//         imgSrc = "fr";
//         navText="French";
//         break;
//     }
// ActiveDic="dic"+langSel;
// window.name=langSel;

// while(i--){
//     idSrc = langClass[i].id;
//     Start=idSrc.indexOf("_")+1;
//     Stop=idSrc.lastIndexOf("_");
//     idDic=idSrc.slice(Start,Stop);
//     if(window[ActiveDic][idDic]){
//         document.getElementById(idSrc).innerHTML=window[ActiveDic][idDic];}
//     else{
//         document.getElementById(idSrc).innerHTML="N/A";
//     }
// }
// if(document.getElementById("imgSel")){
//     document.getElementById("imgSel").src="../../img/"+imgSrc+".gif";
// }
// if (document.getElementById("l_SelLang1_1")){
//     document.getElementById("l_SelLang1_1").innerHTML=navText;
// }
// }


