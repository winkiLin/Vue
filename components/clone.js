import vue from "vue"

// Flow flow 静态类型检测

use flow;
function add(n:Number){
	return n * n
}
add('hello world')

new Vue()


_init()
// 初始化、Object.defineProperty()  --> ie8 以下不支持

// $mount() 将组件挂载上去

// 编译 template 编译成 js
parse /* 转 style class  --》 AST 树*/
optimize /* 优化 标记 static静态节点  ————》update 调用 patch 方法 会跳过静态节点 减少了比较 优化了 patch方法*/
generate /* 将AST树 转为 render function 字符串 */

// 响应式
Object.defineProperty(o,p,desc)/* ie8 以下不支持 */

function cb(){
	/* 渲染视图 */
	console.log('视图更新啦~')
}
// 定义响应式func
function defineReative(obj,key,val){
	Object.defineProperty(obj,key,{
		enumerable:true,
		configurable:true,
		get:function reactiveGetter(){
			return val;
		},
		set:function reactiveSetter(newVal){
			if(val == newVal) return
			cb(newVal)
		}
	})
}

// 遍历每个对象属性
function observer(value){
	if(!value || (type value !== 'object')){
		return
	}
	Object.keys(value).forEach(key=>{
		defineReactive(value,key,value[key])
	})
}

// 封装vue
class Vue{
	construction(options){
		this._data = options.data
		observer(this._data);
	}
}

// 测试
let o = new Vue({
	data:{
		test:'i am test'
	}
})
o._data.test = 'hello world';/* 视图更新啦 ~ */

// 依赖收集追踪
new Vue({ 	
	template:
		`
		<div>
			<span>{{text1}}</span>
			<span>{{text2}}</span>
		</div>
		`,
		data:{
			text1:'text1',
			text2:'text2',
			text3:'text3'
		}
})

this.text3 = 'modify text3'

let globalObj = {
	text1:'text1'
}
let o1 = new Vue({
			template:
			`<div>
				<span>{{text1}}</span>
			</div>`,
			data:globalObj
		})
		
let o2 = new Vue({
			template:
			`<div>
				<span>{{text1}}</span>
			</div>`,
			data:globalObj
		})
		
globalObj.text1 = 'hello,text1';

// 订阅者（主要用来存放观察者）
class Dep {
	constructor(){
		this.subs = []/* 用来存放观察者对象的数组 */
	}
	
	// 添加观察者对象
	 addSub(sub){
		this.subs.push(sub)
	}
	// 通知所有观察者对象更新视图
	 notify(){
		this.subs.forEach(sub=>{
			sub.update();/* 每个观察者更新视图 */
		})
	}
	
}

// 观察者

class Watcher{
	constructor(){
		/* 在new 一个 Watcher 对象时，将它赋值个Dep.target 对象 */
		Dep.target = this
	}
	// 更新视图的方法
	update(){
		console.log('视图更新啦~')
	}
}

Dep.target = null

// 依赖收集
function defineReative(obj,key,val){
	/* 一个 Dep 对象 */
	const dep = new Dep();
	Object.defineProperty(obj,key,{
		enumerable:true,
		configurable:true,
		get:function reactiveGetter(){
			/* 将Dep.target Watcher存入subs 中 */
			dep.addSub(Dep.target);
			return val;
		},
		set:function reactiveSetter(newVal){
			if(val == newVal) return
			/* 在 set 的时候通知所有sub更新视图
			 */
			dep.notify();
		}
	})
}

// 遍历每个对象属性
function observer(value){
	if(!value || (type value !== 'object')){
		return
	}
	Object.keys(value).forEach(key=>{
		defineReactive(value,key,value[key])
	})
}

class Vue{
	constructor(options){
		this._data = options.data;
		observer(this._data);
		/* 新建一个Watcher对象,这时候Dep.target 会指向这个对象 */
		new Watcher();
		/* 在这里模仿render功能，为了触发get方法 */
		console.log('render~',this._data.test)
	}
	
}

// Vnode 
class VNode{
	constructor(tag,data,children,text,elm) {
	    /* 当前节点的标签名*/
		this.tag = tag;
		/* 当前节点的一些数据信息，比如 props，attrs */
		this.data = data;
		/* 当前节点的子节点，是个数组 */
		this.children = children;
		/* 当前节点的文本 */
		this.text = text;
		/* 当前虚拟节点对应额真实dom */
		this.elm = elm;
	}
}
// Vue 组件
<template>
	<span class="demo" v-show="isShow">
		this is demo
	</span>
</template>




