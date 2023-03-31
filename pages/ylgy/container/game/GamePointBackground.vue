<template>
	<view class="backgroundBox">
		<view v-for="list_num in ylgyOption.mapX" class="backgroundList" :key="list_num">
			<view v-for="item_num in ylgyOption.mapY" class="backgroundItem" :key="item_num">
				
			</view>
		</view>
	</view>
</template>

<script>
	import Func from "../../func.js"
	export default{
		name:"GamePointBackground",
		data(){
			return {
				ylgyOption:Func.ylgyOption
			}
			
		},
		methods:{
			
		}
	}
</script>


<style lang="scss" scoped>
	@import "../../ylgy.scss";
	.backgroundBox {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: $ylgy-map-width;
		height: $ylgy-map-width;
		
		.backgroundList {
			border-collapse: collapse;
			height: $ylgy-precision;
			width: 100%;
			display: flex;
		}
		
		.backgroundItem {
			border-collapse: collapse;
			height: $ylgy-precision;
			width: $ylgy-precision;
			border: 1px solid #eee;
		}
	}
	
	
</style>