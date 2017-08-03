<template>
	<div class="recommend-mv">
		<ul class="recommend-mv-list">
			<li class="list-item" v-for="(item,index) in mvlist" :key="index">
				<div class="icon-headset"><span ></span>{{item.playCount}}</div>
				<img :src="item.picUrl">
				<h3 v-html="item.name"></h3>
				<p v-html="item.artistName"></p>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:{
			mvlist:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.recommend-mv-list
		display:flex
		align-item:center
		justify-content:space-between
		flex-wrap:wrap
		.list-item
			width:49.9%
			box-sizing:border-box
			margin-bottom:5px
			position:relative
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
				width:100%
				font-size:12px
				color:#303131			
			p
				font-size:10px
				color:#a3a4a5
			.icon-headset
				position:absolute
				top:2px
				right:2px
				font-size:12px
				color:#fff
				padding-left:15px
				span
					display:inline-block
					width:14px
					height:11px
					background-size:cover
					background:url('../../../../assets/iconall.png') no-repeat 0 -24px
</style>