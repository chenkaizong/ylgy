import request from '@/common/js/request'
import ENV from '@/env/env.js'

const state = {
	skin:ENV.SKIN ? ENV.SKIN:'default'
}

const mutations = {
	setSkin: (state, skin) => {
		state.skin = skin;
	},
	
}

const actions = {
	
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
