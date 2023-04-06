<template>
	<view class="loading">
		<u-line-progress :percentage="percentage" activeColor="red" :height="10">
			
		</u-line-progress>
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
					  this.percentage = Math.floor(this.percentage+100/imageUrls.length)
					  
					  resolve()
					};
		          img.onerror = () => reject();
		          img.src =  env.VUE_APP_STATIC_URL + url;
		        });
		      });
		
		      Promise.all(promises)
		        .then(() => {
		          this.percentage = 100;
				  setTimeout(()=>{
					  this.$emit("onLoaded")
				  },500)
				  
		        })
		        .catch(() => {
		          console.error("Error occurred while loading images");
		        });
		    }
		  },
		  mounted() {
			  this.percentage = 0
			  let imgList = require('../../'+this.name+'/preload.json');
			  this.preloadImages(imgList);
			  
			
		  }
	}
</script>

<style>
	

</style>
