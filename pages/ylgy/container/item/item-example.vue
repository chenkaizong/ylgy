<template>
	<view>
		<Png :value="1"></Png>
		<Png :value="3"></Png>
		<Png :value="4"></Png>
		<Png :value="7"></Png>
	</view>
</template>

<script>
	import Png from "./png.vue"
	export default {
		components:{Png}
	}
</script>

<style lang="scss" scoped>
	
	
</style>