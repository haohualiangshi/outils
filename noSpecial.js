/**
 * @desc   判断是否包含除_下划线以外的特殊字符
 * @param  {String} str 
 * @return {Boolean}
*/
function noSpecial(str){
	return /[^0-9a-zA-Z_]/g.test(str);
}
module.exports=noSpecial;