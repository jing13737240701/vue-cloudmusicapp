<template>
	<div class="player">
		<!-- 头部 -->
		<div class="player-top">
			<div class="return">&lt;</div>
			<div class="music-intro">
				<p class="music-title">七月上</p>
				<p class="name">jam</p>
			</div>
		</div>
		<div class="play-content">
			<!-- 背景图 -->
			<div class="banner-img">
				<div :class="playing?stickPlay:stickPause" class="stick"></div>
				<div class="circle-music" :class="{'circle-play':playing}"></div>
				<img src="../../../assets/hot.jpg" alt="封面" class="cover-img" :class="{'circle-play':playing}">
			</div>
			<!-- 歌词 -->
			<div class="music-lyrics">		
			</div>
			<!-- 音乐控件 -->
			<div class="control">
				<div class="control01">
					<img src="" alt="收藏" class="collection">
					<img src="" alt="下载" class="download">
					<img src="" alt="评论" class="component">
					<img src="" alt="其他" class="rest">
				</div>
				<div class="music-control"></div>
				<div class="bottom-control">
					<div class="play-type">
						<img src="" alt="列表循环" class="list-play">
						<img src="" alt="随机播放" class="random-play" v-show="false">
						<img src="" alt="单曲循环" class="single-play" v-show="false">
					</div>	
					<div class="prev"></div>
					<div class="play" v-bind:class="isplay?playIcon:pauseIcon" @click="playStatius"></div>
					<div class="next"></div>
					<div class="paly-list" @click="showMusicList"></div>
				</div>
			</div>
		</div>
		<transition name="fold">
			<MusicList v-show="listshow"></MusicList>
		</transition>
		
		<transition name="fade">
			<div class="list-mark" v-show="listshow"></div>
		</transition>
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import MusicList from '../musicList/MusicList'
	export default{
		data(){
			return{
				playIcon:'play-icon',
				pauseIcon:'pause-icon',
				stickPlay:'stick-play',
				stickPause:'stick-pause',
				listshow:false
			}
		},
		mounted(){
			console.log(this.isplay);
		},
		computed:{
			...mapGetters([
				'playing',
				'isplay',
				'musicList'
				])
		},
		components:{
			MusicList
		},
		methods:{
			...mapMutations([
					'play',
					'pause'
				]),
			showMusicList(){
				this.listshow=true;
				if(this.musicList.length>0){
					this.listshow=true;
				}
			},
			playStatius(){
				if(this.playing){
					document.getElementById('audioplay').pause();
					this.$store.commit('pause');
					
				}else{
					document.getElementById('audioplay').play();
					this.$store.commit('play');
					
				}
			}

		}
	}
</script>
<style lang="stylus" scoped>
	@-webkit-keyframes rotating{
	  0% { -webkit-transform:rotate(0deg); }
	  100% { -webkit-transform:rotate(360deg); }
	}
	@keyframes rotating {
	  0% { transform: rotate(0deg);}
	  100% { transform: rotate(360deg);}
	}
	.fold-enter-active, .fold-leave-active {
		transition: all 0.5s
		transform: translate3d(0, -100%, 0)
  	}
  	.fold-enter, .fold-leave-active {
  		transform: translate3d(0, 100%, 0)
  	}
  	.fade-enter-active, .fold-leave-active {
		transition: all 0.5s
		opacity: 1
		background: rgba(7, 17, 27, 0.6)
  	}
  	.fade-enter, .fold-leave-active {
  		opacity: 0
  		background: rgba(7, 17, 27, 0)
  	}
	.player
		z-index:600
		width:100%
		height:100%
		background:rgba(73,61,36,1)
		color:#fff
		position:fixed
		top:0
		bottom:0
		.player-top
			display:flex
			align-items:center
			height:60px
			border-bottom:1px solid #7b6e5b
			background:rgba(73,61,36,1)
			z-index:30
			.return
				flex:1 0 15%
				font-size:20px
				color:#fff
				text-align:center
			.music-intro
				flex:1 0 85%
				.music-title
					font-size:14px
					color:#fff
					line-height:30px
				.name
					font-size:12px
					color:#aba398
		.play-content
			width:100%
			height:100%
			
			.banner-img

				width:100%
				height:60%
				display:flex
				align-items:center
				justify-content:center
				position:relative
			
				.stick
					width:25%
					height:35%
					background:url('./stick_bg.png') no-repeat 
					background-size:75%
					position:absolute
					top:0
					left:50%
					z-index:10
					-webkit-transition: all 300ms ease-in
					transition: all 300ms ease-in
					-webkit-transform-origin: left top
					transform-origin: left top
					-webkit-transform: rotate(-30deg)
					transform: rotate(-30deg)

				.stick-play
					-webkit-transform: rotate(0deg)
					transform: rotate(0deg)
				.circle-music
					width:80%
					height:80%
					background:url('./cd_wrapper.png') no-repeat center
					background-size:100%
				.circle-play	
					 -webkit-animation: rotating 10s  linear .3s infinite;
					 animation: rotating 10s linear .3s infinite;
				.cover-img
					position:absolute
					border-radius:50%
					width:55%
					height:50%
			.music-lyrics
				width:80%
				height:70%
				margin:0 auto
				font-size:12px
				letter-spacing:2px
				line-height:15px
				text-align:center
				overflow:hidden
				display:none
			.control
				width:100%
				height:40%
				display:flex
				flex-direction:column
				.control01
					display:flex
					flex-direction:row
					align-items:center
					justify-content:center
					
					img
						padding:0 5%
				.music-control
					width:80%
					height:20%
				.bottom-control
					width:90%
					height:30%
					margin:0 auto
					display:flex
					flex-direction:row
					align-items:center
					justify-content:space-around
					
					.prev
						width:50px
						height:50px
						background:url('./prev.png') no-repeat center
						background-size:cover
					.play-icon
						width:60px
						height:60px
						background:url('./play.png') no-repeat center
						background-size:cover
					.pause-icon
						width:60px
						height:60px
						background:url('./pause.png') no-repeat center
						background-size:cover
					.next
						width:50px
						height:50px
						background:url('./next.png') no-repeat center
						background-size:115%
					.paly-list
						width:50px
						height:50px
						background:url('./list.png') no-repeat center
						background-size:cover
		.list-mark
			position: fixed
			top: 0
			left: 0
			width: 100%
			height: 100%
			z-index: 40
			backdrop-filter: blur(10px)
</style>