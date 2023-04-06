<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="action-area">
			<u-button type="primary" @click="onClickGame">开始</u-button>
		</view>
		<view class="preload" >
			<PreLoadingImg v-if="game" :name="game" @onLoaded="afterPreLoaded"></PreLoadingImg>
		</view>
	</view>
</template>

<script>
	import PreLoadingImg from "./preLoadImg/preLoadImg.vue"
	export default {
		components:{PreLoadingImg},
		data() {
			return {
				game:""
			}
		},
		onLoad() {

		},
		methods: {
			onClickGame(){
				this.game = "ylgy"
			},
			afterPreLoaded(){
				console.log("成功")
				this.game = ""
				this.$navTo('/pages/ylgy/ylgy')
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
	}

	.action-area {
		display: flex;
		justify-content: center;
	}
	
	.preload{
		height: 30rpx;
		width: 300rpx;
	}

</style>
