/* 
	提供以下几个钩子，可选
	bind：只调用一次，指令第一次绑定到dom元素时调用，可以定义一个在绑定时执行一次的初始化动作。
	inserted：被绑定元素插入到父节点时调用。
	update：被绑定元素所在的模板更新时调用，无论被绑定值是否变化。
	componentUpdated：被绑定元素所在的模板完成一次周期性更新时调用。
	unbind:只调用一次，指令与元素解绑时调用
 */
import copy from './copy'
import longpress from './longpress.js'
import debounce from './debounce.js'
import emoji from './emoji.js'
import drag from './drag.js'


// 自定义指令

const directives = {
	copy,
	longpress,
	debounce,
	emoji,
	drag,
	
}

export default {
	install(Vue){
		Object.keys(directives).forEach(key=>{
			Vue.directive(key,directives[key])
		})
	}
}