// 拖拽和遮罩
var xx=document.getElementById('xx');
var btn=document.getElementById('btn');
btn.onclick=function(){
		xx.classList.add('hidden');
		bar.classList.add('hidden');
	}
xx.onmousedown=function(en){
	  var e=en||window.event;
	  console.log(e.clientX,e.clientY);
	  var dx=e.clientX-this.offsetLeft;
	  var dy=e.clientY-this.offsetTop;

	  document.onmousemove=function(ent){
	  	var en=ent||window.event;
				//移动的距离=当前鼠标的位置-不变的距离
				console.log(en.clientX,en.clientY);
				var left=en.clientX-dx;
				var top=en.clientY-dy;
				console.log(left,top);

				//边界判断
				if (left<=0) {
					left=0;
				}else if (left>=document.documentElement.clientWidth-xx.offsetWidth) {
					left=document.documentElement.clientWidth-xx.offsetWidth;
				}

				if (top<=0) {
					top=0;
				}else if (top>=document.documentElement.clientHeight-xx.offsetHeight) {
					top=document.documentElement.clientHeight-xx.offsetHeight;
				}

				xx.style.left=left+'px';
				xx.style.top=top+'px';

	  }
	  document.onmouseup=function(){
				document.onmousemove=null;
			}

}

// 正则验证
var sjh=document.getElementById('sjh');
var cont=document.getElementById('cont');
var pa=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/
	
	sjh.onblur=function(){
		var v=this.value;
		console.log(v);
		if(pa.test(v)){
			cont.innerHTML="√手机号码正确"
		}else{
			cont.innerHTML="×手机号码错误"
		}
		
	}

// 滑块效果
var slider=document.getElementById('slider');
var yz=document.getElementById('yz');
var test=document.getElementById('text');
var lv=document.getElementById('lv');
var btn1=document.getElementById('btn1');
slider.onmousedown=function(en){
	  var e=en||window.event;
	  var dx=e.clientX-this.offsetLeft;

	  slider.onmousemove=function(ent){
	  	var en=ent||window.event;
				
				console.log(en.clientX);
				var left=en.clientX-dx;


				//边界判断
				if(left<=0){
					left=0;
				}else if(left >=yz .offsetWidth - slider.offsetWidth){
                    slider.onmousedown = null;
                    slider.onmousemove = null;
                    test.innerHTML = '通过验证';
                // }else if(left=yz.offsetWidth-slider.offsetWidth){
                // 	btn1.className='red';
                           }
            
				


				
				slider.style.left=left+'px';
				// lv.style.width=left+'px';

	  }
	   slider.onmouseup = function(){
                slider.onmousemove = null;
                slider.onmousedown= null;

                // slider.style.left = 0;
                // lv.style.width = 0;
            }

}

