$(function () {
    // 发起ajax生成  优惠劵平拍模块、
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcoupon",
        dataType: "json",
        success: function (result) {
            // console.log(result.result );
            // 生成模板
            var html = template('youhuiList', { data: result.result })
            // 添加模板
            $('.mui-scroll').html(html)
        }
    });
})