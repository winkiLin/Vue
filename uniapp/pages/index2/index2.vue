<template>
	<view class="box">
		<view class="get"><text>GET</text></view>
		<view class="post"><text>POST</text></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
	.box{
		background: url(../../static/index/bg.jpg) center no-repeat;
		display: flex;
		height: 100vh;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		.get,.post{
			color: #FFFFFF;
			width: 300upx;
			height: 300upx;
			border-radius: 50%;
			line-height: 300upx;
			text-align: center;
		}
		.get{
			background: linear-gradient(#24C6DC,#514A9D);
			margin-bottom: 50upx;
		}
		.post{
			background: linear-gradient(#5C258D,#4389A2);
		}
	}
	
</style>
