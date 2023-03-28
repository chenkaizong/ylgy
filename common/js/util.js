import store from '@/store'

let _debounceTimeout = null,
	_throttleRunning = false

/**
 * 防抖
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms
 */
export const debounce = (fn, delay = 500) => {
	clearTimeout(_debounceTimeout);
	_debounceTimeout = setTimeout(() => {
		fn();
	}, delay);
}
/**
 * 节流
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms
 */
export const throttle = (fn, delay = 500) => {
	if (_throttleRunning) {
		return;
	}
	_throttleRunning = true;
	fn();
	setTimeout(() => {
		_throttleRunning = false;
	}, delay);
}
/**
 * toast
 */
export const msg = (title = '', param = {}) => {
	if (!title) return;
	uni.showToast({
		title,
		duration: param.duration || 1500,
		mask: param.mask || false,
		icon: param.icon || 'none'
	});
}

export const alert = (msg = '') => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: '提示',
			content: msg,
			showCancel: false,
			success: (res) => {
				if (res.confirm) {
					resolve();
				}
			}
		});
	})
}

export const confirm = (msg = '') => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			title: '提示',
			content: msg,
			showCancel: true,
			success: (res) => {
				if (res.confirm) {
					resolve(true);
				} else {
					resolve(false);
				}
			}
		});
	})
}

/**
 * 检查登录
 * @return {Boolean}
 */
export const isLogin = (isNav) => {
	const token = store.getters.token;
	if (token) {
		return true;
	}
	if (isNav) {
		const pages = getCurrentPages();
		const page = (pages[pages.length - 1]);
		if (page) {
			let redirect = '/' + page.route;
			let params = [];
			for (let k in page.options) {
				params.push(k + '=' + page.options[k]);
			}
			if (params.length) {
				redirect += '?' + params.join('&');
			}
			store.dispatch('app/setRedirect', redirect);
		}
		uni.navigateTo({
			url: '/pages/auth/login'
		})
	}
	return false;
}
/**
 * 获取页面栈
 * @param {Number} preIndex为1时获取上一页
 * @return {Object}
 */
export const prePage = (preIndex = 1) => {
	const pages = getCurrentPages();

	const prePage = pages[pages.length - (preIndex + 1)];
	return prePage ? prePage.$vm : null;
}
/**
 * 格式化时间戳 Y-m-d H:i:s
 * @param {String} format Y-m-d H:i:s
 * @param {Number} timestamp 时间戳
 * @return {String}
 */
export const date = (format, timeStamp) => {

	if (('' + timeStamp).length <= 10) {
		timeStamp = +timeStamp * 1000;
	} else {
		timeStamp = +timeStamp;
	}

	let _date = new Date(timeStamp),
		Y = _date.getFullYear(),
		m = _date.getMonth() + 1,
		d = _date.getDate(),
		H = _date.getHours(),
		i = _date.getMinutes(),
		s = _date.getSeconds();

	m = m < 10 ? '0' + m : m;
	d = d < 10 ? '0' + d : d;
	H = H < 10 ? '0' + H : H;
	i = i < 10 ? '0' + i : i;
	s = s < 10 ? '0' + s : s;

	return format.replace(/[YmdHis]/g, key => {
		return {
			Y,
			m,
			d,
			H,
			i,
			s
		} [key];
	});
}
/**
 * 判断是否为空
 */
export const isEmpty = (data) => {
	if (data === null || typeof data === 'undefined') {
		return true;
	}

	if (typeof data === 'object') {
		for (const key in data) {
			return false;
		}
		return true;
	}

	if (typeof data === 'string') {
		data = data.trim();
		return data === '';
	}
	return false;
}

/**
 * 合并對象
 */
export const merge = (target) => {
	for (let i = 1, j = arguments.length; i < j; i++) {
		let source = arguments[i] || {};
		for (let prop in source) {
			if (source.hasOwnProperty(prop)) {
				let value = source[prop];
				if (value !== undefined) {
					target[prop] = value;
				}
			}
		}
	}

	return target;
}

