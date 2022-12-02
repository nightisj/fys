<template>
	<div class="login">

		<van-nav-bar title="登录" />

		<van-tabs v-model="active">
			<!-- 用户名登录 -->
			<van-tab title="用户名密码登录">
				<van-form @submit="onSubmit">
					<van-cell-group inset>
						<van-field v-model="user.username" name="用户名" label="用户名" placeholder="用户名"
							left-icon="user-circle-o" :rules="userCheckFrom.username" />
						<van-field v-model="user.password" type="password" name="密码" label="密码" placeholder="密码"
							left-icon="closed-eye" :rules="userCheckFrom.password" />
					</van-cell-group>
					<div style="margin: 16px;">
						<van-button round block type="primary" native-type="submit">
							提交
						</van-button>
					</div>
				</van-form>
			</van-tab>
			<!-- 手机端登录 -->
			<van-tab title="手机验证码登录">
				<van-form @submit="onSubmitmo" ref="loginForm">
					<van-cell-group inset>
						<van-field v-model="usermo.mobile" name="mobile" label="手机号" placeholder="手机号"
							:rules="userCheckFrommo.mobile" left-icon="contact" />
						<van-field v-model="usermo.code" center clearable label="短信验证码" placeholder="请输入短信验证"
							:rules="userCheckFrommo.code">
							<i slot="left-icon" class="iconfont icon-auto"></i>
							<template #button>
								<van-count-down v-if="isTimeBegin" @finish="isTimeBegin=false" :time="10*1000"
									format="ss 秒" />
								<van-button v-else size="small" type="info" @click="onSend" native-type="button">发送验证码
								</van-button>
							</template>
						</van-field>
					</van-cell-group>
					<div style="margin: 16px;">
						<van-button round block type="primary" native-type="submit">
							提交
						</van-button>
					</div>
				</van-form>
			</van-tab>
		</van-tabs>
		{{$store.state.tokenusermo}}
	</div>
</template>

<script>
	import {
		login
	} from "../../api/user.js"
	import {
		loginmo,
		sendMsg
	} from "../../api/usermo.js"
	export default {
		name: "login",
		components: {},
		props: {},
		data: function() {
			return {
				user: {
					username: "",
					password: ""
				},
				userCheckFrom: {
					username: [{
						required: true,
						message: '请填写用户名'
					}],
					password: [{
						required: true, //对空进行验证
						message: '请填写密码'
					}]
				},
				usermo: {
					mobile: "",
					code: ""
				},
				userCheckFrommo: {
					mobile: [{
						required: true,
						message: '请填写手机号'
					}, {
						pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
						message: '请填写准确的手机号'
					}],
					code: [{
						required: true, //对空进行验证
						message: '请填写验证码'
					}, {
						pattern: /\d{6}/,
						message: '请填写准确的验证码'
					}]
				},
				isTimeBegin: false,
			}
		},
		methods: {
			async onSubmit() {
				//1.获取表单数据
				const user = this.user
				//2.验证
				this.$toast.loading({
					message: '用户登录中...',
					forbidClick: true,
					duration: 5 * 1000
				});
				//3.提交请求
				const res = await login(user)
				if (res.data.code === 200) {
					console.log("ok", res)
					this.$toast.success('登录成功');
				} else if (res.data.code === 500) {
					console.log("系统异常", res)
					this.$toast.fail('系统异常');
				} else if (res.data.code === 401) {
					console.log("未授权", res)
					this.$toast.fail('未授权');
				} else if (res.data.code === 403) {
					console.log("禁止访问", res)
					this.$toast.fail('禁止访问');
				} else {
					console.log("登录失败", res)
					this.$toast.fail('登录失败');
				}
				//4.后续处理
			},
			async onSubmitmo() {
				//1.获取表单数据
				const usermo = this.usermo
				//2.验证
				this.$toast.loading({
					message: '用户登录中...',
					forbidClick: true,
					duration: 5 * 1000
				});
				//3.提交请求
				try {
					// const res = await loginmo(usermo)
					const res = await loginmo(usermo)
					this.$store.commit("setToken",res.data.data)
					console.log("ok", res)
					this.$toast.success('登录成功');
				} catch (err) {
					if (err.response.status === 400) {
						console.log("请求参数错误", err)
						this.$toast.fail('登录失败');
					} else if (err.response.status === 507) {
						console.log("数据库错误", err)
						this.$toast.fail('登录失败');
					} else {
						console.log("登录错误", err)
						this.$toast.fail('登录失败');
					}
				}
				//4.后续处理
			},
			async onSend() {
				try {
					//验证手机号
					await this.$refs.loginForm.validate("mobile")
					console.log('ok')
				} catch (err) {
					return console.log("验证失败", err)
				}
				this.isTimeBegin = true
				//发送验证请求
				try{
					await sendMsg(this.usermo.mobile)
					this.$toast({
						message:"发送成功",
						icon:"passed",
					})
				}catch(err){
					if(err.response.status === 404){
						this.$toast.fail('手机号错误');
					}else if(err.response.status === 429){
						this.$toast.fail('接口访问次数受限');
					}else if(err.response.status === 507){
						this.$toast.fail('服务器数据库异常');
					}else{
						this.$toast.fail('错误');
					}
				}
			}
		},
		computed: {},
		watch: {},
		created: {},
		mounted: {}
	}
</script>

<style>
</style>
