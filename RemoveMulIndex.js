/*
*   删除指定下表的数组并返回删除后的数组
*   originArr:元数组
*   indexArr：要删除的下标
 */

function removeMulIndex(originArr,indexArr){
    if(undefined == originArr || undefined == indexArr){
        return originArr
    }
    var obj = {};
    var willReturnArr = [];
    //
    for (var arrIndex = 0 ; arrIndex < originArr.length ; arrIndex ++){
        var objKey = "item_" + arrIndex;
        obj[objKey] = originArr[arrIndex];
    }
    for (indexArrItem in indexArr){
        var willDelKey = "item_" + indexArr[indexArrItem];
        if (obj[willDelKey]){
            delete obj[willDelKey];
        }
    }
    for (objItem in obj){
        willReturnArr.push(obj[objItem])
    }
    return willReturnArr;
}

module.exports = removeMulIndex