$(function () {
    var url = location.search
    getId(url) //  ?index=1
    // console.log(getId(url));
    var pageid = sessionStorage.getItem('pageid')
    console.log(pageid);
    $.ajax({
        type: 'get',
        data: {
            pageid: pageid - 1
        },
        url: 'http://193.112.55.79:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            // console.log(result.result[0].productId);
            for (var i = 0; i < result.result.length; i++) {
                var product = result.result[i].productId
                // console.log(product);
                if (product == obbj.productid) {
                    
                    // console.log(product, obbj.productid);
                    var html = template('commentTemp', result.result[i])
                    $('.mm_content').html(html)
                    return false
                }

            }
        }
    })


    var obbj

    function getId(urls) {
        // console.log(urls);
        var obj = {}
        var urls = urls.substring(1) // index=1
        var arr = urls.split('&')
        // console.log(arr); //  ["index=1"]
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i].split('=')
            // console.log(temp); //   ["index", "1"]
            obj[temp[0]] = temp[1]

        }
        obbj = obj
        // console.log(temp);
        // console.log(obj);
        // console.log(obj.productid);
        return obbj;
    }
    // console.log(obbj);
})