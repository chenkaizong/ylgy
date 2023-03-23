<template>
	<view class="">
		<view class="unSelectedBox">
			<view class="backgroundBox">
				<view v-for="list_num in 16" class="backgroundList" :key="list_num">
					<view v-for="item_num in 16" class="backgroundItem" :key="item_num">
						
					</view>
				</view>
			</view>
			<item v-for="(item,index) in  list" 
			:key="index"
			:num="item.num"
			:ref="'item'+index"
			:istop="item.istop"
			@click.native="pick(index)"
			:style="item.style">
			</item>
		</view>
		<view class="selectedBar">
			
		</view>
	</view>
</template>

<script>
	import Item from "../m-item/m-item.vue"
	import Func from "../../func.js"
	
	export default {
		props:{
			params:{
				type:Object,
				default:{level:1,map:[]},
			}
			
		},
		components:{
			Item
		},
		data() {
			return {
				list:[],
				view_stack:{},
				bottomStyles:[],
				bottoms:[],
				isFinished:false,
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
				this.checkViewStack()
				
			},
			initBottom(){
				let styles = []
				for(let i=0;i<8;i++){
					styles[i] = {
						left:(92*i)+'rpx',
						top:'836rpx'
					}
				}
				this.bottomStyles = styles;
			},
			
			checkViewStack(){
				let check_stack = {}
				console.log(this.view_stack)
				for(let i in this.view_stack){
					let val = this.view_stack[i][0]
					if(typeof(val)!='undefined'){
						check_stack[val] = check_stack[val]?check_stack[val]+1:1
						if(check_stack[val] >= 4 && !this.list[val].top){
							this.$set(this.list[val],'istop',true)
						}
					}
					
				}
				console.log(check_stack);
			},
			removeViewStack(index){
				for(let i in this.view_stack){
					if(index == this.view_stack[i][0]){
						this.view_stack[i].shift()
					}
				}
				this.checkViewStack()
			},
			
			pick(index){
				if(this.list[index].isclicked || !this.list[index].istop){
					return false
				}
				this.list[index].isUsed = true
				
				if(this.bottoms.length>=8){
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
				if(this.bottoms[pos].num==this.bottoms[pos-1].num && 
				this.bottoms[pos].num == this.bottoms[pos-2].num
				){
					
					let index0 = this.bottoms[pos]['index']
					let index1 = this.bottoms[pos-1]['index']
					let index2 = this.bottoms[pos-2]['index']
					this.bottoms.splice(pos-2,3)
					setTimeout(()=>{
						this.$refs['item'+index0][0].destroy()
						this.$refs['item'+index1][0].destroy()
						this.$refs['item'+index2][0].destroy()
						
						for(let i = 0;i<this.bottoms.length;i++){
							this.$set(this.bottoms[i],'style',this.bottomStyles[i])
						}
						
						//为空的时候验证是否结束
						if(!this.bottoms.length){
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
				let pos = this.bottoms.length;
				let bottoms = []
				this.bottoms.map((value,key)=>{
					
					if(value.num == this.list[index].num){
						pos = key+1
					}
				})
				for(let i=this.bottoms.length;i>=0;i--){
					let move_index = i - 1;
					if(move_index>=pos){
						this.$set(this.bottoms[move_index],'style',this.bottomStyles[move_index+1])
						bottoms[i] = this.bottoms[move_index]
					}
					if(i == pos){
						bottoms[pos] = this.list[index]
						this.$set(this.list[index],'style',this.bottomStyles[pos])
					}else if(i < pos){
						bottoms[i] = this.bottoms[i]
					}
				}
				
				this.bottoms = bottoms
				this.list[index].isclicked = true
				return pos
			},


		}
	}
</script>

<style scoped lang="scss">

	.unSelectedBox{
		width: 736rpx;
		height: 736rpx;
		border: 1px solid black;
		position: relative;
		margin: 100rpx auto;
		
		
	}
	
	.selectedBar{
		height: 96rpx;
		width: 736rpx;
		border: 1px solid black;
		margin: 0 auto;
	}
	
	.backgroundBox {
		position: absolute;
		width: 100%;
		height: 100%;
		
		.backgroundList {
			border-collapse: collapse;
			height: 46rpx;
			width: 100%;
			display: flex;
		}
		
		.backgroundItem {
			border-collapse: collapse;
			height: 46rpx;
			width: 46rpx;
			border: 1px solid #eee;
		}
	}

</style>
