$(function () {


//用户名验证
  $("[name='userName']").on("blur", function () {
    var userName = $("[name='userName']").val()
    if (userName == '') {
      mui.toast("用户名不能为空！！请重新输入")
    }
  })

//用户名密码验证
  $("[name='userPwd']").on("blur", function () {
    var userPwd = $("[name='userPwd']").val()
    if (userPwd.length < 6) {
      mui.toast("密码不能低于6位数！")
    }
  })

  //用户名手机号码验证
  $("[name='userNum']").on("blur", function () {
    var userNum = $("[name='userNum']").val()
    var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(userNum)) {
      mui.toast("请输入正确的手机号码")
    }
  })

  //用户名手机验证码验证
  $("[name='userCode']").on("blur", function () {
    var userCode = $("[name='userCode']").val()
    if (userCode == '') {
      mui.toast("手机验证码不能为空！！")
    }
  })

//用户名邮箱验证
  $("[name='userEmail']").on("blur", function () {
    var userEmail = $("[name='userEmail']").val()
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (!myReg.test(userEmail)) {
      mui.toast("请输入正确的邮箱")
    }
  })

  //改变图片路径
  $(".ChangImg").on("tap", function () {
    var arr = ['../images/CheckCode (1).gif', '../images/CheckCode (2).gif', '../images/CheckCode (3).gif', '../images/CheckCode.gif']
    var changImg = document.querySelector(".ChangImg")
    for (var i = 0; i < arr.length;i++){
      changImg.index = i;
    }
      changImg.src=arr[this.index]
      
     

    })








  })