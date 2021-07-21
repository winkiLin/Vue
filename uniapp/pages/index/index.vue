<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// this.$api.getSmsCode({
			// 	mobile: '17180630538',
			// 	device_version: "158",
			// 	device_time: "1626667208",
			// 	device_type: "windows",
			// 	timestamp: "1626667208",
			// 	signature: 'FBE02E6F420E103775CFF87D013132AB',
			// }).then(res => {
			// 	console.log(res,'返回数据')
			// }, err => {
			// 	console.log(err,'报错信息')
			// })
		},
		created(){
			console.log(this.$store.state.num,'查看')
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
