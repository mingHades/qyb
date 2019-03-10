var small=document.getElementById('small');
var small_pic=document.getElementById('small_pic');
var move=document.getElementById('move');
var big=document.getElementById('big');
var big_pic=document.getElementById('big_pic');
var active=document.getElementById('active');
var lis=active.getElementsByTagName('li');

small.onmousemove=function(en){
			var e=en||window.event;

			// move显示
			move.style.display="block";

			var x=e.pageX-165-move.offsetWidth/2;
			 var y=e.pageY-300-move.offsetHeight/2;
			// console.log(e.offsetX,e.offsetY);
			console.log(e.pageX,e.pageY);
			console.log(x,y);
			console.log(this.offsetLeft);
			// y边界值
			if(x<=0){
				x=0;
			}else if(x>=this.offsetWidth-move.offsetWidth){
				x=this.offsetWidth-move.offsetWidth
			}
			if(y<=0){
				y=0;
			}else if(y>=this.offsetHeight-move.offsetHeight){
				y=this.offsetHeight-move.offsetHeight
			}
			move.style.left=x+'px';
			 move.style.top=y+'px';

			big.style.display="block";

			//console.log(x,y);
			//console.log(x/this.offsetWidth,y/this.offsetHeight);
			// 大图宽高*比例=大图的移动距离
			var bleft=big_pic.offsetWidth*(x/this.offsetWidth);
			var btop=big_pic.offsetHeight*(y/this.offsetHeight);
			 // console.log(bleft,btop);
			big_pic.style.left=-bleft+'px';
			big_pic.style.top=-btop+'px';
			
		}


		// small的鼠标移出
		small.onmouseout=function(){
			move.style.display="none";
			big.style.display="none";
		}

		// 点击事件更换 图片
		for (var i = 0; i < lis.length; i++) {

			lis[i].onclick=function(){
				small_pic.src=this.firstElementChild.src;
				big_pic.src=this.firstElementChild.src;
			}
		}
