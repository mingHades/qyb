// 滚动出现导航栏
var box=document.getElementById('box');
var lc=document.getElementById('lc');
var fhdb=document.getElementById('fhdb');


window.onscroll=function(){

	var top=document.documentElement.scrollTop||window.pageYOffset;
	console.log(top);

	// 判断
	if(top>=1000){
		box.style.position="fixed";
		box.style.left="0px";
		box.style.top="0px";
		box.style.display='block';
		lc.style.display='block';
		fhdb.style.display='block';


	}else if(top<1000){
		//静态定位
		box.style.position="static";
		box.style.display='none';
		lc.style.display='none';
		fhdb.style.display='none';

	}
}	


// 二级菜单
var tb=document.getElementById('tb');
var scj=document.getElementById('scj');
var sjzc=document.getElementById('sjzc');
var wode=document.getElementById('wode');
var sc=document.getElementById('sc');
var sj=document.getElementById('sj');
var gg_ewm=document.getElementById('gg_ewm');
var sjb=document.getElementById('sjb');
var wz=document.getElementById('wz');
var wzdh=document.getElementById('wzdh');
// console.log(gg_ewm,sjb);
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
sjb.onmouseover=function(){
	this.className='on';
	gg_ewm.style.display='block';
}
sjb.onmouseout=function(){
	this.className='';
	gg_ewm.style.display='none';
}
gg_ewm.onmouseover=function(){
	sjb.className='on';
	gg_ewm.style.display='block';
}
gg_ewm.onmouseout=function(){
	sjb.className='';
	gg_ewm.style.display='none';
}
wz.onmouseover=function(){
	this.className='on';
	wzdh.style.display='block';
}
wz.onmouseout=function(){
	this.className='';
	wzdh.style.display='none';
}
wzdh.onmouseover=function(){
	wz.className='on';
	wzdh.style.display='block';
}
wzdh.onmouseout=function(){
	wz.className='';
	wzdh.style.display='none';
}


// 选项卡
	//字体随机颜色 
var xxk=document.getElementById('xxk');
var lis=xxk.getElementsByTagName('li');
var as=xxk.getElementsByTagName('a');
var cont=document.getElementById('cont');
var divs=cont.getElementsByTagName('div');
console.log(as);
for(var k=0;k<lis.length;k++){
	lis[k].index=k;
	lis[k].onmouseover=function(){
		lis[this.index].style.background=rand();
		divs[this.index].style.display='block';
		divs[this.index].style.color=rand();
		divs[this.index].style.background=rand();

	}
	lis[k].onmouseout=function(){
		lis[this.index].style.background='';
		divs[this.index].style.display='none';
	}
}
for (var j = 0; j < divs.length; j++) {
			divs[j].index=j;

			divs[j].onmouseover=function(){
				lis[this.index].style.background=rand();
				divs[this.index].style.display='block';
				divs[this.index].style.color=rand();
			}

			divs[j].onmouseout=function(){
				lis[this.index].style.background='';
				divs[this.index].style.display='none';
			}
		}


function rand(){
	var a=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var c=Math.floor(Math.random()*256);
	return 'rgb('+a+','+b+','+c+')';
}
// setInterval(function(){
// 		for(var i=0;i<lis.length;i++){
// 			lis[i].style.background=rand();
// 		}
// 		},500)


// 轮播图

var list=document.getElementById('img').getElementsByTagName("li");
var num=document.getElementById('num').getElementsByTagName("li");
console.log(list,num);
var i=0;
function show(a,b){
	list[i].className=a;
	num[i].className=b
}

function autoRun(){
	s=setInterval(function(){
		show("","");
		i++;
		if (i==list.length) {
			i=0;
		}
		show("active","selected");

	},2000)
}
autoRun();
for (var j = 0; j < list.length; j++) {
	list[j].onmouseover=function(){
	cont.style.display='none';
	clearInterval(s);
	}
	list[j].onmouseout=function(){
	autoRun();
	// cont.style.zIndex='102';	
	cont.style.display='block';

	}
}
for(var m=0;m<num.length;m++){
	num[m].index=m;

	num[m].onmouseover=function(){
		clearInterval(s);

		show("","");
		i=this.index;
		show("active","selected");
	}
	num[m].onmouseout=function(){
		autoRun();
	}
}

// 小轮播图

$(function(){
	var i=0;
	function sh(){
		$(".xlbt").eq(i).addClass("active").siblings().removeClass("active");
		$("#ch_lb li").eq(i).addClass("show").siblings().removeClass("show");
	}

	function run(){
		ss=setInterval(function(){
			i++;
			if (i==$(".xlbt").size()) {
				i=0;
			}
			sh();
			// console.log(i);
		},2000);
	}
	run();

	$(".xlbt").mouseover(function(){	
		clearInterval(ss);
	}).mouseout(function(){
		run();
	})

	$("#ch_lb li").mouseover(function(){	
		clearInterval(ss);
		i=$(this).index();
		sh();
	}).mouseout(function(){
		run();
	})
	
})


// 楼层
$('.li').click(function(){
	var index=$(this).index();
	 // console.log($('.f1').eq(index).offset().top);
	var top=$(".lc1").eq(index).offset().top;
			$("html").animate({scrollTop:top},500);
})
var gao=[];
$('.lc1').each(function(){
	gao.push($(this).offset().top);
})
// console.log(gao);

$(window).scroll(function(){
	var top=$(this).scrollTop();
	// console.log(top);

for(var l=0;l<gao.length;l++){
	if(top>=gao[l] && top<gao[l+1]){
		index=l;
		$(".li").eq(index).css("background","#f60").siblings().css("background"," rgba(0,0,0,.6)");
	}else if(top>=gao[gao.length-1]){
		index=gao.length-1;
		$('.li').eq(index).css('background','#f60').siblings().css('background',' rgba(0,0,0,.6)');
	 }
}
})
$("#back-to-top").click(function(){
    $('body,html').animate({scrollTop:0},1000);
    return false;
 });
$("#fhdb").click(function(){
    $('body,html').animate({scrollTop:0},1000);
    return false;
 });
