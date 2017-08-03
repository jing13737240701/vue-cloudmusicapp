<template>
	<div class="song-detail-list">
		<div class="top-fixed">
			<span class="detail-return">&lt;</span>
			<div class="detail-top-right">
				<p class="title">歌单</p>
				<p class="copywriter" >编辑推荐</p>
			</div>
		</div>
		<div class="detail-cover">
			<div class="cover-top">
				<div class="cover-img">
					<img :src="playlist.coverImgUrl" alt="" @click="jumpDescription()">
					<div class="play-count">
						<span></span>
						{{playlist.playCount}}
					</div>
				</div>
				<div class="cover-name">
					<p class="title" @click="jumpDescription()">{{playlist.name}}</p>
					<div class="creator">
						<img :src="creator.avatarUrl" alt="作者头像" class="creator-img">
						<span class="creator-nickname">{{creator.nickname}} ></span>
					</div>
				</div>
			</div>
			<!-- 收藏、评论、分享、下载部分 -->
			<ShareComponent :sharecomponent="sharecomponent"></ShareComponent>			
		</div>
		<div class="play-list">
			<PlayAll :musicNumber="musicNumber" :data="list"></PlayAll>
			<ul>
				<li v-for="(item,index) in list" :key="index">
					<MusicItem :data="item" :index="index"></MusicItem>
				</li>
			</ul>
			
		</div>
		<transition name="slide-down">
			<MusicDescription v-show="isMusicDescriptionShow" :MusicDescription="playlist" ></MusicDescription>
		</transition>
	</div>
</template>
<script>
import api from '../../api.js'
import ShareComponent from '../widget/ShareComponent'
import PlayAll from '../widget/playAll/PlayAll'
import MusicItem from '../widget/MusicItem'
import MusicDescription from '../widget/MusicDescription'
import {mapGetters} from 'vuex'
	export default{
		data(){
			return {
				playlist:{},
				creator:{},
				list:[],
				sharecomponent:[],
				musicNumber:0
				
			}
		},
		components:{
			ShareComponent,
			PlayAll,
			MusicItem,
			MusicDescription
		},
		computed:{
			...mapGetters([
				'isMusicDescriptionShow'
				])		
		},
		mounted(){
			this.getplaylistdetail();
			
		},
		methods:{
			jumpDescription(){
				this.$store.commit('MusicDescriptionShow',true);
			},
			getplaylistdetail(){
				api.getPlaylistDetail(this.$route.params.id).then((response)=>{
					this.playlist=response.data.playlist;
					this.creator=response.data.playlist.creator;
					this.list=response.data.playlist.tracks;
					response.data.playlist.subscribedCount>0?response.data.playlist.subscribedCount:'收藏';
					response.data.playlist.commentCount>0?response.data.playlist.subscribedCount:'评论';
					response.data.playlist.shareCount>0?response.data.playlist.subscribedCount:'分享';
					this.musicNumber=response.data.playlist.tracks.length;
					this.sharecomponent.push(response.data.playlist.subscribedCount,response.data.playlist.commentCount,response.data.playlist.shareCount);
					let a=parseInt(response.data.playlist.playCount);
					if(a>100000){
						this.playlist.playCount=parseInt(a/(Math.pow(10,4)))+'万';
					}
					
				}).catch((err)=>{
					console.log('歌单详情获取失败'+err);
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	

	.song-detail-list
		width:100%
		height:100%
		
		.top-fixed
			position:fixed
			width:100%
			height:50px
			z-index:20
			background-color:#000
			color:#fff
			overflow:hidden
			.detail-return
				float:left
				height:50px
				line-height:50px
				font-size:30px
				padding:0 10px
			.detail-top-right
				float:left
				.title
					line-height:20px
					font-size:14px
					margin-top:10px
				.copywriter
					font-size:12px
					color:#b0b0b1
		.detail-cover
			background-color:#000
			.cover-top
				padding:55px 15px  0 15px
				display:flex
				align-items:center
				flex-direction: row
				.cover-img
					flex: 1 0 35%
					position:relative
					img
						width:100%
						height:100%
					.play-count
						position:absolute
						top:0
						right:0
						color:#fff
						font-size:10px
				.cover-name
					flex: 1 0 65%	
					color:#fff
					padding-left:15px
					box-sizing:border-box
					.title
						font-size:15px
						line-height:20px
					.creator
						margin-top:15px
						margin-left:10px
						.creator-img
							width:30px
							height:30px
							border-radius:50%
							vertical-align:middle
							padding-right:5px
						.creator-nickname
							font-size:12px
		.play-list
			background:rgba(247,247,248,1)
					
</style>