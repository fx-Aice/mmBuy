$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
    });

    var id = $.getParameter(location.search);
    console.log(id);
    $.ajax({
        url: 'http://193.112.55.79:9090/api/getbrand',
        type: 'get',
        data: id,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            var brandDetailHtml = template('brandDetailTemp', result);
            $('.brandDetail').html(brandDetailHtml);
        }
    })

    // 点击叉叉，关闭底部广告
    $('.closeBtn').on('tap', function () {
        $(this).parents('.app-promotion-bar').remove();
        $('.mui-scroll-wrapper').css({
            "padding-bottom": 0
        })
    })
})