<template>
	<div class="music-description">
		<div class="wrap">
			<div class="wrap-main">
				<div class="close">
					<span @click="hidemusicdescription()">&times;</span>
				</div>
				<div class="main">
					<div class="img-title">
						<img :src="MusicDescription.coverImgUrl" alt="图片" class="music-img">
						<p class="title">{{MusicDescription.name}}</p>
					</div>
					<div class="description">
						<p class="word">
							{{MusicDescription.description}}
						</p>
			
						<div class="label">
							<span class="title">标签：</span>
							<span class="tag" v-for="(item,index) in MusicDescription.tags" :key="index">{{item}}</span>
						</div>
					</div>
				
				</div>
			</div>
			
		</div>
		
		<div class="bottom">
				<span class="save">保存封面</span>
			</div>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
	export default{
		props:{
			MusicDescription:{
				type:Object
			}
		},
		methods:{
			hidemusicdescription(){
				this.$store.commit('MusicDescriptionShow',false);
			}
		}
	}
</script>
<style lang="stylus" scoped>
.music-description
	position:fixed
	z-index:500
	width:100%
	height:100%
	left:0
	top:0
	background:rgba(85,68,56,1)
	color:#fff
	overflow:auto
	.wrap
		width:100%
		.wrap-main
			margin-bottom:64px
			.close
				text-align:right
				height:30px
				span
					display:inline-block
					width:30px
					height:30px
					color:#fff
					font-size:30px
					line-height:30px
					margin-right:5px
			.main
				padding:10%
				.img-title
					display:flex
					align-items:center
					justify-content:center
					flex-direction:column
					padding:10px 0 10px 0
					border-bottom:1px solid #ccc
					.title
						height:30px
						line-height:30px
						font-size:14px
						margin-top:10px
					.music-img
						width:60%
				.description
					.word
						font-size:12px
						padding:10px 0
						line-height:20px
					.label
						height:30px
						line-height:30px
						.title
							font-size:13px
							padding-right:5px

						.tag
							font-size:8px
							padding:2px 10px
							border:1px solid #fff
							border-radius:10px
							margin-right:10px
	.bottom
		position: fixed
		width: 100%
		height: 64px
		bottom:0px
		left:0		
		clear: both
		text-align:center
		z-index:200
		background:rgba(85,68,56,1)
		.save
			display:inline-block
			font-size:12px
			padding:5px 12px
			border:1px solid #fff
			border-radius:15px
</style>