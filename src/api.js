import axios from 'axios';
export default{
	getBanner(){                           //轮播图
		return axios.get('apiv1/banner');
	},
	getPersonalized(){                     //获取推荐歌单
		return axios.get('apiv1/personalized');
	},
	getNewMusic(){                           //获取最新音乐
		return axios.get('apiv1/personalized/newsong')
	},
	getReommendMv(){                        //获取推荐mv
		return axios.get('apiv1/personalized/mv')
	},
	getAnchorStation(){                     //获取主播电台
		return axios.get('apiv1/personalized/djprogram')
	},
	getPrivatecontent(){                    //获取独家放送
		return axios.get('apiv1/personalized/privatecontent')
	},
	getPlaylistDetail(id){                 //获取歌单详情
		return axios.get('apiv1/playlist/detail',{
			params:{
				id:id
			}
		})
	},
	getMusicUrl(id){
		return axios.get('apiv1/music/url',{
			params:{
				id:id
			}
		})
	}
}