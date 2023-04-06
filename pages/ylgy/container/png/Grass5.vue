<template>
	<view :style="boxStyle">
		<image v-if="parentImage.width" :src="'/ylgy/grass.png'|static_url" :style="imageStyle"></image>
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
				positionLeft: -17.5,
				positionTop: -49,
				pieceWidth: 6,
				pieceHeight: 3,
				scale:{width:1,height:1},
				degree:90,
				
				originImage:{
					width:36.4,
					height:99.2,
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