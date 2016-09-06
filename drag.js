
//js 鼠标拖拽分装函数
function addDragFun(scroll,scrollBox,leftScroll,leftScrollBox){
	scroll.onmousedown = function(event){
		var ev = event || window.event;
		var disY = ev.pageY - scroll.offsetTop;//鼠标在scroll 块儿里面的位置
		document.onmousemove = function(event){
			var ev = event || window.event;
			if (ev.preventDefault) {
					ev.preventDefault();
				} else{
					ev.returnValue = false;
				}
			
			var maxHeight = scrollBox.clientHeight - scroll.offsetHeight;
			var y = ev.pageY - disY;
				if (y >= maxHeight) {
					y = maxHeight;
				}
				if (y <= 0) {
					y = 0;
				}
				scroll.style.top = y + "px";
				
				//鼠标拖拽 内容跟着移动的最大距离
				var maxHeightLeft = leftScroll.offsetHeight - leftScrollBox.clientHeight;
				//移动的最大比例
				var scaleY = y / maxHeight;
				leftScrollBox.scrollTop = scaleY * maxHeightLeft;
							
			}
		}
	
	document.onmouseup = function(){
		document.onmousemove = null;
	}	
	
}

//调用方法
addDragFun(content,contentBox,scroll,scrollBox);
//content 内容区域   contentBox 包含内容区域的盒子   scroll 拖动的滑动条   scrollBox 包含拖动滑动条的盒子
