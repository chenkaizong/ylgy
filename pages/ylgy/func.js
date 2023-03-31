// 精度是 11，正好1/64，一个图片占用 8*8， 8个图片平铺占用整个地图
export const ylgyOption ={
	mapX:64,
	mapY:64,
	itemX:8,
	precision:1.4, //一个点显示长度
}
ylgyOption.itemWidth = ylgyOption.itemX*ylgyOption.precision
ylgyOption.mapWidth = ylgyOption.mapX*ylgyOption.precision

console.log(ylgyOption)

function array_unshift(arr,val){
	if(typeof(arr)=='undefined'){
		return [val]
	}else{
		arr.unshift(val)
		return arr;
	}
}
//随机要显示的方块
function gameRand(json,level){
	let count=0;
	for(let i = 0; i<json.length; i++) {
		for(let j = 0; j<json[i].length; j++) {
			count++;
		}
	}
	if(count%3){
		console.error('不能整除3，失败')
	}
	
	let arr = Array.from({length:count/3}, v=> Math.floor(Math.random()*(parseInt(level)+2))+1); //随机出现的元素
	
	
	let res = [...arr,...arr,...arr]; //合并
	
	return res.sort(()=>{ //打乱
		return 0.5 - Math.random()
	})
	
}
// 随机地图
export const  randMap = (level) => {
	let num = Math.ceil(Math.random() * level*3) *3 // 确定个数
	let json = [[]]
	for(let i=0;i<num;i++){
		json[0].push([ Math.floor(Math.random()*15),Math.floor(Math.random()*15) ])
	}
	return json
}

//已知视图堆栈，起止位置，插入堆栈,第index张图

export const unShiftViewStack = (view_stack,pointX,pointY,index) =>{
	for(let x=0;x<8;x++){
		for(let y=0;y<8;y++){
			view_stack[(x+pointX)+'_'+(pointY+y)] = array_unshift(view_stack[(x+pointX)+'_'+(pointY+y)],index)
		}
	}
	return view_stack;
}

//地图64*64
export const gameMap = (name,level=1,map)=>{
	
	let arr=[]
	let view_stack={} // 视图堆栈,满足上面有四个点位，就显示
	let rand_arr = gameRand(map,level);
	for(let i = 0; i<map.length; i++){
		for(let j = 0; j<map[i].length; j++){
			let num = rand_arr.shift()
			let x = map[i][j][0];
			let y = map[i][j][1]
			let left = x * ylgyOption.precision + 'vw'
			let top = y * ylgyOption.precision + 'vw'
			let index = arr.length
			let level_index = i;
			
			arr.push({index,num,level:level_index,style:{left,top},isTop:false,isclicked:false,isUsed:false,point:{x,y}})

			view_stack = unShiftViewStack(view_stack,x,y,index)
			
		}
	}
	
	
	
	return {
		list:arr,
		view_stack
	}
}

export default {
	randMap,
	gameMap,
	ylgyOption,
	unShiftViewStack,
}