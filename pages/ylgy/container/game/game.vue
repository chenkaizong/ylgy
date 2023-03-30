<template>
	<view class="">
		<view class="unSelectedBox">
			<view class="backgroundBox">
				<view v-for="list_num in ylgyOption.mapX" class="backgroundList" :key="list_num">
					<view v-for="item_num in ylgyOption.mapY" class="backgroundItem" :key="item_num">
						
					</view>
				</view>
			</view>
			<!-- <item v-for="(item,index) in  list" 
			:key="index"
			:num="item.num"
			:ref="'item'+index"
			:isTop="item.isTop"
			@click.native="pick(index)"
			:style="item.style">
			</item> -->
		</view>
		<view class="bottom" :style="BottomStyle">
		<!-- 	<Fence></Fence>
			<view class="selectedBar">
				
			</view>
			<Cheat @onMoveOut="" @onMoveBack="" @onRandMap=""></Cheat> -->
		</view>
		
		
	</view>
</template>

<script>
	import Item from "../item/item.vue"
	import Cheat from "./cheat.vue"
	import Fence from "./fence.vue"
	import Func from "../../func.js"
	
	export default {
		props:{
			params:{
				type:Object,
				default:{level:1,map:[]},
			}
			
		},
		components:{
			Item,
			Cheat,
			Fence,
		},
		data() {
			return {
				list:[],
				view_stack:{},
				// 选中的每个元素位置
				SelectedStyles:[],
				// 选中的index 列表
				SelectedList:[],
				
				isFinished:false,
				ylgyOption:Func.ylgyOption,
				// screenHeight屏幕高度， gameBottom 底部位置
				distance:{screenHeight:170,gameBottom:150},
				BottomStyle:{top:"145vw"}
				
			}
		},
		beforeMount() {
			this.initList(this.params.level,this.params.map);
			this.initBottom();
		},

		mounted() {
			

			
		},
		methods: {
			initList(level,map){
				let res = Func.gameMap('number',level,map)
				this.list = res.list
				this.view_stack = res.view_stack
				
				console.log(res)
				this.checkViewStack()
				
			},
			initBottom(){
				let screenHeight = this.$util.getHeight()
				// 位置 = 屏幕高度-头部高度-游戏地图高度-地图margin - 底部高度
				let gameBottom = screenHeight - 35
				
				this.distance = {screenHeight,gameBottom}
				this.BottomStyle = {top:gameBottom+"vw"}
				
				let styles = []
				for(let i=0;i<8;i++){
					styles[i] = {
						left:(Func.ylgyOption.itemWidth*i)+'vw',
						top:(this.distance.gameBottom + 1) +"vw"
					}
				}
				this.SelectedStyles = styles;
			},
			
			checkViewStack(){
				let check_stack = {}
				for(let i in this.view_stack){
					let val = this.view_stack[i][0]
					if(typeof(val)!='undefined'){
						check_stack[val] = check_stack[val]?check_stack[val]+1:1
						if(check_stack[val] >= 64 && !this.list[val].isTop){
							console.log(val)
							this.$set(this.list[val],'isTop',true)
						}
					}
				}
			},
			
			removeViewStack(index){
				for(let i in this.view_stack){
					if(index == this.view_stack[i][0]){
						this.view_stack[i].shift()
						if(this.view_stack[i].length==0){
							delete this.view_stack[i]
						}
					}
				}
				this.checkViewStack()
				console.log(JSON.stringify(this.view_stack))
			},
			
			pick(index){
				if(this.list[index].isclicked || !this.list[index].isTop){
					return false
				}
				this.list[index].isUsed = true
				
				if(this.SelectedList.length>=8){
					this.$util.alert('失败')
					return false
				}
				this.removeViewStack(index)
				let pos = this.insertNum(index)
				this.checkResult(pos)
				
			},
			// 只需要验证它的前三个是相同的即可
			checkResult(pos){
				if(pos<2){
					return false;
				}
				if(this.SelectedList[pos].num==this.SelectedList[pos-1].num && 
				this.SelectedList[pos].num == this.SelectedList[pos-2].num
				){
					
					let index0 = this.SelectedList[pos]['index']
					let index1 = this.SelectedList[pos-1]['index']
					let index2 = this.SelectedList[pos-2]['index']
					this.SelectedList.splice(pos-2,3)
					setTimeout(()=>{
						this.$refs['item'+index0][0].destroy()
						this.$refs['item'+index1][0].destroy()
						this.$refs['item'+index2][0].destroy()
						
						for(let i = 0;i<this.SelectedList.length;i++){
							this.$set(this.SelectedList[i],'style',this.SelectedStyles[i])
						}
						
						//为空的时候验证是否结束
						if(!this.SelectedList.length){
							let finish = true;
							for(let i=0;i<this.list.length;i++){
								
								if(!this.list[i].isUsed){
									finish = false
									break;
								}
							}
							console.log(finish);
							if(finish){
								this.isFinished = finish
								this.$emit("success")
							}
							
						}
						
					},1000)
					
					
				}
			},
			//插入点击的方块，相同的放相邻位置
			insertNum(index){
				//首先查找最后的一个出现位置
				let pos = this.SelectedList.length;
				let SelectedList = []
				this.SelectedList.map((value,key)=>{
					
					if(value.num == this.list[index].num){
						pos = key+1
					}
				})
				for(let i=this.SelectedList.length;i>=0;i--){
					let move_index = i - 1;
					if(move_index>=pos){
						this.$set(this.SelectedList[move_index],'style',this.SelectedStyles[move_index+1])
						SelectedList[i] = this.SelectedList[move_index]
					}
					if(i == pos){
						SelectedList[pos] = this.list[index]
						this.$set(this.list[index],'style',this.SelectedStyles[pos])
					}else if(i < pos){
						SelectedList[i] = this.SelectedList[i]
					}
				}
				
				this.SelectedList = SelectedList
				this.list[index].isclicked = true
				return pos
			},


		}
	}
</script>

<style scoped lang="scss">
	@import "../../ylgy.scss";
	
	.unSelectedBox{
		width: $ylgy-map-width;
		height: $ylgy-map-width;
		border: 1px solid black;
		position: relative;
		margin: 15vw auto;
	}
	
	.bottom {
		position: fixed;
		height: 35vw;
		border: 1px solid black;
		overflow: hidden;
		width: 100%;
	}
	
	
	.selectedBar{
		height: $ylgy-item-width;
		width: $ylgy-map-width;
		border: 1px solid black;
		margin: 3vw auto 7vw;
		position: relative;
		z-index: 10;
	}
	
	.backgroundBox {
		position: absolute;
		width: 100%;
		height: 100%;
		
		.backgroundList {
			border-collapse: collapse;
			height: $ylgy-precision;
			width: 100%;
			display: flex;
		}
		
		.backgroundItem {
			border-collapse: collapse;
			height: $ylgy-precision;
			width: $ylgy-precision;
			border: 1px solid #eee;
		}
	}

</style>
