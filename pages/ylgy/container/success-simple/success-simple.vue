<template>
	<u-popup :show="show" :round="10" mode="center" @close="close" @open="open">
		<view class="simple-box">
			
			<u-form  ref="uForm" label-width="180rpx" class="form">
				<u-form-item label="选择难度"> <u-number-box :min="2" :max="9" v-model="level"></u-number-box> </u-form-item>
			</u-form>
			
			<view class="description">
				难度说明：等级1表示只有 1，2，3 三个数字，
			    同理，等级9表示 一共有1~11 共 12个数字
			</view>
			
			<u-button @click="$navTo('/pages/game/game?level='+level)">打开</u-button>
		</view>
		
	</u-popup>
</template>

<script>
	export default {
		props:{
			setLevel:Number
		},
		data() {
		  return {
			show: false,
			level:9,
			list:[],
		  }
		},
		created() {
			this.level = this.setLevel ? this.setLevel : 2
		},
		methods: {
		  open() {
			this.show = true;
		  },
		  close() {
			this.show = false
		  }
		}
	}
	  
	  
</script>

<style>
	.simple-box{
		width: 500rpx;
		height: 400rpx;
		background-color: aliceblue;
		border-radius: 20rpx;
		padding: 10rpx;
		font-size: 30rpx;
	}
	.form{
		display: flex;
		justify-content: center;
		font-size: 30rpx;
		
	}
	.description{
		margin: 30rpx;
		font-size: 30rpx;
	}
</style>