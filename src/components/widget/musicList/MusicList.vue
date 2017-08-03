<template>
	<div class="music-list">
		<div class="top">
			<div class="play-type">
				<div class="list-circulation">
					<img src="./list-loop.svg" alt="">
					列表循环(0)
				</div>
				<div class="list-circulation" v-show="false">
					<img src="./random-loop.svg" alt="">
					随机播放(0)
				</div>
				<div class="list-circulation" v-show="false">
					<img src="./single-loop.svg" alt="">
					单曲循环(0)
				</div>
			</div>
			<div class="empty">
				<img src="./delete.png" alt="">
				清空
			</div>
		</div>
		<div class="wrapper">
			<ul class="list">
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
				<li class="item">
					<p class="left">滚滚红尘- <span class="singer">罗大佑</span></p>
					<img src="./remove-item.png" alt="" class="right">
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="stylus" scoped>
	.music-list
		width:100%
		background:#fff
		box-sizing:border-box
		position:absolute
		left:0
		bottom:0
		.top
			width:100%
			height:50px
			line-height:50px
			border-bottom:1px solid #e6e6e6
			display:flex
			justify-content:space-between
			padding:0 10px
			box-sizing:border-box
			.play-type
				height:100%
				font-size:14px
				color:#000
				display:flex
				align-items:center
				.list-circulation
					height:100%
					font-size:14px
					img 
						width:20px
						height:20px
						vertical-align:middle
			.empty
				color:#000
				font-size:14px
				img
					width:20px
					height:20px
					vertical-align:middle
		.wrapper
			width:100%
			max-height:300px
			overflow:auto
			padding:0 10px
			box-sizing:border-box
			.list
				.item
					height:40px
					line-height:40px
					color:#000
					border-bottom:1px solid #e6e6e6	
					font-size:14px	
					display:flex
					justify-content:space-between	
					align-items:center
					.singer
						color:#666
						font-size:12px
					.right
						width:25px
						height:25px



</style>