function formatFloat(num,pos) {
    /* 返回指定位数的小数形式
    * @para num 要格式化的数字
    * @para pos 要保留的小数的位数
    * */
    pos=paas||2;
    return Math.round(num*Math.pow(10,pos))/Math.pow(10,pos);
}

module.exports=formatFloat;