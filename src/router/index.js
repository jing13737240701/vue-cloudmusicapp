import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/index',  //  引导页
	 	component (resolve) {
	    	require.ensure(['../Index/Index'], () => {
	      	resolve(require('../Index/Index'));
	    	});
		},
		children:[
			{
				path: '/index/recommend',                                    //个性推荐
				component (resolve) {
			    	require.ensure(['../Index/recommend/Recommend'], () => {
			      	resolve(require('../Index/recommend/Recommend'));
			    	});
				}
			},
			{
				path: '/index/songList',                                    //歌单
				component (resolve) {
			    	require.ensure(['../Index/songList/SongList'], () => {
			      	resolve(require('../Index/songList/SongList'));
			    	});
				}
			},
			{
				path: '/index/hostStation',                                   //主播电台
				component (resolve) {
			    	require.ensure(['../Index/hostStation/HostStation'], () => {
			      	resolve(require('../Index/hostStation/HostStation'));
			    	});
				}
			},
			{
				path: '/index/rankingList',                                    //排行榜
				component (resolve) {
			    	require.ensure(['../Index/rankingList/RankingList'], () => {
			      	resolve(require('../Index/rankingList/RankingList'));
			    	});
				}
			}
			
		]
	},
	{
		path:'/songDetailList/:id',                                         //获取歌单详情页
		component(resolve){
			require.ensure(['../components/detail/SongDetailList'],()=>{
				resolve(require('../components/detail/SongDetailList'))
			})
		}
	},
	{
		path:'/player/:id',
		name:'player',
		component(resolve){
			require.ensure(['../components/widget/player/Player'],()=>{
				resolve(require('../components/widget/player/Player'))
			})
		}
	},
 	{
 	 path: '*', redirect: '/index/recommend' //  url错误重回定向

	}
  ]
})
