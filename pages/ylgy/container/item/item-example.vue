<template>
	<view>
		<Png :value="item" v-for="item in [0,1,2,3,4,5,6,7,8,9,10,11,12]"></Png>

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