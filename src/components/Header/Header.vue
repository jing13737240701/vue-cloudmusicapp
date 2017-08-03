<template>
	<div class="header">
		<span class="rs-menu">侧边栏</span>
		<div class="menu-center">
			<router-link to="/left" class="item">
        		左
      		</router-link>
			<router-link to="/index/recommend">主页</router-link>
			<router-link to="/right">右</router-link>
		</div>
		<span class="search">搜索</span>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.header{
	width: 100%;
	background:#F44C4C;
	height:34px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top:0;
	left: 0;
	z-index: 10;

}
	.rs-menu{
		display: inline-block;
		/*width: 42px;
		height: 34px;
		background-image: url('./rs-menu.png');*/
		
	}
	.menu-center{
		display: inline-block;
		margin: auto;
	}
	.search{
		
	}
</style>

