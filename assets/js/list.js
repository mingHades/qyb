// 二级菜单
var tb=document.getElementById('tb');
var scj=document.getElementById('scj');
var sjzc=document.getElementById('sjzc');
var wode=document.getElementById('wode');
var sc=document.getElementById('sc');
var sj=document.getElementById('sj');

tb.onmouseover=function(){
	this.className='on';
	wode.style.display='block';
}
tb.onmouseout=function(){
	this.className='';
	wode.style.display='none';
}
wode.onmouseover=function(){
	tb.className='on';
	wode.style.display='block';
}
wode.onmouseout=function(){
	tb.className='';
	wode.style.display='none';
}
scj.onmouseover=function(){
	this.className='on';
	sc.style.display='block';
}
scj.onmouseout=function(){
	this.className='';
	sc.style.display='none';
}
sc.onmouseover=function(){
	scj.className='on';
	sc.style.display='block';
}
sc.onmouseout=function(){
	scj.className='';
	sc.style.display='none';
}
sjzc.onmouseover=function(){
	this.className='on';
	sj.style.display='block';

}
sjzc.onmouseout=function(){
	this.className='';
	sj.style.display='none';
}
sj.onmouseover=function(){
	sjzc.className='on';
	sj.style.display='block';
}
sj.onmouseout=function(){
	sjzc.className='';
	sj.style.display='none';
}


// 选项卡
var nav=document.getElementById('nav');
var lis=nav.getElementsByTagName('li');
var cont=document.getElementById('cont');
var divs=cont.getElementsByTagName('div');
// console.log(divs);
for (var i = 0; i < lis.length; i++) {
			lis[i].index=i;

			lis[i].onmouseover=function(){
				lis[this.index].className="active";
				divs[this.index].className="show";
			}

			lis[i].onmouseout=function(){
				this.className='';
				divs[this.index].className="";
			}
		}


		for (var j = 0; j < divs.length; j++) {
			// 保存下标
			divs[j].index=j;

			divs[j].onmouseover=function(){
				lis[this.index].className="active";
				divs[this.index].className="show";
			}

			divs[j].onmouseout=function(){
				this.className='';
				lis[this.index].className="";
			}
		}


//轮播图
var img=document.getElementById('img');
var list=document.getElementById('img').getElementsByTagName("li");
var k=0;
 function show(a){
 	list[k].className=a;
 }
function autoRun(){
	s=setInterval(function(){
	show("");
	k++;
	if(k==list.length){
		k=0;
	}
	show("acti");
},1000)
}
autoRun();


// 楼层

$('.li').click(function(){
	var index=$(this).index();
	 // console.log($('.f1').eq(index).offset().top);
	var top=$(".f1").eq(index).offset().top;
			$("html").animate({scrollTop:top},500);
})
var gao=[];
$('.f1').each(function(){
	gao.push($(this).offset().top);
})
// console.log(gao);

$(window).scroll(function(){
	var top=$(this).scrollTop()+1;
	// console.log(top);

for(var l=0;l<gao.length;l++){
	if(top>=gao[l] && top<gao[l+1]){
		index=l;
		$(".li").eq(index).css("background","#f60").siblings().css("background","#fff");
	}else if(top>=gao[gao.length-1]){
		index=gao.length-1;
		$('.li').eq(index).css('background','#f60').siblings().css('background','#fff');
	 }
}
})


// 瀑布流
window.onscroll=function(){
	var dh=document.documentElement.offsetHeight;
	console.log(dh);
	var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
	console.log(ch);
	var sh=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(sh);
	if (dh-ch-600<=sh){

		Ajax("JSON").get("assets/php/list.php",function(msg){
			console.log(msg);

			var str='';
			for(var i in msg){
				str+='<img src="'+msg[i]['pic']+'">'
			}
			// console.log(str);
			document.getElementById("aj").innerHTML+=str;
		})
	}
}
