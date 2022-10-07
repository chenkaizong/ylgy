<template>
	<view v-if="visible" class="m-item" :class="{istop:istop}">
		<view class="pic">{{num}}</view>
		<view v-if="destroyVisible" :class="{destroy:true,destroyAnimation:destroyAnimation}">X</view>
	</view>
</template>

<script>
	export default {
		name:"m-item",
		props:{
			num:Number,
			isDestroy:Boolean,
			istop:Boolean,
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

<style>

</style>