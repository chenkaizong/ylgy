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
					// #ifdef APP-PLUS
					//直接读取包里面的图片
					resolve() 
					// 远程读取图片
					// this.$util.getImageCache(env.VUE_APP_STATIC_URL + url,resolve,reject)
					return ;
					// #endif
					uni.getImageInfo({
						src:env.VUE_APP_STATIC_URL + url,
						success:()=>{
							this.percentage = Math.floor(this.percentage+100/imageUrls.length)
							resolve()
						},
						fail:()=>reject()
					})
		        });
		      });
		
		      Promise.all(promises)
		        .then(() => {
		          this.percentage = 100;
				  setTimeout(()=>{
					  this.$emit("onLoaded")
				  },500)
				  
		        })
		        .catch((e) => {
				  console.log(e)
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
