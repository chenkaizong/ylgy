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

//地图16*16
export const gameMap = (name,level=1,map)=>{
	
	let arr=[]
	let view_stack={} // 视图堆栈,满足上面有四个点位，就显示
	let rand_arr = gameRand(map,level);
	for(let i = 0; i<map.length; i++){
		for(let j = 0; j<map[i].length; j++){
			let num = rand_arr.shift()
			let x = map[i][j][0];
			let y = map[i][j][1]
			let left = x * 46 + 'rpx'
			let top = y * 46 + 'rpx'
			let index = arr.length
			let level_index = i;
			
			arr.push({index,num,level:level_index,style:{left,top},istop:false,isclicked:false,isUsed:false})
			
			view_stack[x+'_'+y] = array_unshift(view_stack[x+'_'+y],index)
			view_stack[(x+1)+'_'+y] = array_unshift(view_stack[(x+1)+'_'+y],index)
			view_stack[x+'_'+(y+1)] = array_unshift(view_stack[x+'_'+(y+1)],index)
			view_stack[(x+1)+'_'+(y+1)] = array_unshift(view_stack[(x+1)+'_'+(y+1)],index)
		}
	}
	
	
	
	return {
		list:arr,
		view_stack
	}
}

export default {
	randMap,
	gameMap
}