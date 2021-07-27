<template>
	<div id="child">
<!-- 		输入内容：
		<input type="text" name="test" id="input1" value="" v-model="copyText"/>
		<button v-copy="copyText">复制</button>
		<br />
		<input type="" name="" id="" value=""/>
		<button v-longpress="longpress">长按</button>
		<button v-debounce="debounceClick">防抖</button>
		<input type="text" v-model="note" v-emoji /> -->
		<div class="div1" v-drag></div>
		<div class="div2" v-drag></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			copyText: '',
			note: ''
		};
	},
	methods: {
		longpress() {
			alert(Math.random() + '长按指令生效1');
		},
		debounceClick() {
			console.log('只触发一次');
		}
	}
};
</script>

<style>
.div1,
.div2 {
	width: 100px;
	height: 100px;
	position: absolute;
}
.div1 {
	background-color: #f4f8fb;
	/* top: 100px; */
}
.div2 {
	top: 200px;
	background-color: red;
}
</style>
