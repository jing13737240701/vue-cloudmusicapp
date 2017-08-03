<template>
	<div class="play-all">
		<div class="play" @click="playAll(data)"></div>
		<div class="play-info">播放全部内容<span class="music-number">(共{{musicNumber}}首)</span></div>
		<div class="multiple-choice">多选</div>
	</div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
	export default{
		props:{
			musicNumber:{
				type:Number
			},
			data:{
				type:Array
			}
		},
		methods:{
			...mapMutations([
				'addAllMusic',
				'getMusic'
				]),
			playAll(data){
				console.log(this.data[0].id);
				this.$store.dispatch('getMusic',this.data[0].id);
				this.$store.commit('addAllMusic',this.data);				
				this.$router.push({name:'player',params:{id:this.data[0].id}})
			}
		},
		computed:{
			...mapGetters([
				'music'
				])
		}
	}
</script>
<style lang="stylus" scoped>
	.play-all	
		display:flex
		align-items:center
		padding:10px 0
		border-bottom:1px solid #E7E9EA
		.play
			flex:1 0 10%
			text-align:center
			background:url('./play.png') no-repeat center
			width:30px
			height:30px
			background-size:60%
		.play-info
			flex:1 0 70%
			font-size:15px
			.music-number
				font-size:14px
				color:#838485
		.multiple-choice
			flex:1 0 15%
			font-size:14px
			text-align:center
</style>




