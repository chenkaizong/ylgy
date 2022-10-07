import cache from '@/common/js/cache'
import request from '@/common/js/request'
import {
	isEmpty
} from '@/common/js/util'

const state = {
	token: '',
	userInfo: null,
	cartNum: 0,
}

const mutations = {
	setToken: (state, token) => {
		state.token = token;
		cache.put('token', token);
	},
	removeToken: (state) => {
		state.token = '';
		state.userInfo = null;
		cache.remove('token');
	},
	setUserInfo: (state, userInfo) => {
		state.userInfo = userInfo;
	},
	setCartNum: (state, cartNum) => {
		state.cartNum = cartNum;
	}
}

const actions = {
	setToken({
		state,
		commit
	}, token) {
		commit('setToken', token);
		this.dispatch('user/refreshUserInfo')
	},
	removeToken({
		state,
		commit
	}) {
		commit('removeToken');
	},
	refreshUserInfo({
		state,
		commit
	}) {
		request({
			url: 'auth/get_user_info'
		}).then((res) => {
			if (isEmpty(res.data)) {
				commit('removeToken');
			} else {
				commit('setUserInfo', res.data.userInfo);
				this.dispatch('user/setCartNum', res.data.cartGoodstCount)
			}
		});
	},
	setCartNum({
		state,
		commit
	}, cartGoodstCount) {
		commit('setCartNum', cartGoodstCount);
		if(cartGoodstCount > 0){
			uni.setTabBarBadge({
				index: 2,
				text: cartGoodstCount + ''
			});
		}else{
			uni.removeTabBarBadge({
				index: 2,
			});
		}
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
