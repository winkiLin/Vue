<template>
	<view>
		<u-navbar :back-icon-color='backColor' back-text='返回' :is-back="isBack" :title-color='titleColor' :title="title" :background="bgStyle">
			<view class="left-slot" v-if="showDiy">
				<slot name="left"></slot>
			</view>
			<template slot="right">
				<view class="right-slot">
					<slot name="right"></slot>
				</view>
			</template>
		</u-navbar>
	</view>
</template>

<script>
export default {
	props:{
		isBack:{
			type:Boolean,
			default:true
		},
		titleColor:{
			type:String,
			default:'#FFFFFF',
		},
		title:{
			type:String,
			default:''
		},
		bgStyle:{
			type:Object,
			default: ()=>{
				return {
					// 导航栏背景图
					background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
					// 还可以设置背景图size属性
					backgroundSize: 'cover',
					
					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
	
			}
			} 
		},
		backColor:{
			type:String,
			default:'#FFFFFF'
		},
		showDiy:{
			type:Boolean,
			default:false
		}
	},
	name:'navbar',
	data() {
		return {
			
		}
	}
};
</script>
<style scoped lang="scss">
	.left-slot,.right-slot{
		padding: 0 30rpx;
		color: #FFFFFF;
		font-size: 18px;
	}
</style>
