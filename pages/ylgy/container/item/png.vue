<template>
	<view class="item">
		<view  class="background">
			<image :class="backgroundClass" src="@/static/ylgy/item.png" ></image>
		</view>

		<view class="pic">
			<image :class="picClass" src="@/static/ylgy/item.png" ></image>
		</view>
		<div v-if="isUnder" class="isUnder"></div>

	</view>
	
</template>

<script>
	const PICS = [
		"item-scissors",
		"item-tree",
		"item-map",
		"item-rabbit",
		"item-tweezers",
		"item-biscuit",
		"item-claw",
		"item-chestnut",
		"item-xie",
		"item-flower",
		"item-amulet",
		"item-rose",
		"item-tall-hat",
	]
	export default {
		props:{
			value:{
				type:Number,
				default:1,
			},
			isUnder:{
				type:Boolean,
				default:false,
			}
		},
		data(){
			return {
				picClass:["item-png"],
				backgroundClass:["item-png"]
			}
		},
		beforeMount() {
			let itemClass = PICS[this.value]
			if(!itemClass){
				console.log("找不到图片")
			}
			this.picClass = ["item-png",itemClass]
			
			if(this.isUnder){
				this.backgroundClass = ["item-png","isUnder"]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@function size($num){
		@return $num*0.75
	}
	
	.item-png{
		height: size(1011rpx);
		width: size(1011rpx);
	}

	.background{
		width: size(128rpx);
		height: size(140rpx);
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		.item-png{
			top: 0;
			left: 0;
			// display: none;
		}
		.isUnder{
			top: size(-140rpx);
			left: size(4rpx);
		}
	}
	
	.pic{
		width: size(108rpx);
		height: size(108rpx);
		overflow: hidden;
		position: absolute;
		top: size(6rpx);
		left: size(8rpx);
		
		.item-scissors{
			top: size(-138rpx);
			left: size(-122rpx);
		}
		
		.item-tree{
			top: size(4rpx);
			left: size(-126rpx);
		}
		
		.item-map{
			top: size(4rpx);
			left: size(-232rpx);
		}
		
		.item-rabbit{
			top: size(8rpx);
			left: size(-340rpx);
		}
		
		.item-tweezers{
			top: size(8rpx);
			left: size(-446rpx);
		}
		
		.item-biscuit{
			top: size(-278rpx);
			left: size(-104rpx);
		}
		
		.item-claw{
			top: size(-278rpx);
			left: size(0rpx);
		}
		
		.item-chestnut{
			top: size(8rpx);
			left: size(-656rpx);
		}
		
		.item-xie{
			top: size(-392rpx);
			left: size(0rpx);
		}
		
		.item-flower{
			top: size(-500rpx);
			left: size(0rpx);
		}
		
		.item-amulet{
			top: size(-500rpx);
			left: size(-106rpx);
		}
	
		.item-rose{
			top: size(-719rpx);
			left: size(-219rpx);
		}
		
		.item-tall-hat{
			position: relative;
			top: size(-609rpx);
			left: size(-209rpx);
		}
	
	}
	
	
</style>