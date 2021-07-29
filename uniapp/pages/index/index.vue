<template>
	<view>
		<NavBar :showDiy="true" :isBack="false">
			<template slot="left">
				<view style="width: 50upx;height: 50upx;display: flex;align-items: center;">
					<u-image src="../../static/logo.png" width="100%" height="100%" style="flex-shrink: 0;"></u-image>
					<view class="" style="margin-left: 20upx;"><text>loremloremloremloremloremlorem</text></view>
				</view>
			</template>
			<template slot="right">
				<view class="right-part" style="display: flex;">
					<view class="" style="position: relative;">
						<u-icon name="bell"></u-icon>
						<u-badge type="error" size="mini" count="9" :absolute="true" :offset="offsetArr"></u-badge>
					</view>
					<view class="" style="margin-left: 30upx;"><u-icon name="list"></u-icon></view>
				</view>
			</template>
		</NavBar>
		<slide
			:left="[{ text: '完成', callback: leftCb }]"
			:right="[{ text: '完成',callback:rightCb1 }, { text: '删除', backgroundColor: '#E53A40',callback:rightCb2 }]"
			:content="{ title: '测试标题', desc: '测试描述' }"
		></slide>
	</view>
</template>

<script>
import NavBar from '../../components/navbar.vue';
import Slide from '../../components/xt-swiperCell/xt-swiperCell.vue';

export default {
	components: {
		NavBar,
		Slide
	},
	data() {
		return {
			navTitle: '首页',
			background: {
				backgroundColor: '#001f3f',

				// 导航栏背景图
				background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
				// 还可以设置背景图size属性
				backgroundSize: 'cover',

				// 渐变色
				backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
			},
			offsetArr: [-10, -18]
		};
	},
	methods: {
		leftCb(){
			console.log('右滑回调点击')
		},
		rightCb1(){
			console.log('左滑1点击')
		},
		rightCb2(){
			console.log('左滑点击2')
		}
	}
};
</script>
<style scoped lang="scss">
.right-slot {
	padding: 0 30rpx;
}
</style>
