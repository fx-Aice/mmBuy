$(function () {
    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false //是否显示滚动条
    });
    // 获取产品id
    var categoryid = $.getParameter(location.search).categoryid;
    var pageid = 1;
    var totalPage;
    // 发起请求，获取数据渲染商品列表
    getproductlist();
    function getproductlist() {
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getproductlist',
            type: 'get',
            data: {
                categoryid, pageid
            },
            dataType: 'json',
            success: function (result) {
                // console.log(result);
                // 计算出总页数
                totalPage = Math.ceil(result.totalCount/result.pagesize);
                var brandProHtml = template('brandProTemp', result)
                $('.brandProList').html(brandProHtml);
            }
        })
    }
    // 点击上一页
    $('.mui-previous').on('tap', function () {
        if (pageid > 1) {
            pageid--;
            getproductlist();

        }
    })
    // 点击下一页
    $('.mui-next').on('tap', function () {
        if (pageid < totalPage) {
            pageid++;
            getproductlist();
        }
    })

})