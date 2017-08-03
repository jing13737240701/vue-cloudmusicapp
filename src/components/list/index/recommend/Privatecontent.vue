<template>
	<div class="privatecontent">
		<ul class="Privatecontent-list">
			<li class="list-item" v-for="(item,index) in privatecontentlist" :key="index">
				<img :src="item.picUrl">
				<h3 v-html="item.name"></h3>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:{
			privatecontentlist:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.Privatecontent-list
		display:flex
		align-item:center
		justify-content:space-between
		flex-wrap:wrap
		.list-item
			width:49.73%
			box-sizing:border-box
			margin-bottom:5px
			&.list-item:last-child
				width:100%
			img
				width:100%
			h3
				box-sizing:border-box
				padding: 0 5px
				line-height:18px
				width:100%
				font-size:12px
				color:#303131
</style>