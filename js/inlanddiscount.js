$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false, //是否显示滚动条
        bounce: false//是否启用回弹
    });
    mui.init({
        pullRefresh: {
            container: "#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down: {
                height: 50,//可选,默认50.触发下拉刷新拖动距离,
                auto: true,//可选,默认false.首次加载自动下拉刷新一次
                contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
                contentover: "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
                contentrefresh: "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
                //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据
                callback: function (){
                    reqData()
                    mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
                    // 为了防止切换分类的时候，无法再上拉，所以在每次刷新的时候将上拉加载重新启用
                    // mui('#refreshContainer').pullRefresh().refresh(true)              
                    }
            },

        }
    });



    function reqData() {
        $.ajax({
            type: 'get',
            url: 'http://193.112.55.79:9090/api/getinlanddiscount',
            datatype: 'json',
            success: function (result) {
                console.log(result);

                var goodsListHtml = template('goodsListTemp', result)
                // console.log(goodsListHtml);
                $('.goods_list').html(goodsListHtml)

            }
        })
    }




})