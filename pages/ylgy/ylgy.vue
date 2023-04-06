<template>
	<view class="pageBox">
		<GrassBackground></GrassBackground>
		<view class="content">
			<!-- <view class="header">
				<view class="iconfont icon-personal_icon_set_up" @click="$refs.setUp.open()"> </view>
				
				<view>
					<u-button type="primary" @click="randMap">随机地图</u-button>
				</view>
				<view>
					<u-button type="primary" @click="randLevel">随机难度(当前{{params.level}})</u-button>
				</view>
				
			</view> -->
			<game :key="key" :params="params"  @success="onSuccess" @fail="onFail"  />
		</view>
		<success-simple ref="setUp" :setLevel="params.level"></success-simple>
		
	</view>
</template>

<script>
	import GrassBackground from "./container/grass/grass.vue"
	import SuccessSimple from './container/success-simple/success-simple.vue'
	import Game from "./container/game/game.vue"
	import Func from "./func.js"
	
	export default {
		components:{
			SuccessSimple,
			Game,
			GrassBackground,
		},
		data() {
			return {
				key:1,
				params:{level:1,map:[]}
			}
		},
		onLoad(options) {
			let level = options.level?options.level:1
			let map = require('./json/game1.json');
			this.refreshMap(level,map)
		},
		mounted() {
			
			// this.$refs['successSimple'].open()
		},
		methods: {
			
			onSuccess(){
				if(this.params.level==1){
					let level = 9
					let map = require('./json/game2.json');
					this.refreshMap(level,map)
				}else{
					this.$util.alert('恭喜通关')
				}
			},
			onFail(){
				this.$util.alert('失败凉凉了')
			},
			randLevel(){
				let level = Math.floor(1 + Math.random() * 10)
				let map =  require('./json/game2.json');
				this.refreshMap(level,map)
			},
			randMap(){
				let map =  require('./json/game2.json');
				this.refreshMap(this.params.level,map)
			},
			refreshMap(level,map){
				this.params = {level,map}
				this.key++
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./ylgy.scss";
	.pageBox{
		position: fixed;
		height: 100%;
		width: 100vw;
		background-color: rgb(195,254,139);
		
	}
	.content{
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		position: absolute;
		z-index: 2;
		display: flex;
		flex-direction: column;
	}
	.header{
		display: flex;
		justify-content: space-between;
		height: 20vw;
		flex-shrink:0;
		// border:1px solid black;
	}

	.iconfont{
		margin: 20rpx;
		font-size: 60rpx;
	}
</style>
