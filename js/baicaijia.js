$(function () {
    

    
    var titleId = 0
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getbaicaijiatitle",
        dataType: "json",
        success: function (result) {
            // console.log(result);

            var html = template('menuNav', result)


            $('.menu_nav').html(html)

            var lis = $('.menu_nav ul').find('li')

            var lisW = lis[0].offsetWidth

            $('.menu_nav ul').width((lis.length + 2) * lisW)

            mui('.menu_nav').scroll({
                deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                scrollY: false, //是否竖向滚动
                scrollX: true, //是否横向滚动
                indicators: false, //是否显示滚动条
                deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
                bounce: true //是否启用回弹

            });
            proListInit(titleId)
            $('.menu_nav ul').on('tap', 'li', function () {
                // console.log(213123);
                $(this).siblings().find('a').removeClass('active')
                titleId = $(this).find('a').data('titleid')
                proListInit(titleId)

            })

        }
    });

    // 封装渲染商品列表
    function proListInit(titleId) {
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getbaicaijiaproduct",
            data: { titleid: titleId },
            dataType: "json",
            success: function (result) {
                console.log(result);
                var html = template('pro_list', result)
                $('.pro_list').html(html)

                mui('mui-scroll').scroll({
                    deceleration: 0.0005,
                    indicators: false, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                });
            }
        });
    }
})