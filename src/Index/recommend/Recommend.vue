<template>
	<div class="recommend">
		<div id="slider">
	    	<swiper :options="swiperOption" style="height: 100%;">
	        	<swiper-slide v-for="(item, index) in bannerSlide" :key="index"><img :src="item" alt class="banner-item"  style="width: 100%; height: 100%;" ></swiper-slide>
	        	<div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
	      	</swiper>
	    </div>
		<div class="recommend-list">
			<h3 class="list-title">推荐歌单</h3>
			<RecommendList :recommendlist="recommendlist"></RecommendList>
		</div>
		<div class="new-music">
			<h3 class="list-title">最新音乐</h3>
			<NewMusic :newmusiclist="newmusiclist"></NewMusic>
		</div>
		<div class="recommend-mv">
			<h3 class="list-title">推荐mv</h3>
			<RecommendMv :mvlist="mvlist"></RecommendMv>
		</div>
		<div class="anchor-station">
			<h3 class="list-title">主播电台</h3>
			<AnchorStation :stationlist="stationlist"></AnchorStation>
		</div>
		<div class="exclusive-broadcasting">
			<h3 class="list-title">独家放送</h3>
			<privatecontent :privatecontentlist="privatecontentlist"></privatecontent>
		</div>
	</div>
</template>
<script>
import api from '../../api.js'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import RecommendList from '../../components/list/index/recommend/RecommendList'
import NewMusic from '../../components/list/index/recommend/NewMusic'
import RecommendMv from '../../components/list/index/recommend/RecommendMv'
import AnchorStation from '../../components/list/index/recommend/AnchorStation'
import privatecontent from '../../components/list/index/recommend/privatecontent'
	export default{
		components:{
			swiper,
			swiperSlide,
			RecommendList,
			NewMusic,
			RecommendMv,
			AnchorStation,
			privatecontent
		},
		data(){
			return{
				swiperOption:{
					pagination: '.swiper-pagination',
          			paginationClickable: true,
          			autoplay: 2000
				},
				bannerSlide:[],
				recommendlist:[],
				newmusiclist:[],
				mvlist:[],
				stationlist:[],
				privatecontentlist:[]
			}
		},
		mounted(){
		
			this.getSlideList();
			this.getPersonalized();
			this.getNewsong();
			this.getMv();
			this.getAnchorStation();
			this.getPrivatecontent();
		},
		methods:{
			getSlideList(){
				api.getBanner().then((response) => {
          			let result=response.data.banners.length;
          			for(let i=0;i<result;i++){
          				this.bannerSlide[i]=response.data.banners[i].pic;
          			}         			
        		})
          		.catch((response) => {
          	  		console.log(response);
          		});
			},
			getPersonalized(){
				api.getPersonalized().then((response)=>{
					this.recommendlist=response.data.result;
					
					let len=response.data.result.length;
					for(let i=0;i<len;i++){
						let a=parseInt(response.data.result[i].playCount);
						if(a>100000){
							this.recommendlist[i].playCount=parseInt(a/(Math.pow(10,4)))+'万';
						}
						
					}
						
				})
				.catch((response) => {
          	  		console.log(response);
          		});
			},
			getNewsong(){
				api.getNewMusic().then((response)=>{
					this.newmusiclist=response.data.result.slice(0,6);
				})
				.catch((response) => {
          	  		console.log(response);
          		});
			},
			getMv(){
				api.getReommendMv().then((response)=>{
					this.mvlist=response.data.result;
					let len=response.data.result.length;
					console.log()
					for(let i=0;i<len;i++){
						let a=parseInt(response.data.result[i].playCount);
						if(a>100000){
							this.mvlist[i].playCount=parseInt(a/(Math.pow(10,4)))+'万';
						}
						
					}
				})
				.catch((response) => {
          	  		console.log(response);
          		});
			},
			getAnchorStation(){
				api.getAnchorStation().then((response)=>{
					this.stationlist=response.data.result;
				})
				.catch((response) => {
          	  		console.log(response);
          		});
			},
			getPrivatecontent(){
				api.getPrivatecontent().then((response)=>{
					this.privatecontentlist=response.data.result;
					console.log(this.privatecontentlist)
				})
				.catch((response) => {
          	  		console.log(response);
          		});
			}
		}
	}
</script>
<style lang="stylus" scoped>
	
	.recommend-list,.new-music,.recommend-mv,.anchor-station,.exclusive-broadcasting
		margin-bottom: 10px
		.list-title
			font-size: 14px
			height:20px;
			line-height:18px		
			box-sizing:border-box	
			margin:10px 0	
			border-left:2px solid #F44C4C
			padding-left:5px
			&:after
				content '>'
				color #000
				font-size 20px
				padding-left 5px
				position:relative
				top:1px
</style>