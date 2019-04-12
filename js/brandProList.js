$(function(){
    console.log('brandProList');
    var id = $.getParameter(location.search);
    console.log(id);
    $.ajax({
        url: 'http://193.112.55.79:9090/api/getbrandproductlist',
        type: 'get',
        data: id,
        dataType: 'json',
        success: function (result) {
            console.log(result);
           
        }
    })
})