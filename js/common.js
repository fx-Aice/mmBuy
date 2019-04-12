$(function () {
    
    // 动态扩展zepto方法
    $.extend($, {
        /**
         * 通过url解析参数
         * @param {string} url   需要解析的url的search路径  ?id=2&name="abc"
         */
        getParameter(url) {
            // 创建变量，保存解析后的参数对象
            var queryObj = {};
            // 从第一位?开始开始截取，截取到最后
            var queryStr = url.substring(1);
            // 把字符串，按照'&'分割成数组
            var queryArr = queryStr.split('&');
            // 循环遍历该数组
            queryArr.forEach(function (item) {
                // 对数组中的每一项用 '=' 分割成数组，存入对象中
                var tempArr = item.split('=');
                // tempArr[0]代表等号前面的属性，tempArr[1]里面是值
                queryObj[tempArr[0]] = tempArr[1];
            })
            return queryObj;
        }
    })
})