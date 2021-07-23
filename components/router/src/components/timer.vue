<template>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		methods:{
			
		},
		mounted() {
			 let timer = setInterval(()=>{
				console.log('每一秒执行一次')
			},1000)
			this.$once('hook:beforeDestroy',()=>{
				clearInterval(timer)
				timer = null
			})
		}
	}
</script>

<style>
</style>
