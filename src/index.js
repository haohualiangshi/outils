/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')
const removeMulIndex = require("./array/RemoveMulIndex.js")

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')

const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')
const setCookie = require('./cookie/setCookie')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')

const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')

const debounce = require('./function/debounce')
const throttle = require('./function/throttle')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')
const isEmptyObject = require('./object/isEmptyObject')
const fetchObjFields=require('./object/fetchObjFields')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')
const noSpecial=require('./regExp/noSpecial')
const pswdInclude=require('./regExp/pswdInclude')

const digitUppercase = require('./string/digitUppercase')
const deleteLastSelcChar=require('./string/deleteLastSelcChar')

const isSupportWebP = require('./support/isSupportWebP')

const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')

const rem=require('./rem/rem')

const formatFloat=require("./Format/FormatFloat");

module.exports = {
    arrayEqual,
    removeMulIndex,
    addClass,
    hasClass,
    removeClass,

    getCookie,
    removeCookie,
    setCookie,

    getOS,
    getExplore,

    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,

    debounce,
    throttle,

    getKeyName,

    deepClone,
    isEmptyObject,
    fetchObjFields,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
    noSpecial,
    pswdInclude,

    digitUppercase,
    deleteLastSelcChar,

    isSupportWebP,

    formatPassTime,
    formatRemainTime,
    parseQueryString,
    stringfyQueryString,
    rem,
    formatFloat
}