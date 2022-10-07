const getters = {
	token: state => state.user.token,
	userInfo: state => state.user.userInfo,
	cartNum: state => state.user.cartNum,
	storeConfig: state => state.app.storeConfig,
	systemInfo: state => state.app.systemInfo,
	redirect: state => state.app.redirect,
	parent_user_id: state => state.app.parent_user_id,
	shares: state => state.app.shares,
	skin: state => state.skin.skin,
}
export default getters
