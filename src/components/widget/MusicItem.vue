<template>
	<div class="music-item">
		<div class="musin-number">{{index+1}}</div>
		<div class="music-detail">
			<div class="left">
				<p class="top">{{data.name}}</p>
				<p class="bottom">{{data.ar[0].name}} - {{data.al.name}}</p>
			</div>
			
			<div class="choice">选择</div>
			
			
		</div>
		
	</div>
</template>
<script>
	export default{
		props:{
			data:{
				type:Object
			},
			index:{
				type:Number
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.music-item
		display:flex
		align-items:center
		height:40px
		padding:5px 0
		.musin-number
			text-align:center
			color:#838485
			font-size:12px
			flex:1 0 10%
			line-height:40px
		.music-detail
			flex:1 0 90%
			width:90%
			box-sizing:border-box
			border-bottom:1px solid #DBDDDE
			padding-bottom:2PX
			.left
				width:85%
				float:left
				box-sizing:border-box

				.top
					font-size:13px
					line-height:20px
					overflow:hidden
					text-overflow:ellipsis
					white-space: nowrap
				.bottom
					width:100%
					font-size:12px
					color:#838485
					overflow:hidden
					text-overflow:ellipsis
					white-space: nowrap
			.choice
				width:15%
				line-height:40px
				float:right
				text-align:center
				color:#838485
				font-size:12px

</style>