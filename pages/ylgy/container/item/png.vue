<template>
	<view class="item">
		<view  class="background">
			<image :class="backgroundClass" :src="'/ylgy/item.png'|static_url" ></image>
		</view>

		<view class="pic">
			<image :class="picClass" :src="'/ylgy/item.png'|static_url" ></image>
		</view>
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
			this.setClass()
			
		},
		watch:{
			isUnder(val){
				this.setClass()
			}
		},
		methods:{
			setClass(){
				let itemClass = PICS[this.value]
				if(this.isUnder){
					this.backgroundClass = ["item-png","isUnder"]
					this.picClass = ["item-png",itemClass,"isUnder"]
				}else{
					this.picClass = ["item-png",itemClass]
					this.backgroundClass = ["item-png"]
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../ylgy.scss";
	@function size($num){
		@return $num*0.82
	}
	
	
	.item{
		position: relative;
		width: $ylgy-item-width;
		height: $ylgy-item-width;
		// border: 1px solid black;
		padding: 0;
		
	}
	
	.item-png{
		height: size(101.1vw);
		width: size(101.7vw);
	}

	.background{
		width: size(12.8vw);
		height: size(14.0vw);
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		.item-png{
			top: 0;
			left: 0;
			// display: none;
		}
		.isUnder{
			filter: brightness(0.5);
			
		}
	}
	
	.pic{
		width: size(10.8vw);
		height: size(10.8vw);
		overflow: hidden;
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		
		.isUnder{
			filter: brightness(0.5);
			opacity: 0.5;
		}
		
		.item-scissors{
			top: size(-13.6vw);
			left: size(-12.2vw);
		}
		
		.item-tree{
			top: size(0.4vw);
			left: size(-12.6vw);
		}
		
		.item-map{
			top: size(0.4vw);
			left: size(-23.2vw);
		}
		
		.item-rabbit{
			top: size(0.5vw);
			left: size(-34.0vw);
		}
		
		.item-tweezers{
			top: size(0.6vw);
			left: size(-44.6vw);
		}
		
		.item-biscuit{
			top: size(-27.8vw);
			left: size(-10.4vw);
		}
		
		.item-claw{
			top: size(-27.8vw);
			left: size(0vw);
		}
		
		.item-chestnut{
			top: size(0.08vw);
			left: size(-65.6vw);
		}
		
		.item-xie{
			top: size(-39.2vw);
			left: size(0vw);
		}
		
		.item-flower{
			top: size(-50.0vw);
			left: size(0vw);
		}
		
		.item-amulet{
			top: size(-50.0vw);
			left: size(-10.6vw);
		}
	
		.item-rose{
			top: size(-71.9vw);
			left: size(-21.9vw);
		}
		
		.item-tall-hat{
			position: relative;
			top: size(-60.6vw);
			left: size(-20.9vw);
		}
	
	}
	
	
</style>