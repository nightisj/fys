<template>
  <div id="app">
    <!-- <h1>新闻</h1>
	<p class="iconfont icon-auto"></p>
	<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
	<van-icon name="chat-o" /> -->
	<router-link to="/login" id="dl" tag="button">登录</router-link>
    <router-view />
  </div>
</template>

<script type="text/javascript">
export default {
  name: "App",
};
</script>

<style lang="less">
	#app{
		text-align: center;
	}
	#dl{
		width: 100px;
		height: 50px;
		background-color: blue;
		color: white;
		font-size: 24px;
		margin: auto;
	}
</style>
