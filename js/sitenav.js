$(function(){
    console.log(123);
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getsitenav',
        datatype:'json',
        success:function(result){
            console.log(result);
            var storeListHtml=template('storeListTemp',result);
            console.log(storeListHtml);
            $('.storeList').html(storeListHtml)
            
            
        }

    })
    
})