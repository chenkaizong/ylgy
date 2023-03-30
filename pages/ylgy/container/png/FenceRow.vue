<template>
	<view :style="boxStyle">
		<image v-if="parentImage.width" src="@/static/ylgy/bottom.png" :style="imageStyle"></image>
	</view>
</template>

<script>
	import mixin from "./mixin.js"
	export default {
		props:{
			width:{
				type:Number,
				default:0,
			},
			height:{
				type:Number,
				defaut:0,
			}
		},
		mixins:[mixin],
		data(){
			return {
				positionLeft: 0,
				positionTop: 0,
				pieceWidth: 73,
				pieceHeight: 6.3,
				scale:{width:1,height:1},
				degree:0,
				
				originImage:{
					width:102.4,
					height:140.6,
				},
				parentImage:{
					width:0,
					height: 0,
				},
			}
		},
		beforeMount() {
			this.init()
		},
		computed:{
			
		},
		
		methods: {
			
		},
	}
</script>

<style>
	
</style>