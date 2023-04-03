import request from '@/common/js/request'

const pngSizeList = {
	bottom:{width:102.4,height:140.6}
}


export default {
	
	data(){
		return{
			
			real:{
				width:10,
				height:10,
				left:0,
				top:0,
			},
			scale:0
		}
	},
	
	computed:{
		boxStyle(){
			return {
				width: this.real.width + "vw",
				height: this.real.height + "vw",
				overflow: "hidden",
				position: "absolute",
			}
		},
		imageStyle(){
			return {
				width: this.parentImage.width + "vw",
				height: this.parentImage.height + "vw",
				position: "absolute",
				left: this.real.left + "vw",
				top: this.real.top+"vw",
				transform:"rotate("+this.degree+"deg)",
			}
		},
	},

	methods: {
		init() {
			if(!this.width && !this.height){
				this.scale = {width:1,height:1}
			}else if(this.width && this.height) {
				this.scale = {width:this.width/this.pieceWidth,height:this.height/this.pieceHeight}
				
			}else if(this.width){
				this.scale = {width:this.width/this.pieceWidth,height:this.width/this.pieceWidth}

			}else if(this.height){
				this.scale = {width:this.height/this.pieceHeight,height:this.height/this.pieceHeight}
				
			}
			
			this.real ={
				width:this.pieceWidth * this.scale.width,
				height: this.pieceHeight  * this.scale.height,
				left:this.positionLeft * this.scale.width,
				top:this.positionTop * this.scale.height,
			}
			
			// console.log(this.real,this.scale);
			this.initParentImage()
		},
		
		initParentImage(){
			let parent =  this.originImage;
			this.parentImage = {
				width: parent.width * this.scale.width,
				height: parent.height * this.scale.height,
			}
			
			
		}
		
		
	},
}
