/**
 * Created by zhangtong on 2017/7/10.
 */
//公共
var publicUtil = {
    isNotEmpty: function (val) {
        return !this.isEmpty(val);
    },
    isEmpty: function (val) {
        if ((val == null || typeof(val) == "undefined") || (typeof(val) == "string" && val == "" && val != "undefined")) {
            return true;
        } else {
            return false;
        }
    },
    isDebug: function () {
        if (this.isNotEmpty(configDebug) && configDebug == "true") {
            return true;
        } else {
            return false;
        }
    },
    getDefaultStr: function (val, defaultVal) {
        return this.isEmpty(val) ? defaultVal : val;
    },
    //去除元素内所有内容 strIds："#id1,#id2,#id3"
    emptyHtml: function (strIds) {
        try {
            var ids = strIds.trim(",").split(",");
            $(ids).each(function () {
                var obj = $(this.toString());
                if (obj.length > 0) {
                    $(obj).each(function () {
                        $(this).html("");
                    });
                } else {
                    obj.html("");
                }
            });
        } catch (ex) {
            if (PublicUtil.isDebug()) {
                throw new Error("js方法：【PublicUtil.emptyHtml(strIds)】，error！");
            }
        }
    },
    //去除元素的值 strIds："#id1,#id2,#id3"
    emptyValue: function (strIds) {
        try {
            var ids = strIds.trim(",").split(",");
            $(ids).each(function () {
                var obj = $(this.toString());
                if (obj.length > 0) {
                    $(obj).each(function () {
                        $(this).val("");
                    });
                } else {
                    obj.val("");
                }
            });
        } catch (ex) {
            if (PublicUtil.isDebug()) {
                throw new Error("js方法：【PublicUtil.emptyValue(strIds)】，error！");
            }
        }
    },
    //去除Textarea内所有内容 strIds："#id1,#id2,#id3"
    emptyTextarea: function (strIds) {
        try {
            var ids = strIds.trim(",").split(",");
            $(ids).each(function () {
                var obj = $(this.toString());
                if (obj.length > 0) {
                    $(obj).each(function () {
                        $(this).empty();
                        $(this).val("");
                    });
                } else {
                    obj.empty();
                    obj.val("");
                }
            });
        } catch (ex) {
            if (PublicUtil.isDebug()) {
                throw new Error("js方法：【PublicUtil.emptyTextarea(strIds)】，error！");
            }
        }
    },
    /**
     * 阻止冒泡事件
     * @param e
     */
    stopBubble: function (e) {
        // 如果提供了事件对象，则这是一个非IE浏览器
        if (e && e.stopPropagation) {
            // 因此它支持W3C的stopPropagation()方法
            e.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    },
    /**
     * 刷新当前页面
     */
    tm_refreash: function () {
        window.location.href = window.location.href;
    },
    /**
     * 获取浏览器url中的参数值
     * @param {Object} name
     */
    getURLParam: function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    },
    /**
     * 图片等比例缩放
     * @param ImgD 图片对象
     * @param iwidth ：最大宽度
     * @param iheight ：最大高度
     * @constructor
     */
    DrawImage: function (ImgD, iwidth, iheight) {
        //参数(图片,允许的宽度,允许的高度)
        var image = new Image();
        image.src = ImgD.src;
        if (image.width > 0 && image.height > 0) {
            if (image.width / image.height >= iwidth / iheight) {
                if (image.width > iwidth) {
                    ImgD.width = iwidth;
                    ImgD.height = (image.height * iwidth) / image.width;
                } else {
                    ImgD.width = image.width;
                    ImgD.height = image.height;
                }
                ImgD.alt = image.width + "×" + image.height;
            } else {
                if (image.height > iheight) {
                    ImgD.height = iheight;
                    ImgD.width = (image.width * iheight) / image.height;
                } else {
                    ImgD.width = image.width;
                    ImgD.height = image.height;
                }
                ImgD.alt = image.width + "×" + image.height;
            }
        }
    },
    /**
     * 加密算法
     * @param str
     * @param k
     * @returns {string}
     */
    fencryption: function (str, k) {
        var string = "";
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c >= 97 && c <= 122) {
                c += k % 26;
                if (c < 97) {
                    c += 26;
                }
                if (c > 122) {
                    c -= 26;
                }
            } else if (c >= 65 && c <= 90) {
                c += k % 26;
                if (c < 65) {
                    c += 26;
                }
                if (c > 122) {
                    c -= 26;
                }
            }
            string += String.fromCharCode(c);
        }
        return string;
    },

    /**
     * 解密算法
     * @param str
     * @param n
     * @returns {string}
     */
    dencryption: function (str, n) {
        var string = "";
        var k = parseInt("-" + n);
        for (var i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c >= 97 && c <= 122) {
                c += k % 26;
                if (c < 97) {
                    c += 26;
                }
                if (c > 122) {
                    c -= 26;
                }
            } else if (c >= 65 && c <= 90) {
                c += k % 26;
                if (c < 65) {
                    c += 26;
                }
                if (c > 122) {
                    c -= 26;
                }
            }
            string += String.fromCharCode(c);
        }
        return string;
    },
    /**
     * 获取十六进制随机颜色
     * @returns {string}
     */
    getRandomColor: function () {
        return '#' + (function (h) {
                return new Array(7 - h.length).join("0") + h;
            })((Math.random() * 0x1000000 << 0).toString(16));
    }
};
//数组
var arrayUtil = {
    /*each和map的功能是一样的*/
    each: function (arr, fn) {
        fn = fn || Function;
        var a = [];
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < arr.length; i++) {
            var res = fn.apply(arr, [arr[i], i].concat(args));
            if (res != null) a.push(res);
        }
        return a;
    }
    ,
    /*each和map的功能是一样的*/
    map: function (arr, fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0, j = arr.length; i < j; ++i) {
            var res = fn.call(scope, arr[i], i, this);
            if (res != null) a.push(res);
        }
        return a;
    }
    ,
    /**
     * 数组的排序
     * @param array
     * @param sortFlag
     * @returns {*}
     */
    orderBy: function (array, sortFlag) {
        var $arr = array;
        if (sortFlag == 'asc') {
            $arr.sort(this._numAscSort);
        } else if (sortFlag == 'desc') {
            $arr.sort(this._numDescSort);
        } else {
            $arr.sort(this._numAscSort);
        }
        return $arr;
    }
    ,
    // 求两个集合的并集
    union: function (a, b) {
        var newArr = a.concat(b);
        return this.unique2(newArr);
    }
    ,
    // 求两个集合的补集
    complement: function (a, b) {
        return this.minus(this.union(a, b), this.intersect(a, b));
    }
    ,
    // 求两个集合的交集
    intersect: function (a, b) {
        a = this.unique(a);
        return this.each(a, function (o) {
            return b.contains(o) ? o : null;
        });
    }
    ,
    //求两个集合的差集
    minus: function (a, b) {
        a = this.unique(a);
        return this.each(a, function (o) {
            return b.contains(o) ? null : o;
        });
    }
    ,
    /**
     * 数组的去重
     * @param arr
     * @returns {Array}
     */
    unique: function (arr) {
        var ra = new Array();
        for (var i = 0; i < arr.length; i++) {
            if (!ra.contains(arr[i])) {
                //if(this.contains(ra,arr[i])){
                ra.push(arr[i]);
            }
        }
        return ra;
    }
    ,
    /**
     * 数组的去重复
     * @param arr
     * @returns {*}
     */
    unique2: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length;) {
                if (arr[j] == arr[i]) {
                    arr.splice(j, 1);
                } else {
                    j++;
                }
            }
        }
        return arr;
    }
    ,
    /**
     * 数组去除重复的(根据对象来)
     * @param {Object} ary
     */
    unique3: function (ary) {
        var result = [],
            hash = {};
        for (var i = 0, elem;
             (elem = arr[i]) != null; i++) {
            if (!hash[elem]) {
                result.push(elem);
                hash[elem] = true;
            }
        }
        return result;
    }
    ,
    /**
     * 获取数组的下标
     * @param arr
     * @param val
     * @returns {number}
     */
    indexOf: function (arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }
    ,
    /**
     * 判断一个元素是否在一个数组中
     * @param arr
     * @param val
     * @returns {boolean}
     */
    contains: function (arr, val) {
        return this.indexOf(arr, val) != -1 ? true : false;
    }
    ,
    /**
     * 数组中删除一个元素
     * @param arr
     * @param indexs
     * @returns {*}
     */
    remove: function (arr, indexs) {
        var index = this.indexOf(arr, indexs);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }
    ,
    removeObject: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            var jsonData = arr[i];
            for (var key in jsonData) {
                if (jsonData[key] == item) {
                    arr.splice(i, 1);
                }
            }
        }
        return arr;
    }
    ,
    /**
     * 求数组中最大值
     * @param arr
     * @returns {number|Number}
     */
    arrMax: function (arr) {
        return Math.max.apply(null, arr);
    }
    ,
    /**
     * 求数组中最小值
     * @param arr
     * @returns {number|Number}
     */
    arrMin: function (arr) {
        return Math.min.apply(null, arr);
    }
    ,
    /**
     * 删除数组元素的方法
     */
    removeAry: function (ary, ele) {
        ary.splice(ary.indexOf(ele), 1);
    }
    ,
    /**
     * 将类数组转换为数组的方法
     * @param ary
     * @returns {Array}
     */
    formArray: function (ary) {
        var arr = [];
        if (Array.isArray(ary)) {
            arr = ary;
        } else {
            arr = Array.prototype.slice.call(ary);
        }
        ;
        return arr;
    }
    ,
    /**
     * 定义一个数组排序的方法
     * 默认为升序排序asc,
     * 如果传递是参数是一个的话，那么就是是升序，如果传递的参数是两个的话，如果第一个参数不能转换为数组的话，也直接退出
     * 参数:acs:表示升序
     * 参数:desc:表示降序
     * @returns {*}
     */
    arrySort: function () {
        var arg = arguments;
        var len = arg.length;
        var ary = this.arryList(arg[0]);
        //如果没传递参数，或者传递的不能转换为数组的话就直接返回
        if (!len || Array.isArray(ary) == false) {
            return false;
        }
        ;
        if (len == 1) {
            return ary.sort(function (a, b) {
                return a - b;
            });
        } else {
            return ary.sort(function (a, b) {
                if (arg[1] == "desc") {
                    return b - a;
                } else if (arg[1] == "asc") {
                    return a - b;
                } else {
                    return a - b;
                }
                ;
            });
        }
        ;
    }
    ,
    /**
     * 求和函数
     * @param arr
     * @returns {number}
     */
    arySum: function (arr) {
        var ary = [];
        var result = 0;
        if (arr instanceof Array) {
            ary = arr;
        } else {
            ary = this.formArray(arr);
        }
        ;
        for (var i = 0; i < ary.length; i++) {
            result += parseFloat(ary[i]);
        }
        ;
        return result;
    }
    ,

    /**
     * 数组随机排列
     * @param {Object} ary
     */
    shuffle: function (ary) {
        var input = this;
        for (var i = input.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = input[randomIndex];
            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }
    ,
    /**
     * 数组随机排序
     * @param {Object} target
     */
    shuffle1: function (target) {
        function randomsort(a, b) {
            return Math.random() > .5 ? -1 : 1;
            //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
        }

        return target.sort(randomsort);
    }
    ,
    /**
     * 判断是不是数组
     * @param {Object} ary
     */
    isArray: function (ary) {
        var objectToStringFn = Object.prototype.toString;
        var arrayToStringResult = objectToStringFn.call([]);
        return function (subject) {
            return objectToStringFn.call(subject) === arrayToStringResult;
        };
    }
    ,
    /**
     * 随机返回数组中一个元素
     * @param {Object} ary
     */
    randomItem: function (ary) {
        return ary[Math.ceil(Math.random() * ary.length)];
    }
    ,
    /**
     * 判断数组中是否包含某一项
     * @param arr
     * @returns {number|Number}
     * 调用方法：var max = utils.arrContains([],"",false)  flag 如果为true，则判断字符串    false则判断字符
     */
    arrContains: function (arr, str, flag) {
        if (flag) {
            if (arr.length > 0 && this.isNotEmpty(str)) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == str) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        } else {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (arr[i].charAt(j) == str) {
                        return true;
                    } else {
                        false;
                    }
                }
            }
        }
    }
    ,
    /**
     * 判断数组是否有重复的项
     * @param {Object} arr
     */
    isRepeat: function (arr) { //arr是否有重复元素
        var hash = {};
        for (var i in arr) {
            if (hash[arr[i]]) return true;
            hash[arr[i]] = true;
        }
        return false;
    }
    ,

    _numAscSort: function (a, b) {
        return a - b;
    }
    ,
    _numDescSort: function (a, b) {
        return b - a;
    }
    ,
    _sortAsc: function (x, y) {
        if (x > y) {
            return 1;
        } else {
            return -1;
        }
    }
    ,
    _sortDesc: function (x, y) {
        if (x > y) {
            return -1;
        } else {
            return 1;
        }
    }
};
//文件
var fileUtil = {
    /**
     * 文件大小转换为MB GB KB格式
     * @param {Object} size
     */
    tm_countFileSize: function (size) {
        var fsize = parseFloat(size, 2);
        var fileSizeString;
        if (fsize < 1024) {
            fileSizeString = fsize.toFixed(2) + "B";
        } else if (fsize < 1048576) {
            fileSizeString = (fsize / 1024).toFixed(2) + "KB";
        } else if (fsize < 1073741824) {
            fileSizeString = (fsize / 1024 / 1024).toFixed(2) + "MB";
        } else if (fsize < 1024 * 1024 * 1024) {
            fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + "GB";
        } else {
            fileSizeString = "0B";
        }
        return fileSizeString;
    },

    /**
     * 获取文件的后缀名
     * @param {Object} fileName
     */
    tm_getExt: function (fileName) {
        if (fileName.lastIndexOf(".") == -1)
            return fileName;
        var pos = fileName.lastIndexOf(".") + 1;
        return fileName.substring(pos, fileName.length).toLowerCase();
    },

    /**
     * 获取文件名称
     * @param {Object} fileName
     */
    tm_getFileName: function (fileName) {
        var pos = fileName.lastIndexOf(".");
        if (pos == -1) {
            return fileName;
        } else {
            return fileName.substring(pos, fileName.length);
        }
    },

    /**
     * 生成一个随机数
     */
    random: 0,
    tm_Random: function () {
        this.random++;
        return new Date().getTime() + "" + random;
    },

    /**
     * 过滤html代码(把<>转换)
     * @param {Object} str
     */
    filterTag: function (str) {
        str = str.replace(/&/ig, "&amp;");
        str = str.replace(/</ig, "&lt;");
        str = str.replace(/>/ig, "&gt;");
        str = str.replace(" ", "&nbsp;");
        return str;
    },

    /**
     * 过滤<script></script>转换
     * @param {Object} str
     */
    filterScript: function (str) {
        return str.replace(/(<script)/ig, "&lt;script").replace(/(<script>)/ig, "&lt;script&gt;").replace(/(<\/script>)/ig, "&lt;/script&gt;");
    },

    /**
     * 判断非空
     * @param val
     * @returns {Boolean}
     */
    isEmpty: function (val) {
        val = $.trim(val);
        if (val == null)
            return true;
        if (val == undefined || val == 'undefined')
            return true;
        if (val == "")
            return true;
        if (val.length == 0)
            return true;
        if (!/[^(^\s*)|(\s*$)]/.test(val))
            return true;
        return false;
    },
    /**
     * 判断一个非空
     * @param {Object} val
     */
    isNotEmpty: function (val) {
        return !isEmpty(val);
    },
    /*验证是否为图片*/
    tmCheckImage: function (fileName) {
        return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName);
    },

    /*验证是否为视频*/
    tmCheckVideo: function (fileName) {
        return /(mp4|mp3|flv|wav)$/ig.test(fileName);
    },

    /*验证是否为文档*/
    tmCheckDocument: function (fileName) {
        return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml)$/ig.test(fileName);
    },

    /*验证是否为文档*/
    tmCheckOffice: function (fileName) {
        return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName);
    },
    /**
     * 本函数用于统计字符串的长度，有两种模式切换。
     * “En”英文主计算模式，将每个中文算作1个字符；“Ch”中文主计算模式，将每个中文算作2个字符长度
     */
    strLen: (function () {
        var trim = function (chars) {
            return (chars || "").replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "");
        }

        return function (_str, _model) {
            _str = trim(_str),
                _model = _model || "Ch"; //默认是中文
            var _strLen = _str.length; //获取字符长度
            if (_strLen == 0) { //如果字符为0直接返回
                return 0;
            } else {
                var chinese = _str.match(/[\u4e00-\u9fa5]/g); //匹配中文
                //判断是什么模式
                return _strLen + (chinese && _model == "Ch" ? chinese.length : 0);
            }
        };
    })(),
    /**
     * 去除字符串两边的空格
     * @param str
     * @returns {number|Number}
     * 调用方法：var str = utils.trim("abcd")
     */
    trim: function (str) {
        String.prototype.trim = function () {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
    },
    /**
     * 判断字符串是否是汉字，字段中有空格返回false
     * @param obj
     * @returns {number|Number}
     */
    isChinese: function (str) {
        if (/^([\u4e00-\u9fa5]|[\ufe30-\uffA0])*$/.test(this.trim(str)))
            return true;
    }
};
//数字
var numberUtil = {
    /**
     * 数字千分位分开
     * @param {Object} str
     */
    formatNum: function (str) {
        var newStr = "";
        var count = 0;

        if (str.indexOf(".") == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr + ".00"; //自动补小数点后两位
            console.log(str)
        } else {
            for (var i = str.indexOf(".") - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr; //碰到3的倍数则加上“,”号
                } else {
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
            console.log(str)
        }
    },
    /**
     * 判断身份证号码的方法
     * @param {Object} code
     */
    IdentityCodeValid: function (code) {
        var alert_tip = ""; // 用于提示
        var city = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江 ",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北 ",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏 ",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外 "
        };
        var pass = true;
        if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
            alert_tip = "身份证号格式错误";
            pass = false;
        } else if (!city[code.substr(0, 2)]) {
            alert_tip = "地址编码错误";
            pass = false;
        } else {
            //18位身份证需要验证最后一位校验位
            if (code.length == 18) {
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                    ai = code[i];
                    wi = factor[i];
                    sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (parity[sum % 11] != code[17]) {
                    alert_tip = "校验位错误(X需大写)";
                    pass = false;
                }
            }
        }
        if (!pass) {
            alert(alert_tip);
        }
        return pass;
    },
    /**
     * 将数字转换成对应的中文 将阿拉伯数字翻译成中文的大写数字
     *
     * @param {Object}
     *            num 比如:1对应一 11：十一 101:一百零一
     * @return {TypeName}
     */
    tm_NumberToChinese: function (num) {
        var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
        var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
        var a = ("" + num).replace(/(^0*)/g, "").split("."),
            k = 0,
            re = "";
        for (var i = a[0].length - 1; i >= 0; i--) {
            switch (k) {
                case 0:
                    re = BB[7] + re;
                    break;
                case 4:
                    if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                            .test(a[0]))
                        re = BB[4] + re;
                    break;
                case 8:
                    re = BB[5] + re;
                    BB[7] = BB[5];
                    k = 0;
                    break;
            }
            if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
                re = AA[0] + re;
            if (a[0].charAt(i) != 0)
                re = AA[a[0].charAt(i)] + BB[k % 4] + re;
            k++;
        }

        if (a.length > 1) // 加上小数部分(如果有小数部分)
        {
            re += BB[6];
            for (var i = 0; i < a[1].length; i++)
                re += AA[a[1].charAt(i)];
        }
        if (re == '一十')
            re = "十";
        if (re.match(/^一/) && re.length == 3)
            re = re.replace("一", "");
        return re;
    },
    /**
     * 将数字转换为大写金额
     * @param {Object} Num
     */
    change_to_Chinese: function (Num) {
        //判断如果传递进来的不是字符的话转换为字符
        if (typeof Num == "number") {
            Num = new String(Num);
        }
        ;
        Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
        Num = Num.replace(/ /g, "") //替换tomoney()中的空格
        Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
        if (isNaN(Num)) { //验证输入的字符是否为数字
            //alert("请检查小写金额是否正确");
            return "";
        }
        ;
        //字符处理完毕后开始转换，采用前后两部分分别转换
        var part = String(Num).split(".");
        var newchar = "";
        //小数点前进行转化
        for (i = part[0].length - 1; i >= 0; i--) {
            if (part[0].length > 10) {
                return "";
                //若数量超过拾亿单位，提示
            }
            var tmpnewchar = ""
            var perchar = part[0].charAt(i);
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            switch (part[0].length - i - 1) {
                case 0:
                    tmpnewchar = tmpnewchar + "元";
                    break;
                case 1:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 2:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 3:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 4:
                    tmpnewchar = tmpnewchar + "万";
                    break;
                case 5:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                    break;
                case 6:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                    break;
                case 7:
                    if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                    break;
                case 8:
                    tmpnewchar = tmpnewchar + "亿";
                    break;
                case 9:
                    tmpnewchar = tmpnewchar + "拾";
                    break;
            }
            var newchar = tmpnewchar + newchar;
        }
        //小数点之后进行转化
        if (Num.indexOf(".") != -1) {
            if (part[1].length > 2) {
                // alert("小数点之后只能保留两位,系统将自动截断");
                part[1] = part[1].substr(0, 2)
            }
            for (i = 0; i < part[1].length; i++) {
                tmpnewchar = ""
                perchar = part[1].charAt(i)
                switch (perchar) {
                    case "0":
                        tmpnewchar = "零" + tmpnewchar;
                        break;
                    case "1":
                        tmpnewchar = "壹" + tmpnewchar;
                        break;
                    case "2":
                        tmpnewchar = "贰" + tmpnewchar;
                        break;
                    case "3":
                        tmpnewchar = "叁" + tmpnewchar;
                        break;
                    case "4":
                        tmpnewchar = "肆" + tmpnewchar;
                        break;
                    case "5":
                        tmpnewchar = "伍" + tmpnewchar;
                        break;
                    case "6":
                        tmpnewchar = "陆" + tmpnewchar;
                        break;
                    case "7":
                        tmpnewchar = "柒" + tmpnewchar;
                        break;
                    case "8":
                        tmpnewchar = "捌" + tmpnewchar;
                        break;
                    case "9":
                        tmpnewchar = "玖" + tmpnewchar;
                        break;
                }
                if (i == 0) tmpnewchar = tmpnewchar + "角";
                if (i == 1) tmpnewchar = tmpnewchar + "分";
                newchar = newchar + tmpnewchar;
            }
        }
        //替换所有无用汉字
        while (newchar.search("零零") != -1)
            newchar = newchar.replace("零零", "零");
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零元", "元");
        newchar = newchar.replace("零角", "");
        newchar = newchar.replace("零分", "");
        if (newchar.charAt(newchar.length - 1) == "元") {
            newchar = newchar + "整"
        }
        return newchar;
    }
};
//窗口
var windowUtil = {
    /**
     *窗体不允许选中
     */
    tm_forbiddenSelect: function () {
        $(document).bind("selectstart", function () {
            return false;
        });
        document.onselectstart = new Function("event.returnValue=false;");
        $("*").css({
            "-moz-user-select": "none"
        });
    },
    /**
     * 窗体允许选中
     */
    tm_autoSelect: function () {
        $(document).bind("selectstart", function () {
            return true;
        });
        document.onselectstart = new Function("event.returnValue=true;");
        $("*").css({
            "-moz-user-select": ""
        });
    }
};
//剪切板
var shearPlateUtil = {
    tm_GetClipboard: function () {
        if (window.clipboardData) {
            return (window.clipboardData.getData('text'));
        } else {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager
                        .enablePrivilege("UniversalXPConnect");
                    var clip = Components.classes["@mozilla.org/widget/clipboard;1"]
                        .createInstance(Components.interfaces.nsIClipboard);
                    if (!clip) {
                        return;
                    }
                    var trans = Components.classes["@mozilla.org/widget/transferable;1"]
                        .createInstance(Components.interfaces.nsITransferable);
                    if (!trans) {
                        return;
                    }
                    trans.addDataFlavor("text/unicode");
                    clip.getData(trans, clip.kGlobalClipboard);
                    var str = new Object();
                    var len = new Object();
                    trans.getTransferData("text/unicode", str, len);
                } catch (e) {
                    alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                    return null;
                }
                if (str) {
                    if (Components.interfaces.nsISupportsWString) {
                        str = str.value
                            .QueryInterface(Components.interfaces.nsISupportsWString);
                    } else {
                        if (Components.interfaces.nsISupportsString) {
                            str = str.value
                                .QueryInterface(Components.interfaces.nsISupportsString);
                        } else {
                            str = null;
                        }
                    }
                }
                if (str) {
                    return (str.data.substring(0, len.value / 2));
                }
            }
        }
        return null;
    },
    /**
     * 往剪切板里赋值
     * @param txt
     * @returns {Boolean}
     */
    tmSetClipboard: function (txt) {
        if (window.clipboardData) {
            window.clipboardData.clearData();
            window.clipboardData.setData("Text", txt);
        } else if (navigator.userAgent.indexOf("Opera") != -1) {
            window.location = txt;
        } else if (window.netscape) {
            try {
                netscape.security.PrivilegeManager
                    .enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("您的firefox安全限制限制您进行剪贴板操作，请打开'about:config'将signed.applets.codebase_principal_support'设置为true'之后重试，相对路径为firefox根目录/greprefs/all.js");
                return false;
            }
            var clip = Components.classes['@mozilla.org/widget/clipboard;1']
                .createInstance(Components.interfaces.nsIClipboard);
            if (!clip)
                return;
            var trans = Components.classes['@mozilla.org/widget/transferable;1']
                .createInstance(Components.interfaces.nsITransferable);
            if (!trans)
                return;
            trans.addDataFlavor('text/unicode');
            var str = Components.classes["@mozilla.org/supports-string;1"]
                .createInstance(Components.interfaces.nsISupportsString);
            var copytext = txt;
            str.data = copytext;
            trans.setTransferData("text/unicode", str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip)
                return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
    }
};
//光标
var cursorUtil = {
    /**
     * 设置光标的处的值
     * @param ctrl
     * @returns {number}
     */
    getCursortPosition: function (ctrl) {
        var CaretPos = 0; // IE Support
        if (document.selection) {
            ctrl.focus();
            var Sel = document.selection.createRange();
            Sel.moveStart('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        }
        // Firefox support
        else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
            CaretPos = ctrl.selectionStart;
        }
        return (CaretPos);
    },

    /**
     * 获取光标处内容
     * @param inputDom
     * @param startIndex
     * @param endIndex
     */
    setCaretPosition: function (inputDom, startIndex, endIndex) {
        if (inputDom.setSelectionRange) {
            inputDom.setSelectionRange(startIndex, endIndex);
        } else if (inputDom.createTextRange) // IE
        {
            var range = inputDom.createTextRange();
            range.collapse(true);
            range.moveStart('character', startIndex);
            range.moveEnd('character', endIndex - startIndex - 1);
            range.select();
        }
        inputDom.focus();
    },

    /**
     * 获取选中文本
     * @param inputDom
     * @returns {string}
     */
    getSelectedText: function (inputDom) {
        if (document.selection) // IE
        {
            return document.selection.createRange().text;
        } else {
            return inputDom.value.substring(inputDom.selectionStart,
                inputDom.selectionEnd);
        }
    },
    /**
     * 在光标处插入字符串
     * @param myField:文本框对象
     * @param myValue：要插入的值
     */
    tm_insertAtCursorxxx: function (myField, myValue) {
        // IE support
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            sel.select();
        }
        // MOZILLA/NETSCAPE support
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            // save scrollTop before insert
            var restoreTop = myField.scrollTop;
            myField.value = myField.value.substring(0, startPos) + myValue +
                myField.value.substring(endPos, myField.value.length);
            if (restoreTop > 0) {
                // restore previous scrollTop
                myField.scrollTop = restoreTop;
            }
            myField.focus();
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.value += myValue;
            myField.focus();
        }
    },

    /**
     * 在光标处插入内容
     * @param tc
     * @param str
     */
    tm_insertAtCursor: function (tc, str) {
        var tclen = tc.value.length;
        tc.focus();
        if (typeof document.selection != "undefined") {
            document.selection.createRange().text = str;
        } else {
            tc.value = tc.value.substring(0, tc.selectionStart) + str + tc.value.substring(tc.selectionStart, tclen);
        }
    }
}
//正则表达式
var regularUtil = {
    email: function (email) {
        var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        return reg.test(email);
    },
    userName: function (str) {
        var reg = /^[a-z0-9_-]{3,16}$/; //用户名
        return reg.test(str);
    },
    chineseName: function (str) {
        var reg = /^[\u4E00-\u9FA5]{2,4}$/; //中文姓名
        return reg.test(str);
    },
    mobile: function (str) {
        var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/; //手机
        return reg.test(str);
    },
    tel: function (str) {
        var reg = /^0[\d]{2,3}-[\d]{7,8}$/; //固话
        return reg.test(str);
    },
    idCard: function (str) {
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证
        return reg.test(str);
    },
    amount: function (str) {
        var reg = /^([1-9][\d]{0,10}|0)(\.[\d]{1,2})?$/; //金额(10位整数2位小数)
        return reg.test(str);
    },
    positiveInt: function (str) {
        var reg = /^[1-9]*[1-9][0-9]*$/; //正整数
        return reg.test(str);
    },
    int: function (str) {
        var reg = /^-?\d+$/; //整数(不限位数)
        return reg.test(str);
    },
    bankCard: function (str) {
        var reg = /^\d{16}|\d{19}$/; //16位或19位银行卡或信用卡号(先把空格replace为空串)
        return reg.test(str);
    },
    chinese: function (str) {
        var reg = /[\u4e00-\u9fa5]/g; //判断是不是中文
        return reg.test(str);
    },
    noChinese: function (str) {
        var reg = /[^\u4e00-\u9fa5]/g; //判断不是中文
        return reg.test(str);
    },
    decimalNumber: function (str) {
        var reg = /^\d+(\.\d+)+$/; //判断带小数的数字
        return reg.test(new Number(str));
    },
    ip: function (str) {
        var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;
        return reg.test(str);
    }
}

(function ($) {
    $.extend(
        dateUtil
    );
    $.extend(
        publicUtil
    );
    $.extend(
        arrayUtil
    );
    $.extend(
        fileUtil
    );
})(jQuery);
