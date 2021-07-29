# xt-swiper-cell 滚动的单元格
> 本插件使用了scss 样式预编译处理器，使用本插件请开启scss。

## 使用方法
- 导入的使用方法

```js
import XtSwiperCell from '@/components/xt-swiperCell/xt-swiperCell.vue'

Vue.component('xt-swiperCell', XtSwiperCell)
```

```html
<xt-swiperCell
	<!-- callback ：点击按钮的回调事件 -->
	:left="[{ text: '完成', callback: callback }]"
	:right="[{ text: '完成' }, { text: '删除', backgroundColor: '#E53A40' }]"
	:content="{ title: '测试标题', desc: '测试描述' }"
/>

```

- 直接从插件市场下载组件 (HBuilderX 2.5.5起 才支持 不需要导入即可使用组件)

```html
<xt-swiperCell
	<!-- callback ：点击按钮的回调事件 -->
	:left="[{ text: '完成', callback: callback }]"
	:right="[{ text: '完成' }, { text: '删除', backgroundColor: '#E53A40' }]"
	:content="{ title: '测试标题', desc: '测试描述' }"
/>

```

## Props
|  参数		| 说明			| 类型	| 默认值|
|  ----		| ----			| ----	| ----	|
| content	| 主要内容		| Object| null	|
| left		| 左边按钮数组	| Array	| []	|
| right		| 右边按钮数组	| Array	| []	|

## content 参数说明
|  参数		| 说明	|类型		|默认值	|
|  ----		| ----	|----		|----	|
| image	| 图片地址| String	| 自动生成一个图片|
| title	| 标题		| String	|''
| desc	| 描述		| String	|''

## left/right 按钮对象参数说明
|  参数   | 说明  | 类型 | 默认值
|  ----   | ----  | ---- | ---- 
| text			| 文本				| String|
| color			| 文本颜色			| String|
|backgroundColor| 按钮背景颜色		| String|
| style			| 自定义样式		| Object	|
| callback		| 点击按钮的回调事件| (index:number) => void/Promise	|

> callback 是Promise函数，根据 resolve(true), reject(false) 控制是否隐藏按钮 

## slot 插槽
|  参数		| 说明		|
|  ----		| ----		|
| defalut	| 主要内容	|
|  left		| 左边按钮	|
| right		| 右边按钮	|