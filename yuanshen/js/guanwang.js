$(function() {
	var docw = $(window).width
	$("body").css("width", docw + "px")
})
$(function() {
	$("#dhl>a").on({
		mouseover: function() {
			$("#dhl>a>ul").removeClass("yincang")
		},
		mouseout: function() {
			$("#dhl>a>ul").addClass("yincang")
		}
	})
})
$(function() {
	$("#cad").click(function() {
		$("#tsbj").removeClass("yincang")
	})
	$("#gbtishi").click(function() {
		$("#tsbj").addClass("yincang")
	})
})
$(function() {
	var stid
	var index = 0
	var sul = $("#lunbo ul li")

	function change(index) {
		sul.eq(index).animate({
			opacity: 1
		}, 100)
		sul.eq(index).siblings().animate({
			opacity: 0
		}, 100)
	}

	function show() {
		index = index + 1
		if (index < sul.length) {
			change(index)
		} else {
			index = 0
			change(index)
		}
	}
	stid = setInterval(show, 3000)
})
$(function() {
	$("#xxk>ul>li").click(function() {
		//菜单区效果
		$(this).addClass("active")
		$(this).siblings().removeClass("active")
		//内容效果制作
		var i = $(this).index() //补充知识，获取下标
		console.log(i)
		$("#neiro>ul:eq(" + i + ")").addClass("select")
		$("#neiro>ul:eq(" + i + ")").siblings().removeClass("select")
	})
})
$(function(){
	$(".item").mouseover(function(){
		$("#char").animate({
			opacity: 1
		},300)
	})
	$(".item").mouseout(function(){
		$("#char").animate({
			opacity: 0
		},300)
	})
	$(".item2").mouseover(function(){
		$("#char2").animate({
			opacity: 1
		},300)
	})
	$(".item2").mouseout(function(){
		$("#char2").animate({
			opacity: 0
		},300)
	})
	$(".item3").mouseover(function(){
		$("#char3").animate({
			opacity: 1
		},300)
	})
	$(".item3").mouseout(function(){
		$("#char3").animate({
			opacity: 0
		},300)
	})
})
$(function(){
	$("#an1").click(function(){
		$("#cbcd").animate({
			width: 0
		})
		$("#an1").addClass("yincang")
		$("#an2").removeClass("yincang")
	})
	$("#an2").click(function(){
		$("#cbcd").animate({
			width: 178
		})
		$("#an2").addClass("yincang")
		$("#an1").removeClass("yincang")
	})
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>500){
			$("#cbcd").css("display","block")
		}else{
			$("#cbcd").css("display","none")
		}
	})
})
