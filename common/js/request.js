import cache from './cache'
import {
	msg,
	isLogin
} from './util'
import env from '@/env/env';
import store from '@/store'

const request = (options, showLoading = false) => {
	return new Promise((resolve, reject) => {
		const token = store.getters.token;

		options.url = env.VUE_APP_BASE_API + options.url;

		options.header = {
			Accept: 'application/json',
			token: token,
			domain: env.VUE_DOMAIN,
			...options.header
		}

		if (!options.method) {
			options.method = 'GET';
		}
		options.sslVerify = false;

		options.success = (res) => {
			const response = res.data;
			if (response.code == 401) {
				store.dispatch('user/removeToken');
				isLogin(true);
				return;
			}

			if (response.code == 404) {
				// msg(response.data);
				uni.redirectTo({
					url: '/pages/nofound/index?message=' + response.data,
				});
				return;
			}

			if (response.code == 406) {
				if (showLoading) {
					showLoading = false;
					uni.hideLoading();
				}
				// 兼容旧后端代码错误信息
				if (typeof response.data == 'object') {
					for (let key in response.data) {
						msg(response.data[key][0]);
						return;
					}
				} else {
					msg(response.data);
					return;
				}
			}
			resolve(response);
		}

		options.fail = (err) => {
			reject(err);
		}

		options.complete = () => {
			if (showLoading) {
				uni.hideLoading();
			}
		}

		if (showLoading) {
			uni.showLoading({
				mask: options.method != 'GET'
			});
		}

		uni.request(options);
	})
}

export default request;
