<template>
	<!-- 主页面显示 -->
	<div class="index-main">
		<div class="index-header">
			<router-link to="/index/recommend" class="tab-page" active-class="tab-color">个性推荐</router-link>
			<router-link to="/index/songList" class="tab-page" active-class="tab-color">歌单</router-link>
			<router-link to="/index/hostStation" class="tab-page" active-class="tab-color">主播电台</router-link>
			<router-link to="/index/rankingList" class="tab-page" active-class="tab-color">排行榜</router-link>
		</div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view class="index-view"></router-view>
			</keep-alive>
	    	 
      </transition>
    </div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped>
.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
	.index-header{
		width: 100%;
		height:30px;
		line-height: 30px;
		display: flex;
		position: fixed;
		top:34px;
		left:0;
		z-index: 10;
		background-color: #feffff;

	}
	.tab-page{
		flex:1;
		text-align: center;
		font-size: 14px;
	}
	.index-header .tab-color{
		border-bottom: 1px solid #F44C4C;
	}
	.index-view{
		margin-top: 64px;
		background-color: #feffff;
	}
</style>