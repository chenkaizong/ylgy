<template>
	<view v-if="visible" class="m-item" :class="{isTop:isTop}">
		<Png :value="num" :isUnder="!isTop"></Png>
		<view v-if="destroyVisible" :class="{destroy:true,destroyAnimation:destroyAnimation}">X</view>
	</view>
</template>

<script>
	import Png from "./png.vue"
	export default {
		name:"m-item",
		components:{Png},
		props:{
			num:Number,
			isDestroy:Boolean,
			isTop:Boolean,
		},
		data() {
			return {
				visible:true,
				destroyVisible:false,
				destroyAnimation:false,
			};
		},

		methods:{
			destroy(){
				this.destroyVisible = true;
				setTimeout(()=>{
					this.destroyAnimation = true
				},10)
				setTimeout(()=>{
					this.visible = false
				},500)
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../ylgy.scss";
	
	.m-item{
		position: absolute;
		width: $ylgy-item-width;
		height: $ylgy-item-width;
		box-sizing: border-box;
		transition: .8s;
		text-align: center;
		line-height: $ylgy-item-width;
		z-index:100;

		.destroy{
			z-index:1;
			position:absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			font-size: 26rpx;
			transition: .5s;
			background-color: white;
		}
		.destroyAnimation{
			width: 100%;
			height: 100%;
			font-size: 50rpx;
		}
		
	}
</style>