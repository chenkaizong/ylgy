<template>
	<view class="game">
		<div class="middleBox">
			<!-- <GamePointBackground></GamePointBackground> -->
			<view class="unSelectedBox">
			
				<item v-for="(item,index) in  list" 
				:key="index"
				:num="item.num"
				:ref="'item'+index"
				:isTop="item.isTop"
				:zIndex="item.zIndex"
				@click.native="pick(index)"
				:style="item.style">
				
				</item>
			</view>
		</div>
		<view class="bottom">
			<Fence></Fence>
			<view class="selectedBar">
				
			</view>
			<Cheat @onMoveOut="onMoveOut" @onMoveBack="onMoveBack" @onRandMap="onRandMap"></Cheat>
		</view>
		
		
	</view>
</template>

<script>
	import Item from "../item/item.vue"
	import Cheat from "./cheat.vue"
	import Fence from "./fence.vue"
	import GamePointBackground from "./GamePointBackground.vue"
	import Func from "../../func.js"
	import zIndex from "../../../../uni_modules/uview-ui/libs/config/zIndex"
	
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
			GamePointBackground,
		},
		data() {
			return {
				// 一维存放每张图片信息
				list:[],
				// 地图每个点的堆叠情况，用于计算图片是否被盖住
				view_stack:{},
				// 选中的每个元素的位置
				SelectedStyles:[],
				// 选中的图片的列表
				SelectedList:[],
				// 是否结束
				isFinished:false,
				
				// 最后一个点击的元素和位置
				lastSelected:{},
				// 使用金手指返回三个的位置
				CheatStyles:[],
				
				
				
			}
		},
		beforeMount() {
			this.initList(this.params.level,this.params.map);
			this.initBottomStyles();
		},

		mounted() {
			
			
		},
		methods: {
			//初始化
			initList(level,map){
				let res = Func.gameMap('number',level,map)
				this.list = res.list
				this.view_stack = res.view_stack
				this.checkViewStack()
				// console.log(this.list)
			},
			//计算好选中的图片该去的位置
			initBottomStyles(){
				let screenHeight = this.$util.getHeight()
				// 位置 = 屏幕高度-头部高度-游戏地图高度-地图margin - 底部高度
				let gameDistance =screenHeight/2+Func.ylgyOption.mapWidth/2-20
				
				let styles = []
				for(let i=0;i<8;i++){
					styles[i] = {
						left:(Func.ylgyOption.itemWidth*i)+'vw',
						top:gameDistance +"vw"
					}
				}
				this.SelectedStyles = styles;
				
				// 金手指位置
				let cheatDistance =screenHeight/2+Func.ylgyOption.mapWidth/2-45
				let cheatStyles = []
				for(let i=0;i<3;i++){
					cheatStyles[i] = {
						left:(Func.ylgyOption.itemWidth*(i+1.3)*1.5)+'vw',
						top:cheatDistance +"vw"
					}
				}
				this.CheatStyles = cheatStyles;
				
			},
			// 计算堆叠情况
			checkViewStack(){
				// console.log(JSON.stringify(this.view_stack));
				let check_stack = {}
				for(let i in this.view_stack){
					let val = this.view_stack[i][0]
					if(typeof(val)!='undefined'){
						check_stack[val] = check_stack[val]?check_stack[val]+1:1
						if(check_stack[val] >= 64 && !this.list[val].isTop){
							// console.log(val)
							this.$set(this.list[val],'isTop',true)
						}
					}
				}
			},
			// 某个元素移除后堆叠情况修改
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
				// console.log(JSON.stringify(this.view_stack))
			},
			
			pick(index){
				if(this.list[index].isclicked || !this.list[index].isTop){
					return false
				}
				// console.log(JSON.stringify(this.list[index]))
				this.lastSelected = this.$util.cloneDeep(this.list[index])
				// console.log(JSON.stringify(this.list),JSON.stringify(this.lastSelected))
				
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
								
								if(!this.list[i].isclicked){
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

			//移出三个到额外的位置
			onMoveOut:function(){
				console.log(Func)
				if(this.SelectedList.length<3){
					this.$util.alert("要满足三个哦")
					return 
				}
				let  max = Func.maxZIndex(this.list);
				for(let i=2;i>=0;i--){
					let item = this.SelectedList.pop();
					item.isclicked = false;
					this.$set(this.list[item.index],'zIndex',max+i)
					this.$set(this.list[item.index],'style',this.CheatStyles[i])
					Func.unShiftViewStack(this.view_stack,i*20,65,item["index"])
					
					console.log(this.list[item.index])
				}
				
				console.log(Func)
				this.list.filter((item)=>{
					return !item.isclicked && item.isTop
				}).forEach((item)=>{
					this.$set(this.list[item.index],"isTop",false)
				})
				
				this.checkViewStack()
				
			},
			// 返回上一步点击
			onMoveBack(){
				console.log(JSON.stringify(this.lastSelected))
				if(this.lastSelected.index){
					let pos = this.SelectedList.length-1
					let SelectedList = []
					this.SelectedList.forEach((item,index)=>{
						if(item.index == this.lastSelected.index){
							pos = index
						}
					})
					for(let i=0;i<this.SelectedList.length;i++){
						let move_index = i - 1;
						if(i>pos){
							this.$set(this.SelectedList[i],'style',this.SelectedStyles[move_index])
							SelectedList[move_index] = this.SelectedList[i]
						}else if(i < pos){
							SelectedList[i] = this.SelectedList[i]
						}
					}
					this.SelectedList = SelectedList
					
					
					
					this.$set(this.list,this.lastSelected["index"],this.lastSelected)
					
					Func.unShiftViewStack(this.view_stack,this.lastSelected.point.x,this.lastSelected.point.y,this.lastSelected["index"])
					this.lastSelected = {};
					this.list.filter((item)=>{
						!item.isclicked && item.isTop && this.$set(this.list[item.index],"isTop",false)
					})
					this.checkViewStack()
				}else{
					this.$util.alert("没有可以退回的")
				}
				
				return true;
			},
			// 随机所有图片
			onRandMap(){
				let newInfoList = this.list.filter((item)=>{
					return !item.isclicked
				}).map((item)=>{
					return {
						style:item.style,
						point:item.point,
					}
				})
				newInfoList = this.$util.shuffleArray(newInfoList)
				let view_stack = [];
				this.list.forEach((item)=>{
					if(!item.isclicked){
						let info = newInfoList.pop()
						item.style = info.style
						item.point = info.point
						item.isTop = false
						Func.unShiftViewStack(view_stack,info.point.x,info.point.y,item.index)
					}
				})
				this.view_stack = view_stack
				this.checkViewStack()
				
				return true;
				
			},

		}
	}
</script>

<style scoped lang="scss">
	@import "../../ylgy.scss";
	
	.game {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		.middleBox{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			height: 100%;
			
			.unSelectedBox{
				width: $ylgy-map-width;
				height: $ylgy-map-width;
				// border: 1px solid black;
				position: relative;
				margin: auto;
			}
		}
		
		.bottom {
			height: 45vw;
			overflow: hidden;
			width: 100%;
			flex-shrink: 0;
			
			.selectedBar{
				height: $ylgy-item-width;
				width: $ylgy-map-width;
				// border: 1px solid black;
				margin: 3vw auto 7vw;
				position: relative;
				z-index: 10;
			}
			
		}
		
	}

</style>
