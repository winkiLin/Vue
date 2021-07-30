<template>
	<view class="postForm">
		<u-field v-model="name" label="需求名称" placeholder="请填写需求名称"></u-field>
		<u-field v-model="mobile" label="手机号" placeholder="请填写手机号"></u-field>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'',
			mobile:''
		};
	}
};
</script>
<style scoped lang="scss">
	
</style>
