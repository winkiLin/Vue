<template>
	 <div id="child">
	 	输入内容：<input type="text" name="test" id="input1" value="" v-model="copyText" /><button v-copy="copyText">复制</button><br>
		<input type="" name="" id="" value="" />
	 </div>
</template>

<script>
	export default {
	    data() {
	      return {
	        copyText: '',
	      }
	    },
	  }
</script>

<style>
</style>
