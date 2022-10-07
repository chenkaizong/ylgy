import Vue from 'vue'
import {
	date
} from '@/common/js/util'
import env from '@/env/env'
import store from '@/store'


Vue.filter('date', (timeStamp, format = 'Y-m-d H:i') => {
	if (!timeStamp) return '';
	return date(format, timeStamp);
})

Vue.filter('currency', (value,symbol = true) => {
	if (!value) {
		value = '0';
	}else{
		value += '';
		if (value.match(/\./)) {
			value = value.replace(/\.?0+$/g, "");
		}
	}

	return symbol ? '¥'+value : value;
})

// 隐藏字符
Vue.filter('numberHideFormat', (value, start = 1, end = 1) => {
	if (!value) {
		return;
	} else {
		return value.substr(0, start) + "****" + value.substr(value.length - end);
	}
})

Vue.filter('static_url', (value) => {
	// return env.VUE_APP_STATIC_URL + value;
	let theme = store.getters.skin;
	let url;
	if(typeof env.VUE_APP_STATIC_URLS[theme] =='undefined'){
		url = env.VUE_APP_STATIC_URLS.default;
	}else{
		url = env.VUE_APP_STATIC_URLS[theme];
	}

	return url+value;
})
