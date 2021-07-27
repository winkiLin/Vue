// 图片懒加载
const lazyload = {
	// install 方法
	install(Vue,options){
		const defaultSrc = options.default;
		Vue.directive('lazy',{
			bind(el,binding){
				lazyload.init(el,binding.value,defaultSrc)
			},
			inserted(el){
				if(IntersectionObserver){
					lazyload.observe(el);
				}else{
					lazyload.listenerScroll(el);
				}
			}
		})
	},
	// init 初始化
	init(el,val,def){
		el.setAttribute('data-src',val)
		el.setAttribute('src',def)
	},
	// 利用IntersectionObserver 监听 el
	observe(){
		var io = new IntersectionObserver(entries=>{
			const realSrc = el.dataset.src
			if(entries[0].isIntersecting){
				if(realSrc){
					el.src = realSrc
					el.removeAttribute('data-src')
				}
			}
		}) 
		io.observe(el)
	},
	listenerScroll(){
		
	},
	// 加载真实图片
	load(){
		
	},
	// 节流
	throttle(fn,delay){
		let timer
		let prevTime
		return function(...args){
			const currTime = Date.now();
			const context = this
			if(!prevTime) prevTime = currTime;
			clearTimeout(timer);
			if((currTime - prevTime ) > delay){
				prevTime = currTime
				fn.apply(context,args)/* 执行this的执行环境，并传输组参数 */
				clearTimeout(timer)
				return
			}
			timer = setTimeout(()=>{
				prevTime = Date.now();
				timer = null;
				fn.apply(context,args)
			},delay)
		}
	}
}

export default lazyload;