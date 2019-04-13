$(function () {
    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
    });

    // 发起请求，获取分类标题，并渲染
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (result) {
            console.log(result)
            var cateHtml = template('categoryTitleTemp', result);
            $('.cate').html(cateHtml);
        }
    })

    // 获取标题下的详细列表分类
    function renderCategory(titleid) {
        $.ajax({
            type: 'get',
            url: 'http://193.112.55.79:9090/api/getcategory',
            dataType: 'json',
            data: { titleid },
            success: function (result) {
                console.log(result);
                var listsHtml = template('categoryTemp', result);
                $('.care' + titleid).html(listsHtml);
            }
        })
    }

    // 点击标题，获取该标题对应的详细分类列表
    $('.cate').on('tap', 'li a', function () {
        var titleid = $(this).data('id');
        renderCategory(titleid)
    })

})