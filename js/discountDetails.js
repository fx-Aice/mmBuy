$(function () {
  

 

    var productidUrl = location.search;
    console.log($.getParameter(productidUrl).productId);
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getdiscountproduct',
        data: { productid: $.getParameter(productidUrl).productId },
        datatype: 'json',
        success: function (result) {
            console.log(result);
            var detailsHtml = template('detailsTemp', result)
            console.log(detailsHtml);
            $('.center').html(detailsHtml)
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                indicators: false, //是否显示滚动条
                bounce: false //是否启用回弹
            });
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 2000//自动轮播周期，若为0则不自动播放，默认为0；
            });

        }


    })
})