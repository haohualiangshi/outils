
/**
*   TODO:删除字符串的左右空格并返回删除空格后的字符创
*   @param {String} originStr
*   @return {String} filterStr
 */

 function removeStartSpaceAndEnd(originStr) {
     var filterStr = "";
     filterStr = originStr.replace( /^(\s|\u00A0)+|(\s|\u00A0)+$/g, "" );//正则替换”
     return filterStr;
     
 }
 module.exports = removeStartSpaceAndEnd