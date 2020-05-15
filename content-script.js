(function() {
	console.log('================');
	var x = 1;
	answerFun(x);

})();

function answerFun(x){
	console.log('------'+ x +' --------');
	if (x > 50){
		return 1;
	}
	console.log('-----66666-'+ x +' --------');
	// 获取问题
	var questiong = document.getElementById("lb_dxtm").innerHTML.trim();
	console.log(questiong);

	httpRequest("http://localhost/thinkphp5024/public/index.php?question=" + questiong, x);
    
	
}

function httpRequest(url, x) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			console.log("当前第几题："+x);
			console.log('daan :'+xhr.responseText);
			switch (this.responseText){
				case '1':
					// 选择答案
					var answer = $('#RB_xl_0');
					answer.click();
					next(x)
					break;
				case '2':
					// 选择答案
					var answer = $('#RB_xl_1');
					answer.click();
					next(x)
					break;
				case '3':
					// 选择答案
					var answer = $('#RB_xl_2');
					answer.click();
					next(x)
					break;
				case '4':
					// 选择答案
					var answer = $('#RB_xl_3');
					answer.click();
					next(x)
					break;
				default:
					var answer = $('#RB_xl_3');
					answer.click();
					next(x)
			}
		}

		
		
	}
}


function next(x){
	

	setTimeout(function (){
		// 点击提交按钮
		var submit = $('#btn_submit');
		submit.click();	
	}, 1000);

	setTimeout(function (){
		// 点击下一题
		var continue1 = $('#continue1');
		continue1.click();
	}, 3000);

	setTimeout(function (){
		console.log('==========='+ x +' --------');
		answerFun(x+1);
	}, 5000);

	
}
