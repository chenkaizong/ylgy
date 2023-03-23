<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="action-area">
			<u-button type="primary" @click="$navTo('/pages/ylgy/ylgy')">游戏开始</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.action-area {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 200rpx;
	}

</style>
