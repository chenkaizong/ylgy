import request from '@/common/js/request'

const state = {
	systemInfo: null,
	redirect: '',
	parent_user_id: '',
	shares: {},
	storeConfig:{
		mobile_bottom_logo:'',
		mobile_login_logo:'',
		mobile_logo:'',
		service_tel:'',
		service_url:'',
		can_distribut:'',
		h5_download_switch:'',
		h5_download_image:'',
		android_download:'',
		ios_download:'',
	},
}

const mutations = {
	setStoreConfig: (state, storeConfig) => {
		state.storeConfig = storeConfig;
	},
	setSystemInfo: (state, systemInfo) => {
		state.systemInfo = systemInfo;
	},
	setRedirect: (state, redirect) => {
		state.redirect = redirect;
	},
	setParentUserId: (state, parent_user_id) => {
		state.parent_user_id = parent_user_id;
	},
	setShares: (state, shares) => {
		state.shares = shares;
	},
}

const actions = {
	setStoreConfig({
		state,
		commit
	}) {
		request({
			url: 'config/get_store_config'
		}).then((res) => {
			commit('setStoreConfig', res.data);
		});
	},
	setSystemInfo({
		state,
		commit
	}, systemInfo) {
		commit('setSystemInfo', systemInfo);
	},
	setRedirect({
		state,
		commit
	}, redirect) {
		commit('setRedirect', redirect);
	},
	setParentUserId({
		state,
		commit
	}, parent_user_id) {
		commit('setParentUserId', parent_user_id);
	},
	setShares({
		state,
		commit
	}, shares) {
		commit('setShares', shares);
	},
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
