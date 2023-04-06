<template>
	<view class="grass">
		<Grass1 :width="6" class="animate position1"></Grass1>
		<Grass5 :width="9" class="animate position2"></Grass5>
		<Grass1 :width="6" class="animate position3"></Grass1>
		<Grass5 :width="9" class="animate position4"></Grass5>
		<Grass1 :width="6" class="animate position5"></Grass1>
		<Grass5 :width="9" class="animate position6"></Grass5>
		<Grass1 :width="6" class="animate position7"></Grass1>
		<Grass5 :width="9" class="animate position8"></Grass5>
		<Grass5 :width="9" class="animate position9"></Grass5>
		<Grass1 :width="6" class="animate position10"></Grass1>
	</view>
</template>

<script>
	import Grass1 from "../png/Grass1.vue"
	import Grass5 from "../png/Grass5.vue"
	
	
	export default{
		name:"grass-background",
		components:{Grass1,Grass5},
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
	
	.grass{
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