$(function () {
    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
    });
    // 获取产品id
    var id = $.getParameter(location.search);
    // console.log(id);
    // 发起请求，获取数据渲染商品列表
    $.ajax({
        url: 'http://193.112.55.79:9090/api/getbrandproductlist',
        type: 'get',
        data: id,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var brandProHtml = template('brandProTemp', result)
            $('.brandProList').html(brandProHtml);
        }
    })
})