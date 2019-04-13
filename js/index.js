$(function () { 

  init()
  
  //初始化函数
  function init() {
    //获取菜单栏页面
    GetIndex()
    GetIndexmoy()
  }

  //获取首页菜单栏
  function GetIndex() { 

    $.ajax({
      type: "get",
      url: "http://193.112.55.79:9090/api/getindexmenu",
      dataType: "json",
      success: function (result) {
        console.log(result);
        //渲染标签
        var html = template("Getindex", result)
        $(".mmb_ul").html(html)
        $(".mmb_nav").find("[data-indexid]").each(function (i, e) {
          if (i > 7) {
              $(e).toggleClass("height").slideToggle();
          }
      })
      }
    
    })
       //加载更多
    $(".mmb_nav")[0].addEventListener("touchstart", function (event) {  
      var num = event.target.parentNode.parentNode.dataset.indexid;
      if (num == 7) {
        $(".mmb_nav").find("[data-indexid]").each(function (i, e) {
          if (i > 7) {
            $(e).toggleClass("height").slideToggle()
          }
          })
      }

       })

   }

  
  //首页的折扣列表中的数据
  function GetIndexmoy() { 

  $.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getmoneyctrl",
    dataType: "json",
    success: function (result) {
      console.log(result);
      var html = template("Goodsdetail", result)
      $(".mmd_ull").html(html)
        
    }
  });



   }








 })