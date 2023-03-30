<template>
	<view class="fence">
		<FenceColumn class="left"></FenceColumn>
		<FenceColumn class="right"></FenceColumn>
		<FenceRow class="bottom" width="80"></FenceRow>
		<view class="box">
			<view class="innerbox">
				
			</view>
		</view>
	

	</view>
</template>

<script>
	import FenceColumn from "../png/FenceColumn.vue"
	import FenceRow from "../png/FenceRow.vue"
	
	
	export default{
		name:"fence",
		components:{FenceColumn,FenceRow},
		data(){
			return {
				
			}
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.fence {
		width: 95vw;
		height: 20vw;
		display: flex;
		justify-content: space-between;
		left: 0;
		right: 0;
		margin: 0 auto;
		position: absolute;
		
		.left{
			position: absolute;
			left: 0;
			top: 0;
		}
		.right{
			position: absolute;
			right: 0;
			top: 0;
		}
		.bottom{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			
		}
		
		.box{
			border-radius: 3vw;
			background-color: rgb(194,129,45);
			padding-top: 2vw;
			height: 20vw;
			width: 93vw;
			box-sizing: border-box;
			margin: 0 auto;
		}
		
		.innerbox{
			height: 12vw;
			width: 90vw;
			background-color: rgb(150,91,27);
			border-radius: 3vw;
			margin: 0 auto;
		}
	}
	
	
</style>