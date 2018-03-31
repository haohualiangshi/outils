function fetchObjFields(fieldsArr, obj) {
    /*
    * 返回指定参数值组成的新对象
    * @fieldsArr 是指定的键值组成的数组
    * @obj 是要在该对象中寻找的键值对
    *@resultObj 是将要返回的新的对象
    * */
    const resultObj = {};
    for (let i = 0; i < fieldsArr.length; i ++) {
        const _key = fieldsArr[i];
        resultObj[_key] = obj[_key];
    }
    return resultObj;
}
module.exports=fetchObjFields