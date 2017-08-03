import api from '../api.js'

const state={
	isMusicDescriptionShow:false,    //歌单描述是否隐藏
	playing:true ,                     //播放与暂停
	isplay:true,                      //播放控件的播放与暂停
	music:{                           //音乐
		'id':0,
		'url':'http://m10.music.126.net/20170731154902/067fd42e003dd71cadd7cd1d32ffcb51/ymusic/229f/7af7/5b22/67d93f9a38fe2958e06b7517e816dfe5.mp3',
		'musicName':'歌曲名称',
		'singer':'演唱者',
		'portraitPic':'../assets/player-bar.png',
		'lyric':'歌词'
	},
	musicList:[]                     //添加所有的音乐
	
}

const getters={
	isMusicDescriptionShow:state => state.isMusicDescriptionShow,
	playing:state => state.playing,
	isplay:state => state.isplay,
	music:state => state.music,
	musicList:state => state.musicList

}


const mutations={
	MusicDescriptionShow(state,flag){        //歌单的描述显示与隐藏
		state.isMusicDescriptionShow=flag;
	},
	play(state){                             //播放
		state.playing=true;
		state.isplay=true;
		
	},
	pause(state){
		state.playing=false;
		state.isplay=false;
		
	},
	addAllMusic(state,song){
		state.musicList=song;
	},
	setMusicUrlId(state,url,id){
		state.music.url=url;
		state.music.id=id;
	}
}

const actions={
	getMusic({commit},id){
		api.getMusicUrl(id).then((response)=>{
			console.log(response);
			let url=response.data.data[0].url;
			commit('setMusicUrlId',url,id);
		}).catch((err)=>{
			console.log("获取歌曲失败"+err);
		})
	}
}

export default{
	state,
	getters,
	mutations,
	actions
}





