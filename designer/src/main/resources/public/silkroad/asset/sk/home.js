!function(){function a(){t(),s(),r(),p(),n(),l()}var b,c="请填写所在部门名称",d="用户名只能为英文字母及数字，请重新输入",e="邮箱格式不对请重新输入",f="请填写您的邮箱",g="请确认密码",h="请输入密码",i="请输入用户名",j="两次密码输入不一致，请重新输入",k="请输入验证码";$(function(){b={register_sign:$("#home-button"),register_top:$(".register-top"),sign_top:$(".sign-top"),register_infor:$(".register-infor"),register_title:$(".register-title"),register:$("#register"),sign:$("#sign"),sign_usename:$("#sign-usename"),sign_pass:$("#sign-pass"),sign_validateCode:$("#sign-validateCode"),register_usename:$("#register-usename"),register_pass:$("#register-pass"),register_repass:$("#register-repass"),register_company:$("#register-company"),register_email:$("#register-email"),register_validateCode:$("#register-validateCode"),home_title:$(".home-title"),home_content:$(".home-content"),home_pic:$(".home-pic"),home_register_title:$(".home-register-title"),home_register_line:$(".home-register-line"),home_sign_title:$(".home-sign-title"),home_sign_line:$(".home-sign-line"),servicetype:$("#servicetype"),sign_enter:$("#sign-enter"),register_enter:$("#register-enter"),prompt:$(".prompt"),body:$("body"),validate_code:$(".validate-code")},a()});var l=function(){var a=b.validate_code;a.click(function(){var a=$(this).attr("src");$(this).attr("src",a+"?"+Math.random())})},m=function(a){var c=b.validate_code;c.each(function(){if($(this).attr("id")==a){var b=$(this).attr("src");$(this).attr("src",b+"?"+Math.random())}})},n=function(){b.register.click(function(){o()}),b.register_enter.keydown(function(a){13==a.keyCode&&o()})},o=function(){var a=b.register_company,l=b.register_email,n=b.register_repass,o=b.register_pass,p=b.register_usename,q=b.servicetype,r=b.register_validateCode;""==a.val()&&a.next("div").html(c),""==l.val()?l.next("div").html(f):/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(l.val())||l.next("div").html(e),""==n.val()&&n.next("div").html(g),""==o.val()&&o.next("div").html(h),""==p.val()?p.next("div").html(i):/[\u4e00-\u9fa5]+/.test(p.val())?p.next("div").html(d):/[^0-9a-zA-Z]/g.test(p.val())&&p.next("div").html(d),""==r.val()&&r.parent().next("div").html(k),""==o.val()||""==n.val()||""==p.val()||""==l.val()||""==a.val()||""==r.val()||/[\u4e00-\u9fa5]+/.test(p.val())||/[\u4e00-\u9fa5]+/.test(l.val())||/[^0-9a-zA-Z]/g.test(p.val())||!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(l.val())||(o.val()==n.val()?$.ajax({type:"post",cache:!1,dataType:"Json",url:"/silkroad/register",data:{name:p.val(),pwd:o.val(),department:a.val(),email:l.val(),serviceType:q.val(),validateCode:r.val()},success:function(a){0===a.status?alert("注册成功,请注意查收邮件"):(alert("注册失败："+a.statusInfo),m("register-code"))}}):(o.val(""),n.val(""),o.attr("placeholder",j),n.attr("placeholder",j)))},p=function(){b.sign.click(function(){q()}),b.sign_enter.keydown(function(a){13==a.keyCode&&q()})},q=function(){var a=b.sign_pass,c=b.sign_usename,e=b.sign_validateCode;return""==c.val()?c.next("div").html(i):/[\u4e00-\u9fa5]+/.test(c.val())?c.next("div").html(d):/[^0-9a-zA-Z]/g.test(c.val())&&c.next("div").html(d),""==a.val()?(a.next("div").html(h),void 0):""==a.val()?(a.next("div").html(h),void 0):""==e.val()?(e.parent().next("div").html(k),void 0):(""==a.val()||""==c.val()||/[\u4e00-\u9fa5]+/.test(c.val())||/[^0-9a-zA-Z]/g.test(c.val())||$.ajax({type:"post",cache:!1,dataType:"Json",url:"/silkroad/login",data:{name:c.val(),pwd:a.val(),validateCode:e.val()},success:function(a){var b=a.status;1!=b?window.location=a.data:(e.parent().next("div").html(a.statusInfo),m("sign-code"))}}),void 0)},r=function(){b.register_title.find("div").click(function(){u()}),b.body.keydown(function(a){27==a.keyCode&&u()})},s=function(){b.register_infor.focus(function(){$(this).next("div").html("")})},t=function(){b.register_sign.find("div").click(function(){var d=b.home_register_title,e=b.home_sign_title,f=b.home_register_line,g=b.home_sign_line,h=b.register_top,i=b.sign_top;h.hide(),i.hide(),"registration"==$(this).attr("class")?(a("0px","575px","260px",300),c("200px","407px",d,f,h)):"experience"==$(this).attr("class")&&(a("500px","375px","460px",300),c("-50px","365px",e,g,i))});var a=function(a,c,d,e){var f=b.home_title,g=b.home_content,h=b.register_sign;f.animate({left:a,opacity:"0"},e,function(){f.hide()}),g.animate({left:c,opacity:"0"},e,function(){g.hide()}),h.animate({left:d,opacity:"0"},e,function(){h.hide()})},c=function(a,c,d,e,f){var g=b.home_pic;g.animate({left:a,opacity:"0"},300,function(){g.hide(),d.fadeIn(200),e.animate({width:c},300),f.show()})}},u=function(){var a=b.home_title,c=b.home_content,d=b.register_sign,e=b.home_register_title,f=b.home_pic,g=b.home_register_line,h=b.register_top,i=b.sign_top,j=b.home_sign_title,k=b.home_sign_line;a.show(),c.show(),d.show(),f.show(),h.hide(),i.hide(),e.fadeOut(200),g.animate({width:"0px"},300),j.fadeOut(200),k.animate({width:"0px"},300,function(){a.animate({left:"300px",opacity:"1"},300),c.animate({left:"475px",opacity:"1"},300),d.animate({left:"360px",opacity:"1"},300),f.animate({left:"100px",opacity:"1"},200)}),b.register_infor.val(""),b.prompt.html("")}}();