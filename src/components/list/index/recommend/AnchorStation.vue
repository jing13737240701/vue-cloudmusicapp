<template>
	<div class="anchor-station">
		<ul class="anchor-station-list">
			<li class="list-item" v-for="(item,index) in stationlist" :key="index">
				<img :src="item.picUrl">
				<h3 v-html="item.name"></h3>
			</li>
		</ul>
	</div>
</template>
<script >
	export default{
		props:{
			stationlist:{
				type:Array,
				default:[]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.anchor-station-list
		display:flex
		align-item:center
		justify-content:space-between
		flex-wrap:wrap
		.list-item
			width:33%
			box-sizing:border-box
			margin-bottom:5px
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