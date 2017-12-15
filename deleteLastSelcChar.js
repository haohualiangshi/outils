/**
 * 
 * @desc   判断选中最后一位是否是要选中的字符；是就删除并返回字符
 * @param  {String|Number} str 
 * @param  {String|Number} char 
 * @return {Boolean} 
 */
 function deleteLastSelcChar(str,char){
 	var _str="";
    if (str.lastIndexOf(char) == str.length - 1) {
        _str = str.slice(0, str.length - 1)
    } else {
        _str = str;
    }
    return _str;
 }
 module.exports=deleteLastSelcChar;