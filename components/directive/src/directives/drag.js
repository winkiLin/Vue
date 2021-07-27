const drag = {
	inserted(el,binding){
		el.onmousedown = e =>{
			var disX = e.clientX - el.offsetLeft;
			var disY = e.clientY - el.offsetTop;
			// 鼠标移动
			document.onmousemove = e =>{
				  //计算出元素移动后的位置（鼠标位置-元素初始的disX/disY）
				  var l = e.clientX - disX;
				  var t = e.clientY - disY;
				  el.style.left = l + 'px';
				  el.style.top = t + 'px';
			}

			// 松开鼠标
			document.onmouseup = e =>{
				document.onmousemove = null;
				document.onmouseup = null;
				// el.style.left = l + 'px';
				// el.style.top = t + 'px';
			}
		}
		// 移动端
		var offsetX,offsetY,endX,endY;
		el.ontouchstart = e =>{
			console.log('start')
			// 获得目标元素距离左边，右边的距离
			 offsetX = e.changedTouches[0].pageX - e.target.offsetLeft;
			 offsetY = e.changedTouches[0].pageY - e.target.offsetTop;
			 console.log(offsetX,offsetY,'鼠标距离元素的距离')
		}
		el.ontouchmove = e =>{
			console.log('move')
			var endX = e.changedTouches[0].pageX;
			var endY = e.changedTouches[0].pageY;
			el.style.left = endX - offsetX + 'px';
			el.style.top = endY - offsetY + 'px';
		}
		// 得到结局鼠标位置
		el.ontouchend = e =>{
			el.style.left = endX - offsetX + 'px';
			el.style.top = endY - offsetY + 'px';
		}
	}
}
export default drag;