var oneNum = 14959;
var num = 7435;

//console.log(EmptyToDefaultFun("", 0));
//字符长度计算
function getStrLength(str) {
    var cArr = str.match(/[^\x00-\xff]/ig);
    return str.length + (cArr == null ? 0 : cArr.length);
}
function formatterDateYYYYMMDD(date) {
    var datetime = date.getFullYear()
        + "-"
        + ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : "0"
            + (date.getMonth() + 1))
        + "-"// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate());
    return datetime;
}
var date = new Date('2017-12');
date.setMonth(date.getMonth() + 1);
console.log(formatterDateYYYYMMDD(date));
var nowDate = new Date();
nowDate.setDate(1);
console.log(formatterDateYYYYMMDD(nowDate));

