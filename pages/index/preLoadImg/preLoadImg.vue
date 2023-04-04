<template>
	<view class="loading">
		<u-line-progress :percentage="percentage" :showText="false"></u-line-progress>
	</view>
</template>

<script>
	import env from "@/env/env.js"
	
	export default {
		props:{
			name:{
				type:String,
				default:""
			}
		},
		data() {
			return {
				percentage:0
			}
		},
		mounted() {
			
		},
		methods: {
		    preloadImages(imageUrls) {
		      const promises = imageUrls.map(url => {
		        return new Promise((resolve, reject) => {
		          const img = new Image();
		          img.onload = () => {
					  this.percentage = Math.floor(this.percentage+1/imageUrls.length)
					  resolve()
					};
		          img.onerror = () => reject();
		          img.src =  env + url;
		        });
		      });
		
		      Promise.all(promises)
		        .then(() => {
		          this.percentage = 100;
				  this.$emit("onPreload")
		        })
		        .catch(() => {
		          console.error("Error occurred while loading images");
		        });
		    }
		  },
		  mounted() {
			  this.percentage = 0
			  let imgList = require('../../'+this.name+'/loading.json');
			  this.preloadImages(imgList);
			  
			
		  }
	}
</script>

<style>
	

</style>
