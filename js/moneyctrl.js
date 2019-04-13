$(function () {

    var pageid = 1
    var pageSize // 每页数据条数
    var totalPages // 总页数
    // console.log('pageNum:'+ pageNum);
    var htmlp = ''
    var arr = []
    var pageids = 1

    getGoods()

    /* 上一页 */
    $('.am-pagination-prev').on('tap', 'a', function () {
        /* if判断解决可到 第一页后可无限上一页的bug */
        if (pageids > 1) {
            pageids--
            getGoods()
        } else {
            return false;
        }

    })
    /* 下一页 */
    $('.am-pagination-next').on('tap', 'a', function () {
            pageids++
            getGoods()

        
    })


    function getGoods() {
        $.ajax({
            type: 'get',
            data: {
                pageid: pageid - 1
            },
            url: 'http://193.112.55.79:9090/api/getmoneyctrl',
            dataType: 'json',
            success: function (result) {
                console.log(result);

                var html = template('goodsTemp', result)
                // console.log(html);
                $('.mm_goodsList').html(html)


                totalPages = [Math.ceil(result.totalCount / result.pagesize)] // 总页数

                console.log('totalPages:'+totalPages);

                for (var i = 0; i < Math.max(totalPages) + 1; i++) {
                    arr.push(i)
                    
                }
                console.log('arr '+arr);
                var page = pageid
                page = 0;
                // for (var i = 1; i < arr.length; i++) {
                    
                    for (var i = 1; i < arr.length; i++) {
                            page++;
                            htmlp += '<option value=" '+ page +' " class="">' + page + '/' + arr[arr.length - 1] + '</option>'
                            console.log('ss');
                        
                        

                        // console.log(pageid);
                        sessionStorage.setItem('pageid', pageid)
                        
                    }
                    // continue;
                // }


                // console.log(obj.pageid);
                // console.log(htmlp);
                console.log(arr);

                // var htmls = template('paginationTemp',result)
                // console.log(htmls);

                $('.am-pagination-select-el').html(htmlp)
                $('.am-pagination-select-el').find('option').eq(pageids-1).prop('selected','true');

                htmlp = ''
                arr = []
            }
        })


    }
})