<template>
	<view>
		<Png :value="item" v-for="item in 12" :key="item"></Png>

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