import request from '@/common/js/request'

const tabs = [
	// '/pages/index/index',
	// '/pages/game/game',
];

export default {
	
	data(){
		return{
			tabClick:false,
			// #ifdef APP-PLUS
			is_app:true,
			// #endif
			// #ifdef H5
			is_app:false,
			// #endif
		}
	},
	computed:{
		skin(){
			return this.$store.getters.skin;
		}
	},
	onTabItemTap() {
		
		if(!this.tabClick){
			this.tabClick = true;
		}else{
			console.log('跳到顶部')
			this.srcollTop();
		}
		setTimeout(()=>{
			this.tabClick = false;
		},500)
		
	},
	
	methods: {
		
		$navTo(url, needLogin) {
			if (needLogin && !this.$util.isLogin(true)) {
				return;
			}

		
			if (tabs.includes(url)) {
				uni.switchTab({
					url
				});
			} else {
				console.log(url);
				
				uni.navigateTo({
					url,
					animationType:'slide-in-right',
					animationDuration:2000,
				});
			}
		},
		$redTo(url, needLogin) {
			if (needLogin && !this.$util.isLogin(true)) {
				return;
			}
			
			if (typeof url == 'object') {
				let params = [];
				for (let k in url[1]) {
					params.push(k + '=' + url[1][k]);
				}
				url = url[0] + '?' + params.join('&');
			}

			if (tabs.includes(url)) {
				uni.switchTab({
					url
				});
			} else {
				uni.redirectTo({
					url
				});
			}
		},
		$request(options) {
			return request(options, false);
		},
		$requestWithLoading(options) {
			return request(options, true);
		},
		
		srcollTop(){
			uni.pageScrollTo({
				scrollTop:0,
				duration:100,
			})
		},
		
		
	},
}
