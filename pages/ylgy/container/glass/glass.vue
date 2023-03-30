<template>
	<view class="glass">
		<Glass1 :width="6" class="animate position1"></Glass1>
		<Glass5 :width="9" class="animate position2"></Glass5>
		<Glass1 :width="6" class="animate position3"></Glass1>
		<Glass5 :width="9" class="animate position4"></Glass5>
		<Glass1 :width="6" class="animate position5"></Glass1>
		<Glass5 :width="9" class="animate position6"></Glass5>
		<Glass1 :width="6" class="animate position7"></Glass1>
		<Glass5 :width="9" class="animate position8"></Glass5>
		<Glass5 :width="9" class="animate position9"></Glass5>
		<Glass1 :width="6" class="animate position10"></Glass1>
	</view>
</template>

<script>
	import Glass1 from "../png/Glass1.vue"
	import Glass5 from "../png/Glass5.vue"
	
	
	export default{
		name:"glass-background",
		components:{Glass1,Glass5},
		data(){
			return {
				
			}
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	@keyframes music {
	  0% {transform: scaleY(1);}
	  10% {transform: scaleY(1.5);}
	  20% {transform: scaleY(1);}
	  100% {transform: scaleY(1);}
	}
	.animate{
		transform-origin: left bottom;
		animation: music .5s infinite;
		position: absolute;
	}
	
	.glass{
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
		
		.position1{
			top: 10vw;
			left: 50vw;
		}
		
		.position2{
			top: 20vw;
			left: 70vw;
			
		}
		.position3{
			top: 30vw;
			left: 20vw;
		}
		
		.position4{
			top: 50vw;
			left: 60vw;
			
		}
		.position5{
			top: 60vw;
			left: 70vw;
		}
		
		.position6{
			top: 70vw;
			left: 30vw;
			
		}
		.position7{
			top: 80vw;
			left: 40vw;
		}
		
		.position8{
			bottom: 30vw;
			left: 20vw;
			
		}
		
		.position9{
			bottom: 40vw;
			left: 80vw;
			
		}
		.position10{
			bottom: 50vw;
			left: 40vw;
			
		}
		
	}
</style>