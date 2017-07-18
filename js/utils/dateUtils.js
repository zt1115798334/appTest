//时间
var dateUtil = {

    /*转换日期*/
    _transferDate: function(date) {
        if(typeof date == "string") {
            return new Date(date.replace(/-/ig, "/"));
        } else {
            return date;
        }
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
     * 将一个日期格式化成友好格式，比如，1分钟以内的返回“刚刚”，
     * 当天的返回时分，当年的返回月日，否则，返回年月日
     * @param {Object} date
     */
    formatDateToFriendly: function (date) {
        date = date || new Date();
        date = typeof date === 'number' ? new Date(date) : date;
        var now = new Date();
        if ((now.getTime() - date.getTime()) < 60 * 1000) return '刚刚'; // 1分钟以内视作“刚刚”
        var temp = this.formatDate(date, 'yyyy年M月d');
        if (temp == this.formatDate(now, 'yyyy年M月d')) return this.formatDate(date, 'HH:mm');
        if (date.getFullYear() == now.getFullYear()) return this.formatDate(date, 'M月d日');
        return temp;
    },
    /**
     * 将一段时长转换成友好格式，如：
     * 147->“2分27秒”
     * 1581->“26分21秒”
     * 15818->“4小时24分”
     * @param {Object} second
     */
    formatDurationToFriendly: function (second) {
        if (second < 60) return second + '秒';
        else if (second < 60 * 60) return (second - second % 60) / 60 + '分' + second % 60 + '秒';
        else if (second < 60 * 60 * 24) return (second - second % 3600) / 60 / 60 + '小时' + Math.round(second % 3600 / 60) + '分';
        return (second / 60 / 60 / 24).toFixed(1) + '天';
    },
    /**
     * 将时间转换成MM:SS形式
     */
    formatTimeToFriendly: function (second) {
        var m = Math.floor(second / 60);
        m = m < 10 ? ( '0' + m ) : m;
        var s = second % 60;
        s = s < 10 ? ( '0' + s ) : s;
        return m + ':' + s;
    },
    /**
     * 判断某一年是否是闰年
     * @param year 可以是一个date类型，也可以是一个int类型的年份，不传默认当前时间
     */
    isLeapYear: function (year) {
        if (year === undefined) year = new Date();
        if (year instanceof Date) year = year.getFullYear();
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    },
    /**
     * 获取某一年某一月的总天数，没有任何参数时获取当前月份的
     * 方式一：$.getMonthDays();
     * 方式二：$.getMonthDays(new Date());
     * 方式三：$.getMonthDays(2013, 12);
     */
    getMonthDays: function (date, month) {
        var y, m;
        if (date == undefined) date = new Date();
        if (date instanceof Date) {
            y = date.getFullYear();
            m = date.getMonth();
        }
        else if (typeof date == 'number') {
            y = date;
            m = month - 1;
        }
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 非闰年的一年中每个月份的天数
        //如果是闰年并且是2月
        if (m == 1 && this.isLeapYear(y)) return days[m] + 1;
        return days[m];
    },
    /**
     * 计算2日期之间的天数，用的是比较毫秒数的方法
     * 传进来的日期要么是Date类型，要么是yyyy-MM-dd格式的字符串日期
     * @param date1 日期一
     * @param date2 日期二
     */
    countDays: function (date1, date2) {
        var fmt = 'yyyy-MM-dd';
        // 将日期转换成字符串，转换的目的是去除“时、分、秒”
        if (date1 instanceof Date && date2 instanceof Date) {
            date1 = this.format(fmt, date1);
            date2 = this.format(fmt, date2);
        }
        if (typeof date1 === 'string' && typeof date2 === 'string') {
            date1 = this.parse(date1, fmt);
            date2 = this.parse(date2, fmt);
            return (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
        }
        else {
            console.error('参数格式无效！');
            return 0;
        }
    },
    /*获取两个时间相减的时间*/
    _Date: function (date1, date2) {
        var dateTime = this._numMillSecond(date1, date2);
        return new Date(dateTime).format("yyyy-MM-dd");
    },

    //间隔年份
    _numYear: function (date1, date2) {
        var times = this._numDay(date1, date2);
        return Math.floor(times / 365);
    },

    //间隔月份
    _numMonth: function (date1, date2) {
        var times = this._numDay(date1, date2);
        return Math.floor(times / 30);
    },

    //间隔天数
    _numDay: function (date1, date2) {
        var times = this._numSecond(date1, date2);
        var hour = this._var().hour;
        var mills = this._var().mills;
        return Math.ceil(times / (mills * hour));
    },

    //间隔时
    _numHour: function (date1, date2) {
        return Math.floor(this._numMillSecond(date1, date2) / (1000 * 60 * 60));
    },

    //间隔分
    _numMinute: function (date1, date2) {
        return Math.floor(this._numMillSecond(date1, date2) / (1000 * 60));
    },

    //间隔秒数
    _numSecond: function (date1, date2) {
        return Math.floor(this._numMillSecond(date1, date2) / 1000);
    },

    //间隔毫秒
    _numMillSecond: function (date1, date2) {
        var stimes = this._getTime(this._transferDate(date1));
        var etimes = this._getTime(this._transferDate(date2));
        return etimes - stimes;
    },

    _var: function () {
        return {
            hour: 24,
            second: 60,
            mills: 3600,
            format: "yyyy-MM-dd",
            dateFormat: "yyyy-MM-dd HH:mm:ss"
        };
    },

    /*某个日期加上多少毫秒*/
    _plusMillisSeconds: function (date, millisSeconds) {
        var dateTime = this._getTime(date);
        var mintimes = millisSeconds;
        var rdate = dateTime * 1 + mintimes * 1;
        return this._format(new Date(rdate));
    },
    /*某个日期加上多少秒*/
    _plusSeconds: function (date, seconds) {
        var dateTime = this._getTime(date);
        var mintimes = seconds * 1000;
        var rdate = dateTime * 1 + mintimes * 1;
        return this._format(new Date(rdate));
    },
    /*某个日期加上多少分钟*/
    _plusMinutes: function (date, minutes) {
        var dateTime = this._getTime(date);
        var mintimes = minutes * 60 * 1000;
        var rdate = dateTime * 1 + mintimes * 1;
        return this._format(new Date(rdate));
    },
    /*某个日期加上小时数*/
    _plusHours: function (date, hours) {
        var dateTime = this._getTime(date);
        var mintimes = hours * 60 * 60 * 1000;
        var rdate = dateTime + mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期加上天数*/
    _plusDays: function (date, days) {
        var dateTime = this._getTime(date);
        var mintimes = days * 60 * 60 * 1000 * 24;
        var rdate = dateTime * 1 + mintimes * 1;
        return this._format(new Date(rdate));
    },
    /*某个日期加上多少个月,这里是按照一个月30天来计算天数的*/
    _plusMonths: function (date, months) {
        var dateTime = this._getTime(date);
        var mintimes = months * 30 * 60 * 60 * 1000 * 24;
        var rdate = dateTime + mintimes * 1;
        return this._format(new Date(rdate));
    },
    /*某个日期加上多少个年,这里是按照一个月365天来计算天数的，如果loop为true则按闰年计算*/
    _plusYears: function (date, years, isLoop) {
        var dateTime = this._getTime(date);
        var day = 365;
        if (isLoop) day = 366;
        var mintimes = years * day * 60 * 60 * 1000 * 24;
        var rdate = dateTime + mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期加上某个日期，这样的操作视乎没什么意义*/
    _plusDate: function (date1, date2) {
        var dateTime = this._getTime(date1);
        var dateTime2 = this._getTime(date2);
        ;
        var rdate = dateTime + dateTime2;
        return this._format(new Date(rdate));
    },
    /*某个日期减去多少毫秒秒*/
    _minusMillisSeconds: function (date, millisSeconds) {
        var dateTime = this._getTime(date);
        var mintimes = millisSeconds * 1;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去多少秒*/
    _minusSeconds: function (date, seconds) {
        var dateTime = this._getTime(date);
        var mintimes = seconds * 1000;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去多少分钟*/
    _minusMinutes: function (date, minutes) {
        var dateTime = this._getTime(date);
        var mintimes = minutes * 60 * 1000;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去小时数*/
    _minusHours: function (date, hours) {
        var dateTime = this._getTime(date);
        var mintimes = hours * 60 * 60 * 1000;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去天数*/
    _minusDays: function (date, days) {
        var dateTime = this._getTime(date);
        var mintimes = days * 60 * 60 * 1000 * 24;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去多少个月,这里是按照一个月30天来计算天数的*/
    _minusMonths: function (date, months) {
        var dateTime = this._getTime(date);
        var mintimes = months * 30 * 60 * 60 * 1000 * 24;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去多少个年,这里是按照一个月365天来计算天数的*/
    _minusYears: function (date, years, isLoop) {
        var dateTime = this._getTime(date);
        var day = 365;
        if (isLoop) day = 366;
        var mintimes = years * day * 60 * 60 * 1000 * 24;
        var rdate = dateTime - mintimes;
        return this._format(new Date(rdate));
    },
    /*某个日期减去某个日期，这样的操作视乎没什么意义*/
    _minusDate: function (date1, date2) {
        var dateTime = this._getTime(date1);
        var dateTime2 = this._getTime(date2);
        ;
        var rdate = dateTime - dateTime2;
        return this._format(new Date(rdate));
    },
    /*获取一个月有多少天*/
    _getMonthOfDay: function (date1) {
        var currentMonth = this._getFirstDayOfMonth(date1);
        var nextMonth = this._getNextDayOfMonth(date1);
        return this._numDay(currentMonth, nextMonth);
    },

    /*获取一年又多少天*/
    _getYearOfDay: function (date) {
        var firstDayYear = this._getFirstDayOfYear(date);
        var lastDayYear = this._getLastDayOfYear(date);
        return Math.ceil(this._numDay(firstDayYear, lastDayYear));
    },

    /*某个日期是当年中的第几天*/
    _getDayOfYear: function (date1) {
        return Math.ceil(this._numDay(this._getFirstDayOfYear(date1), date1));
    },

    /*某个日期是在当月中的第几天*/
    _getDayOfMonth: function (date1) {
        return Math.ceil(this._numDay(this._getFirstDayOfMonth(date1), date1));
    },

    /*获取某个日期在这一年的第几周*/
    _getDayOfYearWeek: function (date) {
        var numdays = this._getDayOfYear(date);
        return Math.ceil(numdays / 7);
    },

    /*某个日期是在当月中的星期几*/
    _getDayOfWeek: function (date1) {
        return this._getWeek(date1);
    },

    /*获取在当前日期中的时间*/
    _getHourOfDay: function (date) {
        return this._getHour(date);
    },
    _eq: function (date1, date2) {
        var stime = this._getTime(this._transferDate(date1));
        var etime = this._getTime(this._transferDate(date2));
        return stime == etime ? true : false;
    },
    /*某个日期是否晚于某个日期*/
    _after: function (date1, date2) {
        var stime = this._getTime(this._transferDate(date1));
        var etime = this._getTime(this._transferDate(date2));
        return stime < etime ? true : false;
    },

    /*某个日期是否早于某个日期*/
    _before: function (date1, date2) {
        var stime = this._getTime(this._transferDate(date1));
        var etime = this._getTime(this._transferDate(date2));
        return stime > etime ? true : false;
    },

    /*获取某年的第一天*/
    _getFirstDayOfYear: function (date) {
        var year = this._getYear(date);
        var dateString = year + "-01-01 00:00:00";
        return dateString;
    },

    /*获取某年的最后一天*/
    _getLastDayOfYear: function (date) {
        var year = this._getYear(date);
        var dateString = year + "-12-01 00:00:00";
        var endDay = this._getMonthOfDay(dateString);
        return year + "-12-" + endDay + " 23:59:59";
    },

    /*获取某月的第一天*/
    _getFirstDayOfMonth: function (date) {
        var year = this._getYear(date);
        var month = this._getMonth(date);
        var dateString = year + "-" + month + "-01 00:00:00";
        return dateString;
    },

    /*获取某月最后一天*/
    _getLastDayOfMonth: function (date) {
        var endDay = this._getMonthOfDay(date);
        var year = this._getYear(date);
        var month = this._getMonth(date);
        return year + "-" + month + "-" + endDay + " 23:59:59";
    },
    /*一天的开始时间*/
    _getFirstOfDay: function (date) {
        var year = this._getYear(date);
        var month = this._getMonth(date);
        var dates = this._getDay(date);
        return year + "-" + month + "-" + dates + " 00:00:00";
    },

    /*一天的结束时间*/
    _getLastOfDay: function (date) {
        var year = this._getYear(date);
        var month = this._getMonth(date);
        var dates = this._getDay(date);
        return year + "-" + month + "-" + dates + " 23:59:59";
    },

    /*获取下个月的第一天*/
    _getNextDayOfMonth: function (date) {
        var year = this._getYear(date);
        var month = this._getMonth(date);
        month = month * 1 + 1;
        if (month > 12) {
            year = year + 1;
            month = month - 12;
        }
        month = month > 9 ? month : "0" + month;
        var dateString = year + "-" + month + "-01 00:00:00";
        return dateString;
    },

    _getFirstOfWeek: function (date1) {
        var week = this._getWeek(date1);
        var date = this._minusDays(date1, week);
        var year = this._getYear(date);
        var month = this._getMonth(date);
        var dates = this._getDay(date);
        return year + "-" + month + "-" + dates + " 00:00:00";
    },

    _getLastOfWeek: function (date1) {
        var week = 6 - this._getWeek(date1);
        var date = this._minusDays(date1, week);
        var year = this._getYear(date);
        var month = this._getMonth(date);
        var dates = this._getDay(date);
        return year + "-" + month + "-" + dates + " 23:59:59";
    },

    _getNow: function () {
        return new Date();
    },
    _format: function (date) {
        return this._getYear(date) + "-" + this._getMonth(date) + "-" + this._getDay(date) + " " + this._getHour(date) + ":" + this._getMinute(date) + ":" + this._getSecond(date);
    },
    _getDate: function () {
        return this._getNow();
    },
    /*年*/
    _getYear: function (date) {
        return this._transferDate(date).getFullYear();
    },

    /*月*/
    _getMonth: function (date) {
        var month = this._transferDate(date).getMonth() + 1;
        return month > 9 ? month : "0" + month;
    },

    /*日*/
    _getDay: function (date) {
        var day = this._transferDate(date).getDate();
        return day > 9 ? day : "0" + day;
    },

    /*获取今天星期几,如果为0代表星期日*/
    _getWeek: function (date) {
        return this._transferDate(date).getDay();
    },

    /*时*/
    _getHour: function (date) {
        var hour = this._transferDate(date).getHours();
        return hour > 9 ? hour : "0" + hour;
    },

    /*12小时制时*/
    _getHour12: function (date) {
        var hour = this._transferDate(date).getHours();
        return hour % 12 == 0 ? 12 : hour % 12;
    },

    /*分*/
    _getMinute: function (date) {
        var minutes = this._transferDate(date).getMinutes();
        return minutes > 9 ? minutes : "0" + minutes;
    },

    /*秒*/
    _getSecond: function (date) {
        var seconds = this._transferDate(date).getSeconds();
        return seconds > 9 ? seconds : "0" + seconds;
    },

    /*毫秒*/
    _getMillisecond: function (date) {
        return this._transferDate(date).getMilliseconds();
    },

    /*获取今天在当年是第几季度*/
    _getPeriod: function (date) {
        var month = this._getMonth(date) * 1;
        return Math.floor((month + 3) / 3);
    },

    /*星期*/
    _nowWeekChinies: function (date) {
        var nowWeek = this._getWeek(date);
        var day = "";
        switch (nowWeek) {
            case 0:
                day = "日";
                break;
                break;
            case 1:
                day = "一";
                break;
                break;
            case 2:
                day = "二";
                break;
                break;
            case 3:
                day = "三";
                break;
                break;
            case 4:
                day = "四";
                break;
                break;
            case 5:
                day = "五";
                break;
                break;
            case 6:
                day = "六";
                break;
        }
        return day;
    },

    /*返回 1970 年 1 月 1 日至今的毫秒数。*/
    _getTime: function (date) {
        return this._transferDate(date).getTime();
    },

    /**
     * 转换long值为日期字符串
     * @param longtime 时间
     * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
     * @return 符合要求的日期字符串
     */
    getFormatDateByLong: function (longTime, pattern) {
        return this.getFormatDate(new Date(longTime), pattern);
    },
    /**
     * 转换日期对象为日期字符串
     * @param l long值
     * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
     * @return 符合要求的日期字符串
     */
    getFormatDate: function (date, pattern) {
        if (date == undefined) {
            date = new Date();
        }
        if (pattern == undefined) {
            pattern = "yyyy-MM-dd hh:mm:ss";
        }

        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(pattern)) {
            pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(pattern)) {
                pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return pattern;
    },
    /**
     * 获取时间戳
     * @param obj
     * @returns {number|Number}
     */
    timeStamp: function () {
        return new Date().getTime();
    },
    /**
     * 返回一个时间格式
     * dateformat(new Data(),"y-M-d")   "y-M-d"  "y年M月d日"  "y/M/d"
     * dateformat(new Data(),"H-m-s")   "H-m-s"  "H时m分s秒"  "H/m/s" "H:m:s"
     * dateformat(new Data(),"y-M-d H:m:s")      "y年M月d日 H时m分s秒"  "y/M/d H/m/s"  "y-M-d H:m:s"
     * dateformat(new Date(),"MX"))    返回一天中的某个时刻 早晨  中午  下午  晚上  凌晨
     * dateformat(new Date(),"yyyy") 获取年份
     * dateformat(new Date(),"MM")    获取月份
     * dateformat(new Date(),"dd")   获取日
     * dateformat(new Date(),"HH")   获取小时
     * dateformat(new Date(),"mm")   获取分
     * dateformat(new Date(),"ss")  获取秒
     * dateformat(new Date(),"WD")   获取星期
     * dateformat(new Date(),"SMX") 获取几个月以前，几年以前
     * @param obj
     * @returns {number|Number}
     * 调用方法：var str = utils.dateformat(new Data(),"y-M-d")
     * @param {Object} data
     * @param {Object} pattern
     */
    dateformat: function (data, pattern) {
        var month_day = data.getDate();
        var week_day = data.getDay();
        var year_month = data.getMonth() + 1;
        var year_full = data.getFullYear();
        var day_hour = data.getHours();
        var hour_minute = data.getMinutes();
        var minute_seconds = data.getSeconds();
        var minute_Millisecond = data.getMilliseconds();
        var time_Millisecond = data.getTime();
        if (year_full < 10) {
            year_full = "0" + year_full
        }
        ;
        if (month_day < 10) {
            month_day = "0" + month_day
        }
        ;
        if (day_hour < 10) {
            day_hour = "0" + day_hour
        }
        ;
        if (hour_minute < 10) {
            hour_minute = "0" + hour_minute
        }
        ;
        if (minute_seconds < 10) {
            minute_seconds = "0" + minute_seconds
        }
        ;

        if (pattern == "yyyy" && pattern.length == 4) {
            return year_full;
        }
        ;
        if (pattern == "MM" && pattern.length == 2) {
            return year_month;
        }
        ;
        if (pattern == "dd" && pattern.length == 2) {
            return month_day;
        }
        ;
        if (pattern == "HH" && pattern.length == 2) {
            return day_hour;
        }
        ;
        if (pattern == "mm" && pattern.length == 2) {
            return hour_minute;
        }
        ;
        if (pattern == "ss" && pattern.length == 2) {
            return minute_seconds;
        }
        ;

        if (pattern == "SMX" && pattern.length == 3) {
            data.setFullYear(2015)
            data.setMonth(11)
            data.setMinutes(8)
            var new_time = new Date();
            var new_year_month = new_time.getMonth() + 1;
            var new_day_hour_mnuite = new_time.getMinutes();
            var new_year = new_time.getFullYear();
            if ((new_year - data.getFullYear()) >= 1 && (new_year - data.getFullYear() <= 2)) {
                return "一年以前";
            }
            if ((new_year - data.getFullYear()) >= 3 && (new_year - data.getFullYear() <= 5)) {
                return "三年以前";
            }
            if ((new_year - data.getFullYear()) >= 5 && (new_year - data.getFullYear() <= 8)) {
                return "五年以前";
            }
            if ((new_year - data.getFullYear()) >= 10) {
                return "十年以前";
            }
            if (new_day_hour_mnuite - data.getMinutes() >= 3 && new_day_hour_mnuite - data.getMinutes() < 10) {
                return "刚刚";
            }
            if (new_day_hour_mnuite - data.getMinutes() >= 10 && new_day_hour_mnuite - data.getMinutes() < 20) {
                return "十分钟以前";
            }
            if (new_day_hour_mnuite - data.getMinutes() >= 380 && new_day_hour_mnuite - data.getMinutes() < 60) {
                return "四十分钟以前";
            }
            if ((new_year_month - data.getMonth() + 1) >= 1 && (new_year_month - data.getMonth() + 1) < 3) {
                return "一个月以前";
            }
            if ((new_year_month - data.getMonth() + 1) > 3 && (new_year_month - data.getMonth() + 1) < 6) {
                return "三个月以前";
            }
            if ((new_year_month - data.getMonth() + 1) > 6 && (new_year_month - data.getMonth() + 1) < 11) {
                return "半年以前";
            }
        }

        /*-------------------------------WD  返回星期----------start---------*/
        if (pattern == "WD" && pattern.length == 2) {
            var w_d;
            switch (data.getUTCDay()) {
                case 0:
                    w_d = "星期天";
                    break;
                case 1:
                    w_d = "星期一";
                    break;
                case 2:
                    w_d = "星期二";
                    break;
                case 3:
                    w_d = "星期三";
                    break;
                case 4:
                    w_d = "星期四";
                    break;
                case 5:
                    w_d = "星期五";
                    break;
                case 6:
                    w_d = "星期六";
                    break;
            }
            return w_d;
        }
        /*-------------------------------WD  返回星期----------end---------*/

        /*-------------------------------MX 返回一天中的某个时刻--start-------------------*/
        if (pattern == "MX" && pattern.length == 2) {
            if (day_hour < 11 && day_hour > 6) {
                return "早晨";
            }
            if (day_hour <= 14 && day_hour >= 11) {
                return "中午";
            }
            if (day_hour > 14 && day_hour < 19) {
                return "下午";
            }
            if (day_hour >= 19 && day_hour <= 23) {
                return "晚上";
            }
            if (day_hour < 6 && day_hour >= 0) {
                return "凌晨";
            }
        }
        /*-------------------------------MX 返回一天中的某个时刻--end------------------*/

        /*-------------------------------y-M-d H-m-s-------------start---------------------*/
        //"y年M月d日 H时m分s秒"
        var reg = /^(y{1,4}).?(M{1,2}).?(d{1,2})(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)?\s?(H{1,2}).?(m{1,2}).?(s{1,2})(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)?/;
        var yMdHms_separator_reg = /([-+])|(\/+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)(\s?)([-+])|(\/+)|([:+])|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g;
        var yMdHms_separator = pattern.match(yMdHms_separator_reg);
        var yMdHms = pattern.match(reg);
        if (reg.test(pattern)) {
            if (pattern.length == 13) {
                return year_full + yMdHms_separator[0] + year_month + yMdHms_separator[1] + month_day + yMdHms_separator[2] + " " + day_hour + yMdHms_separator[3] + hour_minute + yMdHms_separator[4] + minute_seconds + yMdHms_separator[5];
            } else {
                return year_full + yMdHms_separator[0] + year_month + yMdHms_separator[1] + month_day + " " + day_hour + yMdHms_separator[2] + hour_minute + yMdHms_separator[3] + minute_seconds
            }
        }
        /*-------------------------------y-M-d H-m-s-------------end---------------------*/

        /*-------------------------------y-M-d -------------start-----------------------*/
        if (pattern.length >= 5) {
            var yMd_separator = pattern.match(/([-+])|(\/+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
            var yMd = pattern.match(/^((y{1,4})-(M{1,2})-(d{1,2}))|((y{1,4})\/(M{1,2})\/(d{1,2}))|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
            if (utils.tmArray.arrContains(pattern, "M", false) || utils.tmArray.arrContains(pattern, "年", false)) {
                if ("y/M/d" === yMd[0] || "y-M-d" === yMd[0] || "y年M月d".indexOf("年") != -1 && "y年M月d".indexOf("月") != -1 && "y年M月d日".indexOf("日") != -1) {
                    if (yMd_separator.length == 3) {
                        return year_full + yMd_separator[0] + year_month + yMd_separator[1] + month_day + yMd_separator[2]
                    }
                    ;
                    return year_full + yMd_separator[0] + year_month + yMd_separator[1] + month_day
                }
                ;

            }
            ;
            /*-------------------------------y-M-d -------------end-----------------------*/

            /*-------------------------------H-m-s -------------start-----------------------*/
            var Hsm_separator = pattern.match(/([-+])|(\/+)|(:+)|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)/g);
            var Hsm = pattern.match(/^((H{1,4})-(m{1,2})-(s{1,2}))|((H{1,4})\/(m{1,2})\/(s{1,2}))|(([\ufe30-\uffA0]|[\u4e00-\u9fa5])+)|((H{1,4}):(m{1,2}):(s{1,2}))/g);
            if (utils.tmArray.arrContains(pattern, "H", false) || utils.tmArray.arrContains(pattern, "分", false)) {
                if ("H/m/s" === Hsm[0] || "H-m-s" === Hsm[0] || "H时m分s秒".indexOf("时") != -1 && "H时m分s秒".indexOf("秒") != -1 && "H时m分s秒".indexOf("分") != -1) {
                    if (Hsm_separator.length == 3) {
                        return day_hour + Hsm_separator[0] + hour_minute + Hsm_separator[1] + minute_seconds + Hsm_separator[2]
                    }
                    ;
                    return day_hour + Hsm_separator[0] + hour_minute + Hsm_separator[1] + minute_seconds;
                }
                ;
            }
            ;
        }
        ;
    }
};
