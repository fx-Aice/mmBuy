$(function () {
    // 假设flag为true
    var flag = true
    // 调用方法获取 url路径中的值
    var couponid = getProId(location.search)
    // 调用ajax动态生成 优惠劵列表
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getcouponproduct",
        data: couponid,
        dataType: "json",
        success: function (result) {
            // console.log(result.result)
            // 生成模板
            var html = template('coupon', { data: result.result })
            // 添加模板
            $('.pro_list').html(html)

        }
    })

    // 初始化
    var mask = mui.createMask(function () {
        flag = true

    });//callback为用户点击蒙版时自动执行的回调；
    // mask.show();//显示遮罩
    // mask.close();//关闭遮罩
    // 事件委托 点击子元素  触发单击事件
    $('.pro_list').on('tap', 'img', function () {
        if (flag) {
            // 显示遮挡板
            mask.show();
            // 在添加动态结构时  重置一次样式
            $('.mui-backdrop').html('')
            // 获取当前元素  img的  sec属性
            var src = $(this).attr('src')
            // 添加结构
            $('.mui-backdrop').html(`<div class="mui-slider banner">
                <div class="mui-slider-group mui-slider-loop">
                    <!--支持循环，需要重复图片节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="${src}" /></a></div>
                    <div class="mui-slider-item"><a href="#"><img src="${src}" /></a></div>
                    <!--支持循环，需要重复图片节点-->
                    <div class="mui-slider-item mui-slider-item-duplicate"><a href="#"><img src="${src}" /></a></div>
                </div>
            </div>`)
            // 初始化轮播图
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 500//自动轮播周期，若为0则不自动播放，默认为0；
            });
            // 重置flag
            flag = false
        } else {
            // 显示遮挡板
            mask.close();
            
            
        }
    })


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
