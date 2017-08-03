<template>
	<div class="widget-list">
		<div class="cover-bottom">
			<div class="item">
				<img src="" alt="">
				<p >{{sharecomponent[0]}}</p>
			</div>
			<div class="item">
				<img src="" alt="">
				<p >{{sharecomponent[1]}}</p>
			</div>
			<div class="item">
				<img src="" alt="">
				<p >{{sharecomponent[2]}}</p>
			</div>
			<div class="item">
				<img src="" alt="">
				<p>下载</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			sharecomponent:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.cover-bottom
		display:flex
		align-items:center
		text-align:center
		color:#fff
		padding:15px 0
		.item
			flex:1 0 25%
</style>