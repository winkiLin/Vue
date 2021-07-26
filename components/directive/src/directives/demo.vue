<template>
	<div id="child">
		输入内容：
		<input type="text" name="test" id="input1" value="" v-model="copyText" />
		<button v-copy="copyText">复制</button>
		<br />
		<input type="" name="" id="" value="" />
		<button v-longpress="longpress">长按</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			copyText: ''
		};
	},
	methods: {
		longpress() {
			alert(Math.random()+ '长按指令生效1');
		},
		longpress1(){
			alert('dddd')
		}
	}
};
</script>

<style></style>
