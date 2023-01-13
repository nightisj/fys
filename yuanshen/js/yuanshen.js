$(function() {
	var docw = $(window).width
	$("body").css("width", docw + "px")
})
$(function() {
	$("#cad").click(function() {
		$("#tsbj").removeClass("yincang")
	})
	$("#gbtishi").click(function() {
		$("#tsbj").addClass("yincang")
	})

	$(".bfan").click(function() {
		$("#spbj").removeClass("yincang")
	})
	$("#home2").click(function() {
		$("#spbj").addClass("yincang")
		if (vi1.play) {
			vi1.pause()
		}
	})

	$(".qtxz").click(function() {
		$("#xzbj").removeClass("yincang")
	})
	$("#gblj").click(function() {
		$("#xzbj").addClass("yincang")
	})

	$(".yysxz").click(function() {
		$("#yxzbj").removeClass("yincang")
	})
	$("#gbylj").click(function() {
		$("#yxzbj").addClass("yincang")
	})

	$(".pcxz").on({
		mouseover: function() {
			$(this).attr('src', 'image/qtxz2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/pcxz1.png')
		}
	})

	$(".qtxz").on({
		mouseover: function() {
			$(this).attr('src', 'image/qtxz2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/qtxz1.png')
		}
	})

	$(".yysxz").on({
		mouseover: function() {
			$(this).attr('src', 'image/yysxz2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/yysxz1.png')
		}
	})

	$(".bfan").on({
		mouseover: function() {
			$(this).attr('src', 'image/bofan2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/bofan1.png')
		}
	})
})
$(function() {
	//浏览器兼容
	if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
		document.addEventListener("DOMMouseScroll", scrollFun, false);
	} else if (document.addEventListener) {
		document.addEventListener("mousewheel", scrollFun, false);
	} else if (document.attachEvent) {
		document.attachEvent("onmousewheel", scrollFun);
	} else {
		document.onmousewheel = scrollFun;
	}

	let index = 1;
	let curIndex = 1; //记录当前的页面
	let wrap = document.querySelector("#body");
	let pageNum = document.querySelectorAll(".page").length;
	// let hei = $(document).height();
	let hei = 754;
	//如果不加时间控制，滚动会过度灵敏，一次翻好几屏
	let startTime = 0, //翻屏起始时间
		endTime = 0,
		now = 0;

	//滚动事件处理函数
	function scrollFun(event) {
		startTime = new Date().getTime();
		let delta = event.detail || -event.wheelDelta;
		console.log(delta);
		//mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
		//DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
		if (endTime - startTime < -400) {
			if (delta > 0 && parseInt(wrap.offsetTop) > -(hei * (pageNum - 1))) {
				//向下滚动
				index++;
				toPage(index);
			}
			if (delta < 0 && parseInt(wrap.offsetTop) < 0) {
				//向上滚动
				index--;
				toPage(index);
			}
			endTime = new Date().getTime();
		}
	}

	function toPage(idx) {
		if (idx != curIndex) {
			//jquery实现动画效果
			let delta = idx - curIndex;
			now = now - delta * hei;
			console.log(now);
			$("#body").animate({
					top: now + "px",
				},
				300
			);
			curIndex = idx;
		}
	}
})
$(function() {
	$(".yzxj").on({
		mouseover: function() {
			$(this).attr('src', 'image/yzxj2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/yzxj1.png')
		}
	})

	$(".jgqt").on({
		mouseover: function() {
			$(this).attr('src', 'image/jgqt2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/jgqt1.png')
		}
	})

	$(".gjzz").on({
		mouseover: function() {
			$(this).attr('src', 'image/gjzz2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/gjzz1.png')
		}
	})

	$(".hyyt").on({
		mouseover: function() {
			$(this).attr('src', 'image/hyyt2.png')
		},
		mouseout: function() {
			$(this).attr('src', 'image/hyyt1.png')
		}
	})

	$("#yzxj").click(function() {
		$("#tsbj2").removeClass("yincang")
	})
	$(".gbhdts").click(function() {
		$("#tsbj2").addClass("yincang")
	})

	$("#jgqt").click(function() {
		$("#tsbj3").removeClass("yincang")
	})
	$(".gbhdts").click(function() {
		$("#tsbj3").addClass("yincang")
	})

	$("#gjzz").click(function() {
		$("#tsbj4").removeClass("yincang")
	})
	$(".gbhdts").click(function() {
		$("#tsbj4").addClass("yincang")
	})

	$("#hyyt").click(function() {
		$("#tsbj5").removeClass("yincang")
	})
	$(".gbhdts").click(function() {
		$("#tsbj5").addClass("yincang")
	})
})
$(function() {
	var stid
	var index = 0
	var showtime = 8000
	$("#lhtx").click(function() {
		var _this = $(this);
		var int = _this.index();
		$("#sllh").animate({
			opacity: 1
		}, 100);
		$("#sllh").siblings().animate({
			opacity: 0
		}, 100)
	});
	$("#wdtx").click(function() {
		var _this = $(this);
		var int = _this.index();
		$("#wd").animate({
			opacity: 1
		}, 100);
		$("#wd").siblings().animate({
			opacity: 0
		}, 100)
	});
	$("#lrtx").click(function() {
		var _this = $(this);
		var int = _this.index();
		$("#sllr").animate({
			opacity: 1
		}, 100);
		$("#sllr").siblings().animate({
			opacity: 0
		}, 100)
	});
	$("#jslb div").each(function() {
		$(this).css("opacity", "0")
	})
	$("#jslb div").first().css("opacity", "1")

	function change(index) {
		$("#jslb div").eq(index).animate({
			opacity: 1
		}, 100)
		$("#jslb div").eq(index).siblings().animate({
			opacity: 0
		}, 100)
	}
	
	function show() {
		index = index + 1
		if (index < $("#jslb div").length) {
			change(index)
		} else {
			index = 0
			change(index)
		}
	}
	stid = setInterval(show, showtime)

	$("#lhtx").mouseover(function() {
		$("#lhtx2").removeClass("yincang")
		$("#lhtx1").addClass("yincang")
	})
	$("#lhtx").mouseout(function() {
		$("#lhtx2").addClass("yincang")
		$("#lhtx1").removeClass("yincang")
	})
	$("#wdtx").mouseover(function() {
		$("#wdtx2").removeClass("yincang")
		$("#wdtx1").addClass("yincang")
	})
	$("#wdtx").mouseout(function() {
		$("#wdtx2").addClass("yincang")
		$("#wdtx1").removeClass("yincang")
	})
	$("#lrtx").mouseover(function() {
		$("#lrtx2").removeClass("yincang")
		$("#lrtx1").addClass("yincang")
	})
	$("#lrtx").mouseout(function() {
		$("#lrtx2").addClass("yincang")
		$("#lrtx1").removeClass("yincang")
	})

	$("#zwcv").mouseover(function() {
		$(".zwcv2").removeClass("yincang")
		$(".zwcv1").addClass("yincang")
	})
	$("#zwcv").mouseout(function() {
		$(".zwcv2").addClass("yincang")
		$(".zwcv1").removeClass("yincang")
	})

	$("#zwcv1").mouseover(function() {
		$(".zwcv4").removeClass("yincang")
		$(".zwcv3").addClass("yincang")
	})
	$("#zwcv1").mouseout(function() {
		$(".zwcv4").addClass("yincang")
		$(".zwcv3").removeClass("yincang")
	})

	$("#zwcv2").mouseover(function() {
		$(".zwcv6").removeClass("yincang")
		$(".zwcv5").addClass("yincang")
	})
	$("#zwcv2").mouseout(function() {
		$(".zwcv6").addClass("yincang")
		$(".zwcv5").removeClass("yincang")
	})

	$("#rwcv").mouseover(function() {
		$(".rwcv2").removeClass("yincang")
		$(".rwcv1").addClass("yincang")
	})
	$("#rwcv").mouseout(function() {
		$(".rwcv2").addClass("yincang")
		$(".rwcv1").removeClass("yincang")
	})

	$("#rwcv1").mouseover(function() {
		$(".rwcv4").removeClass("yincang")
		$(".rwcv3").addClass("yincang")
	})
	$("#rwcv1").mouseout(function() {
		$(".rwcv4").addClass("yincang")
		$(".rwcv3").removeClass("yincang")
	})

	$("#rwcv2").mouseover(function() {
		$(".rwcv6").removeClass("yincang")
		$(".rwcv5").addClass("yincang")
	})
	$("#rwcv2").mouseout(function() {
		$(".rwcv6").addClass("yincang")
		$(".rwcv5").removeClass("yincang")
	})
})

jQuery.fn.slideLeftHide = function(speed, callback) {
	this.animate({
		width: "hide",
		paddingLeft: "hide",
		paddingRight: "hide",
		marginLeft: "hide",
		marginRight: "hide"
	}, speed, callback);
};
jQuery.fn.slideLeftShow = function(speed, callback) {
	this.animate({
		width: "show",
		paddingLeft: "show",
		paddingRight: "show",
		marginLeft: "show",
		marginRight: "show"
	}, speed, callback);
};

$(function() {
	$(".son").slideLeftHide(1);
	$("#yxzxl").click(function(){
		$(".yx").slideLeftShow(300)
		$(".hd2").slideLeftHide(300)
	})
	
	$("#zjdyj").click(function(){
		$(".zj").slideLeftShow(300)
		$(".hd1").slideLeftHide(300)
	})
	
	$("#hwlz").click(function(){
		$(".hw").slideLeftShow(300)
		$(".hd3").slideLeftHide(300)
	})
});
