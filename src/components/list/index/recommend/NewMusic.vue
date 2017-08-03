<template>
	<div class="new-music">
		<ul class="item-list">
			<li class="item" v-for="(item,index) in newmusiclist" :key="index">
				<img :src="item.song.album.picUrl">
				<h3 v-html="item.song.name"></h3>
				<p v-html="item.song.artists[0].name"></p>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:{
			newmusiclist:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.item-list
		display:flex
		align-items:center
		justify-content:space-between
		flex-wrap:wrap
		.item
			width:33%
			margin-bottom:5px
			img	
				width:100%
			h3,p
				text-indent:5px
				height:18px
				line-height:18px
				overflow:hidden
				text-overflow: ellipsis
				white-space: nowrap
			h3
				font-size:12px
				color:#303131
			p
				font-size:10px
				color:#a3a4a5

</style>