/**
 * Created by zhangtong on 2017/7/10.
 */
//时间
var dateUtil = {
    /**
     * 转换日期
     * @param date
     * @returns {*}
     * @private
     */
    _transferDate: function (date) {
        if (typeof date == "string") {
            return new Date(date.replace(/-/ig, "/"));
        } else {
            return date;
        }
    },

    /**
     * 返回 1970 年 1 月 1 日至今的毫秒数。
     * @param date
     * @returns {number}
     * @private
     */
    _getTime: function (date) {
        return this._transferDate(date).getTime();
    },

    /**
     * 将日期格式化成指定格式的字符串
     * @param date 要格式化的日期，不传时默认当前时间，也可以是一个时间戳
     * @param fmt 目标字符串格式，支持的字符有：y,M,d,q,w,H,h,m,S，默认：yyyy-MM-dd HH:mm:ss
     * @returns 返回格式化后的日期字符串
     */
    formatDate: function (date, fmt) {
        date = date == undefined ? new Date() : date;
        date = typeof date == 'number' ? new Date(date) : date;
        fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
        var obj =
            {
                'y': date.getFullYear(), // 年份，注意必须用getFullYear
                'M': date.getMonth() + 1, // 月份，注意是从0-11
                'd': date.getDate(), // 日期
                'q': Math.floor((date.getMonth() + 3) / 3), // 季度
                'w': date.getDay(), // 星期，注意是0-6
                'H': date.getHours(), // 24小时制
                'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
                'm': date.getMinutes(), // 分钟
                's': date.getSeconds(), // 秒
                'S': date.getMilliseconds() // 毫秒
            };
        var week = ['天', '一', '二', '三', '四', '五', '六'];
        for (var i in obj) {
            fmt = fmt.replace(new RegExp(i + '+', 'g'), function (m) {
                var val = obj[i] + '';
                if (i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
                for (var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
                return m.length == 1 ? val : val.substring(val.length - m.length);
            });
        }
        return fmt;
    },

    /**
     * 将字符串解析成日期
     * @param str 输入的日期字符串，如'2014-09-13'
     * @param fmt 字符串格式，默认'yyyy-MM-dd'，支持如下：y、M、d、H、m、s、S，不支持w和q
     * @returns 解析后的Date类型日期
     */
    parseDate: function (str, fmt) {
        fmt = fmt || 'yyyy-MM-dd';
        var obj = {y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0};
        fmt.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function (m, $1, $2, $3, $4, idx, old) {
            str = str.replace(new RegExp($1 + '(\\d{' + $2.length + '})' + $4), function (_m, _$1) {
                obj[$3] = parseInt(_$1);
                return '';
            });
            return '';
        });
        obj.M--; // 月份是从0开始的，所以要减去1
        var date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if (obj.S !== 0) date.setMilliseconds(obj.S); // 如果设置了毫秒
        return date;
    },

    /**
     * 某个日期加上天数
     * @param date
     * @param days
     * @returns {*}
     * @private
     */
    plusDays: function (date, days) {
        var dateTime = this._getTime(date);
        var mintimes = days * 60 * 60 * 1000 * 24;
        var rdate = dateTime * 1 + mintimes * 1;
        return this.formatDate(new Date(rdate),null);
    },

    /**
     * 某个日期加上多少个月,这里是按照一个月30天来计算天数的
     * @param date
     * @param months
     * @returns {*}
     * @private
     */
    plusMonths: function (date, months) {
        var dateTime = this._getTime(date);
        var mintimes = months * 30 * 60 * 60 * 1000 * 24;
        var rdate = dateTime + mintimes * 1;
        return this.formatDate(new Date(rdate),null);
    },
}

console.log(dateUtil.plusDays(new Date(),-5));
console.log(dateUtil.plusMonths(new Date(),-4))
console.log(dateUtil.formatDate(new Date(),"yyyy-MM-dd"));