/**
 * 判断是否在数组中
 */
export const inArray = (search, arr) => {
	if (typeof arr === 'object') {
		for (const i of arr) {
			if (i == search) {
				return true;
			}
		}
	}
	return false;
}


/**
 * 判断是否是基本数据类型
 * @param value
 */
export const isPrimitive = (value) => {
	return (typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'symbol' ||
		typeof value === 'boolean')
}

/**
 * 判断是否是一个js对象
 * @param value
 */
export const isObject = (value) => {
	return Object.prototype.toString.call(value) === "[object Object]"
}

/**
 * 深拷贝一个值
 * @param value
 */
export const cloneDeep = (value) => {

	// 记录被拷贝的值，避免循环引用的出现
	let memo = {};

	function baseClone(value) {
		let res;
		// 如果是基本数据类型，则直接返回
		if (isPrimitive(value)) {
			return value;
			// 如果是引用数据类型，我们浅拷贝一个新值来代替原来的值
		} else if (Array.isArray(value)) {
			res = [...value];
		} else if (isObject(value)) {
			res = {
				...value
			};
		}

		// 检测我们浅拷贝的这个对象的属性值有没有是引用数据类型。如果是，则递归拷贝
		Reflect.ownKeys(res).forEach(key => {
			if (typeof res[key] === "object" && res[key] !== null) {
				//此处我们用memo来记录已经被拷贝过的引用地址。以此来解决循环引用的问题
				if (memo[res[key]]) {
					res[key] = memo[res[key]];
				} else {
					memo[res[key]] = res[key];
					res[key] = baseClone(res[key])
				}
			}
		})
		return res;
	}

	return baseClone(value)
}

export const removeEmptyField = (obj) => {
	var newObj = {}
	if (typeof obj === 'string') {
		obj = JSON.parse(obj)
	}
	if (obj instanceof Array) {
		newObj = []
	}
	if (obj instanceof Object) {
		for (var attr in obj) {
			// 属性值不为'',null,undefined才加入新对象里面(去掉'',null,undefined)
			if (obj.hasOwnProperty(attr) && obj[attr] !== '' && obj[attr] !== null && obj[attr] !== undefined) {
				if (obj[attr] instanceof Object) {
					// 空数组或空对象不加入新对象(去掉[],{})
					if (JSON.stringify(obj[attr]) === '{}' || JSON.stringify(obj[attr]) === '[]') {
						continue
					}
					// 属性值为对象,则递归执行去除方法
					newObj[attr] = removeEmptyField(obj[attr])
				} else if (
					typeof obj[attr] === 'string' &&
					((obj[attr].indexOf('{') > -1 && obj[attr].indexOf('}') > -1) ||
						(obj[attr].indexOf('[') > -1 && obj[attr].indexOf(']') > -1))
				) {
					// 属性值为JSON时
					try {
						var attrObj = JSON.parse(obj[attr])
						if (attrObj instanceof Object) {
							newObj[attr] = removeEmptyField(attrObj)
						}
					} catch (e) {
						newObj[attr] = obj[attr]
					}
				} else {
					newObj[attr] = obj[attr]
				}
			}
		}
	}
	return newObj
}

export const  browser = (obj) => {
	 let u = window.navigator.userAgent
	 let versions = {
	        trident: u.indexOf('Trident') > -1, //IE内核
	        presto: u.indexOf('Presto') > -1, //opera内核
	        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
	        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
	        iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
	        iPad: u.indexOf('iPad') > -1, //是否iPad
	        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
	        weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
	        qq: u.match(/\sQQ/i) == " qq" //是否QQ
	    }
		return versions;
}

// 假设宽度为100，获取高度
export const getHeight = ()=>{
	let info = uni.getWindowInfo()
	return  Math.floor(info.screenHeight*100/info.screenWidth)
}
