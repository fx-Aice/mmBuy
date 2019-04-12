$(function () { 

init()

  // 初始化函数
  function init() { 
    Tabitems()
    CheckFrom()
 }


  //实现Tab栏侧滑效果  
  function Tabitems() { 

    var allLi = $('.tabs-parent .nav-tabs').find('li')
        var totalWidth = 0
        allLi.each(function(index,value){
            totalWidth += $(value).innerWidth()
        })
        $('.tabs-parent .nav-tabs').width(totalWidth)
        // 通过iScroll插件来实现滑动
        var scollDom = document.querySelector('.tabs-parent')
        var myScroll = new IScroll('.tabs-parent',{
            scrollX: true, scrollY: false
        });

 }

   //登陆页面的验证表单
  function CheckFrom() {  
    $(".inputbutton").on("tap", function () {
      console.log(123);
      
      // 1 获取数据
      var userName = $("[name='userName']").val().trim();
      var userPwd = $("[name='userPwd']").val().trim();

      // 2 合法性的验证
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(userName)) {
        // 非法
        mui.toast("用户名或手机号码不合法！！")
        return;
      }

      // 2 密码合法性的验证
      if (userPwd.length < 6) {
        // 非法
        mui.toast("密码不合法！！")
        return;
      }

    })


 } 
  
  

   //注册页面的验证表单




  
  
  
  
  
  
  
  
  
 })