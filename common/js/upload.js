import cache from './cache'
import {
	msg,
	isLogin
} from './util'
import env from '@/env/env';
import store from '@/store'

const upload = (options, showLoading = true) => {
	return new Promise((resolve, reject) => {
		const token = store.getters.token;

		options.url = env.VUE_APP_BASE_API + options.url;

		options.header = {
			Accept: 'application/json',
			token: token,
			domain: env.VUE_DOMAIN,
			...options.header
		}

		options.success = (res) => {
			const data = JSON.parse(res.data);
			if (data.code == 401) {
				store.commit('/user/removeToken');
				isLogin(true);
				return;
			}

			if (data.code == 406) {
				msg(data.data);
				return;
			}
			resolve(data);
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
			uni.showLoading();
		}

		uni.uploadFile(options);
	})
}

export default upload;