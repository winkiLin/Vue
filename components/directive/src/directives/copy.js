// 一键复制文本内容，用于鼠标右键粘贴
const copy = {
	bind(el,{value}){
		el.$value = value;
		el.handler = ()=>{
			if(!el.$value){
				console.log('没有可以复制的内容')
				return
			}
			// 动态创建textarea
			const textarea = document.createElement('textarea');
			// 将textarea设置成readonly，防止ios唤起键盘，并移出可视区域
			textarea.readOnly = 'readonly';
			textarea.style.position = 'absolute';
			textarea.style.left = '-999999999px';
			// 将要copy的值赋给textarea的value属性
			textarea.value = el.$value;
			// 将textarea插入到dom中
			document.body.appendChild(textarea);
			// 选中值并复制
			textarea.select();
			const result = document.execCommand('Copy');/* 拷贝选中的内容 */
			if(result){
				console.log('复制成功');
			}
			document.body.removeChild(textarea);
		}
		el.addEventListener('click',el.handler); /*点击一键复制*/
	},
	// 当传进来的值更新时候，触发
	componentUpdated(el,{value}){
		el.$value = value;
	},
	// 指令与元素解绑时，移出监听
	unbind(el){
		el.removeEventListener('click',el.handler)
	}
}

export default copy