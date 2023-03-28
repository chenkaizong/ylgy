<template>
	<view class="cheat">
		
		<view class="item">
			<view class="button">
				<image src="@/static/ylgy/bottom.png" class="buttonPng"></image>
			</view>
			<view class="moveout">
				<view class="pngBox">
					<image src="@/static/ylgy/bottom.png" class="png"></image>
				</view>
			</view>
		</view>
			
		
		<view class="moveback">
			<image src="@/static/ylgy/bottom.png" class="button"></image>
			<image src="@/static/ylgy/bottom.png" class="png"></image>
		</view>
		<view class="randmap">
			<image src="@/static/ylgy/bottom.png" class="button"></image>
			<image src="@/static/ylgy/bottom.png" class="png"></image>
		</view>
	</view>
</template>

<script>
	export default{
		name:"cheat",
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
	
	.button{
		width: 20vw;
		height: 10vw;
		position: relative;
		overflow: hidden;
		.buttonPng{
			width: 102.4vw;
			height: 140.6vw;
			transform: rotate(-90deg);
			position: absolute;
			left: -10vw;
			right: -10vw;
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
	
	
	.moveback {
		width: 12.7vw;
		height: 12.3vw;
		overflow: hidden;
		position: relative;
		margin: 0 5vw;
		.png {
			left: -90vw;
			top: -122vw;
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