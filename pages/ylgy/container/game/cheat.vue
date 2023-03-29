<template>
	<view class="cheat">
		
		<view class="item">
			<CheatButton class="button"></CheatButton>
			<MoveOut class="png" :width="8"></MoveOut>
		</view>
		
		<view class="item">
			<CheatButton class="button"></CheatButton>
			<MoveBack class="png" :width="8"></MoveBack>
		</view>

		<view class="item">
			<CheatButton class="button"></CheatButton>
			<RandMap :width="8" class="png"></RandMap>
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
	

	.item{
		position: relative;
		width: 16vw;
		height: 12vw;
		margin:  0 3vw;
		
		.button{
			position: absolute;
			left: 0;
			top: 0;
		}
		.png{
			position: absolute;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			margin: auto;
		}
		
		
	}
	
</style>