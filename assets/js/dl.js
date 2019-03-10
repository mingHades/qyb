// 点击iconfont切换效果
var ic=document.getElementById('ic');
var it=document.getElementById('it');
var mmdl=document.getElementById('mmdl');
var ewm=document.getElementById('ewm');
ic.onclick=function(){
	ewm.className='hidden';
	ic.className='iconfont icon-Computer hidden';
	mmdl.className='active';
	it.className='iconfont icon-erweima active';
}
it.onclick=function(){
	ewm.className='active';
	mmdl.className='hidden';
	it.className='iconfont icon-erweima hidden';
	ic.className='iconfont icon-Computer active';
}
// ajax数据验证
var username=document.getElementById('username');
var pwd=document.getElementById('pwd');
var btn=document.getElementById('btn');
btn.onclick=function(){
	var uvalue=username.value;
	var pvalue=pwd.value;
	Ajax().post("assets/php/1.php",'un='+uvalue+'&pn='+pvalue,function(msg){
				console.log(msg);

				if (msg=='y') {
					alert('账号密码正确');
				}else{
					alert('账号或者密码不正确');
				}

			})
}