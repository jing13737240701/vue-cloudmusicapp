<template>
	<div class="footer">
		<div class="left">
			<img src="../../assets/hot.jpg" alt="">
			<div class="name">
				<p class="title">cccc</p>
				<p class="description">ffff</p>
			</div>
		</div>
		<!-- 播放、列表 -->
		<div class="right">
			<div class="play">
				<i v-bind:class="isplay?playIcon:pauseIcon" @click="playStatius"></i>
			</div>
			<div class="play-all">
				<img src="./musiclist.png" alt="">
			</div>
		</div>
		<!-- 隐藏的audio -->
		<audio :src="music.url" autoplay="true"  id="audioplay"></audio>
		<!-- 点击列表展示 -->
		
	</div>
</template>
<script>
import {mapMutations,mapGetters} from 'vuex'
	export default{
		data(){
			return{
				playIcon: 'play-icon',
				pauseIcon: 'pause-icon'
			}
		},
		computed:{
			...mapGetters([
					'playing',
					'isplay',
					'music'
				])
		},
		methods:{
			...mapMutations([
					'play',
					'pause'
				]),
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
	.footer
		width:100%
		height:50px
		position:fixed
		bottom:0
		left:0
		background:rgba(255,255,255,1)
		z-index:300
		align-items:center
		display:flex
		.left
			
			width:75%
			display:flex
			height:100%
			align-items:center
		
			img
				width:40px
				height:40px
				margin:0 5px
			.name
				.title
					font-size:16px
					line-height:25px
				.description
					font-size:14px
					color:#b0b0b1
					width:100%
					overflow:hidden
					text-overflow:ellipsis
					white-space:nowrap
		.right
			width:25%
			display:flex
			align-items:center
			height:100%
			justify-content:space-around
			.play
			
				i
					display:inline-block
					color:#000
					width:40px
					height:40px
					border-radius:50%			
					padding:5px
					box-sizing:border-box
				.play-icon 				
					background: url(./play.svg) no-repeat 50%
					background-size: 60%
					border:1px solid #CE332E
					
				.pause-icon
					
					background: url(./pause.svg) no-repeat 50%
					background-size: 60%
					border:1px solid #D1D1D1
					
			.play-all
				width:40px
				height:40px
				border-radius:50%
				img 
					width:100%

</style>