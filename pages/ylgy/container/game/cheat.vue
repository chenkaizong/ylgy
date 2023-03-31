<template>
	<view class="cheat">
		
		<view class="item" @click="moveOutHandle" :class="{disabled:moveOutCount==2}">
			<view v-if="moveOutCount==0" class="tips">+</view>
			<view v-if="moveOutCount==1" class="tips">1</view>
			<CheatButton class="button"></CheatButton>
			<MoveOut class="png" :width="8"></MoveOut>
		</view>
		
		<view class="item" @click="moveBackHandle" :class="{disabled:moveBackCount==2}">
			<view v-if="moveBackCount==0" class="tips">+</view>
			<view v-if="moveBackCount==1" class="tips">1</view>
			<CheatButton class="button"></CheatButton>
			<MoveBack class="png" :width="8"></MoveBack>
		</view>

		<view class="item" @click="randMapHandle" :class="{disabled:randMapCount==2}">
			<view v-if="randMapCount==0" class="tips">+</view>
			<view v-if="randMapCount==1" class="tips">1</view>
			<CheatButton class="button"></CheatButton>
			<RandMap :width="8" class="png"></RandMap>
		</view>
		

	</view>
</template>

<script>
	import CheatButton from "../png/CheatButton.vue"
	import MoveBack from "../png/MoveBack.vue"
	import RandMap from "../png/RandMap.vue"
	import MoveOut from "../png/MoveOut.vue"
	
	export default{
		name:"cheat",
		components:{MoveBack,RandMap,MoveOut,CheatButton},
		data(){
			return {
				moveOutCount:0,
				moveBackCount:0,
				randMapCount:0
			}
			
		},
		methods:{
			moveOutHandle(){
				if(this.moveOutCount==0){
					this.$util.alert('分享加次数')
					this.moveOutCount++
				}else if(this.moveOutCount==1){
					console.log("使用次数")	
					console.log(this.$emit('onMoveOut'),null,(res)=>{
						res && this.moveOutCount++
					})
				}

			},
			moveBackHandle(){
				if(this.moveBackCount==0){
					this.$util.alert('分享加次数')
					this.moveBackCount++
				}else if(this.moveBackCount==1){
					console.log("使用次数")
					console.log(this.$emit('onMoveBack'),null,(res)=>{
						res && this.moveBackCount++
					})
				}
			},
			randMapHandle(){
				if(this.randMapCount==0){
					this.$util.alert('分享加次数')
					this.randMapCount++
				}else if(this.randMapCount==1){
					console.log("使用次数")
					console.log(this.$emit('onRandMap'),null,(res)=>{
						res && this.randMapCount++
					})
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cheat {
		width: 90vw;
		height: 13vw;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.disabled{
		filter: grayscale(100%);
	}
	

	.item{
		position: relative;
		width: 15.8vw;
		height: 12.7vw;
		margin:  0 3vw;
		
		.tips{
			background-color: black;
			color: white;
			border-radius:50% ;
			width: 5vw;
			height: 5vw;
			right: -1vw;
			top: -1vw;
			position: absolute;
			z-index: 10;
			font-weight: bolder;
			font-size: 4vw;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 1;
			box-shadow: -0.3vw 0.6vw grey;
		}
		
		
		
		.button{
			position: absolute;
			left: 0;
			top: 0;
		}
		.png{
			position: absolute;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			margin: auto;
		}
		
		
	}
	
</style>