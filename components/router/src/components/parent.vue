<template>
	<div id="app">
		<child @hook:mounted="handleChild"></child>
	</div>
</template>

<script>
	import Child from './child.vue'
	export default {
		data(){
			
		},
		components:{
			Child
		},
		methods:{
			handleChild(){
				
			}
		}
	}
</script>

<style>
</style>
