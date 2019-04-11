

$(function () {
    $.ajax({
        type: 'get',
        data: '',
        url: 'http://193.112.55.79:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (result) {
            console.log(result);
        }
    })
})