/**
 * @desc   验证密码由6-18位数字和字母构成
 * @param  {String} str 
 * @return {Boolean}
*/
function pswdInclude(str){
	var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
    return regExp.test(str);
}
module.exports=pswdInclude;