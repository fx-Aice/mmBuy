$(function(){
   
    $.ajax({
        type:'get',
        url:'http://193.112.55.79:9090/api/getinlanddiscount',
        datatype:'json',
        success:function(result){
            console.log(result);
            
        }
    })



})