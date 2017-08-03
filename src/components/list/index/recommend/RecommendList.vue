<template>
	<div id="recommendList">
		<ul class="recommend-list">
			<li class="list-item" v-for="(item,index) in recommendlist" :key="index" @click="jumpDetail(item.id)">
				<div class="icon-headset"><span ></span>{{item.playCount}}</div>
				<img v-lazy="item.picUrl" lazy="loading">
				<p v-html="item.name"></p>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:{
			recommendlist:{
				type:Array,
				default:[]
			}
		},
		methods:{
			jumpDetail(id){
				this.$router.push({
					path:'/songDetailList/'+id
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.recommend-list
		display:flex
		align-item:center
		justify-content:space-between
		flex-wrap:wrap
		.list-item
			width:32.9%
			box-sizing:border-box
			margin-bottom:5px
			position:relative
			img
				width:100%
			p
				font-size:12px
				color:#303131
				text-indent:2px
				padding:2px 0
				line-height:15px
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
					background:url('../../../../assets/iconall.png') no-repeat 0 -24px

</style>