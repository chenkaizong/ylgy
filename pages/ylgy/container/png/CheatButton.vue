<template>
		<view :style="boxStyle">
			<image v-if="parentImage.width" :src="'/ylgy/bottom.png'|static_url" :style="imageStyle"></image>
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
				positionLeft: -101.5,
				positionTop: -85,
				pieceWidth: 15.8,
				pieceHeight: 12.7,
				scale:{width:1,height:1},
				degree:-90,
				
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