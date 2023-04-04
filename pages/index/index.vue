<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="action-area">
			<u-button type="primary" @click="$navTo('/pages/ylgy/ylgy')">游戏开始</u-button>
		</view>
		<view class="preload" v-if="game">
			<PreLoadingImg name="game"></PreLoadingImg>
		</view>
	</view>
</template>

<script>
	import PreLoadingImg from "./preLoadImg/preLoadImg.vue"
	export default {
		components:{PreLoadingImg},
		data() {
			return {
				game:"ylgy"
			}
		},
		onLoad() {

		},
		methods: {
			
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
		border: 1px solid black;
	}

</style>
