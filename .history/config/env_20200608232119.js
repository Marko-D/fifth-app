// Set environment variable listed in config/env.js
// dev | qa | staging | release

// To use te environment variables import the env file in your component
// import API from "../../config/env";
// and reference it
// console.log(API.admin)


// import { Platform } from "react-native"
import active from "../../active.env"

const envs = {
  dev: {
    imagePath: "http://d27x8bwqafmno1.cloudfront.net/",
    admin: "http://localhost:23064/",
    login: "http://localhost:47540/auth/",
    lms: "http://localhost:52821/",
    events: "http://localhost:2605/",
    translations: "http://emergenetics-qa-i18n.itlabs.com.mk/",
    culture: "https://s3.amazonaws.com/emgadminqa/translations/",
    imageResizer: "http://emergenetics-gi-qa-images.devweb.office.it-labs.com/",
    notify: "http://localhost:9441/",
    roles: "/roles.json",
    defaultState: "dashboard"
    // SOUNDS: Platform.OS === "android" || false,
  },
  qa: {
    imagePath: "https://d1qae0wzormm1r.cloudfront.net/",
    admin: "https://qa-admin.emergenetics.com/",
    login: "https://qa-sso.emergenetics.com/auth/",
    lms: "https://qa-lms.emergenetics.com/",
    events: "https://qa-ems.emergenetics.com",
    translations: "https://qa-i18n.emergenetics.com/",
    culture: "https://d5u4v8r8pm121.cloudfront.net/translations/",
    imageResizer: "https://qa-ir.emergenetics.com/",
    notify: "https://qa-notify.emergenetics.com/",
    roles: "./roles.json",
    defaultState: "dashboard",
    payment: false
  },
  staging: {
    imagePath: "https://d1833mb8844gxk.cloudfront.net/",
    admin: "https://uat-admin.emergenetics.com/",
    login: "https://uat-sso.emergenetics.com/auth/",
    lms: "https://uat-lms.emergenetics.com/",
    events: "https://uat-ems.emergenetics.com",
    translations: "https://uat-i18n.emergenetics.com/",
    culture: "https://uat-admin-emergenetics.s3.amazonaws.com/translations/",
    imageResizer: "https://uat-ir.emergenetics.com/",
    notify: "https://uat-notify.emergenetics.com/",
    roles: "./roles.json",
    defaultState: "dashboard",
    payment: true
  },
  release: {
    imagePath: "https://d663bcqlxq0rb.cloudfront.net/",
    admin: "https://admin.emergenetics.com/",
    login: "https://sso.emergenetics.com/auth/",
    lms: "https://lms.emergenetics.com/",
    events: "https://ems.emergenetics.com",
    translations: "https://i18n.emergenetics.com/",
    culture: "https://d14xxhx5bu4knc.cloudfront.net/translations/",
    imageResizer: "https://ir.emergenetics.com/",
    notify: "https://notify.emergenetics.com/",
    roles: "./roles.json",
    defaultState: "dashboard",
    payment: true
  }
}

export default envs[active]