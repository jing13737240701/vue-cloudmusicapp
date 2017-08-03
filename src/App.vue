<template>
  <div id="app">
  <!-- header -->
	<HeaderView></HeaderView>
	
	<router-view></router-view>
	
	<FooterView></FooterView>
   
  </div>
</template>

<script>
import HeaderView from './components/Header/Header.vue'
import FooterView from './components/footer/Footer'
	export default{
		components:{
			HeaderView,
			FooterView
		}
	}
</script>

<style>

</style>
