$(function () {
    // 设置全部变量  标题id
    var titleId = 0
    // 发起ajax  生成菜单栏结构
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getbaicaijiatitle",
        dataType: "json",
        success: function (result) {
            // console.log(result);
            // 生成动态结构
            var html = template('menuNav', result)
            // 渲染动态结构
            $('.menu_nav').html(html)
            // 获取menu_nav中所有的li
            var lis = $('.menu_nav ul').find('li')
            // 取其中一个li元素的宽度
            var lisW = lis[0].offsetWidth
            // 重新给menu_nav中的ul设置宽度
            $('.menu_nav ul').width((lis.length + 2) * lisW)
            // 初始化菜单栏横向滚动
            mui('.menu_nav').scroll({
                deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                scrollY: false, //是否竖向滚动
                scrollX: true, //是否横向滚动
                indicators: false, //是否显示滚动条
                bounce: true //是否启用回弹

            });
            // 默认根据菜单栏 全部按钮  渲染一次
            proListInit(titleId)
            // 事件委托  点击ul中单个菜单项  渲染渲染对应页面
            $('.menu_nav ul').on('tap', 'li', function () {
                // console.log(213123);
                // 去取当前元素以外其他兄弟的类名active
                $(this).siblings().find('a').removeClass('active')
                // 获取当前元素中自定义属性值
                titleId = $(this).find('a').data('titleid')
                // 调用方法渲染传入参数id 渲染页面
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