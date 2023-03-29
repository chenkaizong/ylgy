<template>
	<view class="cheat">
		
		<view>
			<CheatButton></CheatButton>
		</view>
		<view class="item">
			
			<MoveOut></MoveOut>
		</view>
		
		<view class="item">
			<MoveBack :width="10"></MoveBack>
		</view>

		<view class="item">
			<RandMap :width="10"></RandMap>
		</view>
		

	</view>
</template>

<script>
	import CheatButton from "../png/CheatButton.vue"
	import MoveBack from "../png/MoveBack.vue"
	import RandMap from "../png/RandMap.vue"
	import MoveOut from "../png/MoveOut.vue"
	
	export default{
		name:"cheat",
		components:{MoveBack,RandMap,MoveOut,CheatButton},
		props:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.cheat {
		width: 100%;
		height: 10vw;
		display: flex;
		justify-content: center;
	}
	.png{
		width: 102.4vw;
		height: 140.6vw;
		position: absolute;
	}
	
	
	
	.item{
		position: relative;
		
		.button{
			width: 20vw;
			height: 10vw;
			position: absolute;
			overflow: hidden;
			left: 0;
			top: 0;
			.buttonPng{
				width: 102.4vw;
				height: 140.6vw;
				transform: rotate(-90deg);
				position: absolute;
				left: -10vw;
				right: -10vw;
			}
		}
		
	}
	
	.moveout{
		width: 12.7vw;
		height: 12.3vw;
		position: relative;
		margin: 0 5vw;
		.pngBox {
			width: 12.7vw;
			height: 12.3vw;
			overflow: hidden;
			position: absolute;
			transform: rotate(-90deg);
			.png {
				left: -58vw;
				top: -82.5vw;
			}
		}
	}
	
	
	.randmap {
		width: 12vw;
		height: 12.3vw;
		overflow: hidden;
		position: relative;
		margin: 0 5vw;
		.png {
			left: -14vw;
			top: -107vw;
		}
	}
	
</style>