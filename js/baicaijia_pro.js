$(function () {
    // 解决mui默认阻止a链接跳转功能
    mui('body').on('tap', 'a', function () {
        document.location.href = this.href;
    })
    // 获取当前页面url？以后部分参数
    var url = location.search
    // 发起ajax   渲染商品详情
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getproduct",
        data: getProId(url),
        dataType: "json",
        success: function (result) {
            // console.log({data:result.result[0]});
            var html = template('pro_xiangqing',{data:result.result[0]})
            // console.log(html);
            $('.pro_xiangqing').html(html)
            // 发起ajax  渲染评论结构
            $.ajax({
                type: "get",
                url: "http://193.112.55.79:9090/api/getproductcom",
                data: getProId(url),
                dataType: "json",
                success: function (result) {
                    // console.log({data:result.result});
                    var htmls = template('pingjia',{data:result.result})
                    // console.log(htmls);
                    $('.pro_xiangqing').append(htmls)
                    // 初始化页面滑动
                    mui('.mui-scroll-wrapper').scroll({
                        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                    });
                }
            });
        }
    });
    // 提取url地址栏参数
    function getProId(urls) {
        var obj = {}
        var str = urls.substring(1)
        var arr = str.split('&')
        arr = arr[0].split('=')
        obj[arr[0]] = arr[1]
        return obj
    }
})