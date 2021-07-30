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
			name: '',
			mobile: '',
			imageValue: []
		};
	},
	methods: {
		// 获取上传状态
		select(e) {
			console.log('选择文件：', e);
		},
		// 获取上传进度
		progress(e) {
			console.log('上传进度：', e);
		},

		// 上传成功
		success(e) {
			console.log(e,'上传成功');
		},

		// 上传失败
		fail(e) {
			console.log('上传失败：', e);
		}
	}
};
</script>
<style scoped lang="scss">
	
</style>
