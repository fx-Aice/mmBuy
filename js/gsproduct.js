$(function () {


    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getgsshop',
        datatype: '',
        success: function (result) {
            var goodsHtml = template('storesTemp', result)
            $('.stores').html(goodsHtml)
        }

    })


    $.ajax({
        type: 'get',
        url: 'http://193.112.55.79:9090/api/getgsshoparea',
        datatype: 'json',
        success: function (result) {
            var areaHtml = template('areaTemp', result)
            $('.area').html(areaHtml)


        }
    })

  



    var shopId
    var areaId

    $('.stores').on('change', function () {

        shopId = $(this).val()
        $('.area').on('change', function () {
            areaId = $(this).val();
            gainData(shopId, areaId)
        })


    })








    gainData()

    //渲染商品列表
    function gainData(sid, aid) {
        var obj = {
            shopid: sid || 0,
            areaid: aid || 0,
        }
        $.ajax({
            type: 'get',
            url: 'http://193.112.55.79:9090/api/getgsproduct',
            data: obj,
            datatype: 'json',
            success: function (result) {
                var goodsListHtml = template('goodsListTemp', result)
                $('.goods_list').html(goodsListHtml)



            }
        })

    }




























})