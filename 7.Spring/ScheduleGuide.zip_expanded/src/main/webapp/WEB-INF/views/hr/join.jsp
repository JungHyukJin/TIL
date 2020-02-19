<%@ page language="java" contentType="text/html; charset=utf-8"	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>고하영</title>

<script>
	src = "https://code.jquery.com/jquery-3.4.1.min.js"
	src = "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
	integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin = "anonymous"
</script>

<link rel="stylesheet" type="text/css"
	href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css">
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<style>
#content {
	background: white;
	color: black;
	height: 9%;
	float: none;
	width: 40%;
	font-size: 16px;
	margin: 15px;
	margin-left: 805px;
}

#t1 {
	text-align: center;
	margin-top: 50px;
	font-size: 30px;
	letter-spacing: 5px;
}
</style>

<script>
/* 	function Check_null() {
		if (Insert_form.name.value == "") {
			alert("이름을 입력하세요.");
			Insert_form.name.focus();
			return false;
		} else if (Insert_form.password.value == "") {
			alert("비밀번호를 입력하세요.");
			Insert_form.password.focus();
			return false;
		} else if (Insert_form.password_check.value == "") {
			alert("비밀번호를 확인을 입력하세요.");
			Insert_form.password_check.focus();
			return false;
		} else if (Insert_form.password.value != Insert_form.password_check.value) {
			alert("비밀번호 두개가 다릅니당");
			Insert_form.password.focus();
			return false;
		} else if (Insert_form.email.value == "") {
			alert("이메일을 입력하세요.");
			Insert_form.email.focus();
			return false;
		}else if(!check(re2, mail, "적합하지 않은 이메일 형식입니다.")) {
       		 alert("적합하지 않은 이메일 형식입니다.");
    		 
         	
             return false;

		else {
			alert("회원가입이 완료되었습니다! ");

			return true;
		}
	} */

        $("#btnJoin").click(function(event) {
/*             clickcr(this, 'sup.signup', '', '', event);
            submitClose();
            if(idFlag && pwFlag && authFlag) {
                mainSubmit();
            } else {
                setTimeout(function() {
                    mainSubmit();
                }, 700);
            } */
    		if (Insert_form.name.value == "") {
    			alert("이름을 입력하세요.");submitClose();
    			Insert_form.name.focus();
    			return false;
    			
    		} else if (Insert_form.password.value == "") {
    			alert("비밀번호를 입력하세요.");submitClose();
    			Insert_form.password.focus();
    			return false;
    			submitClose();
    		} else if (Insert_form.password_check.value == "") {
    			alert("비밀번호를 확인을 입력하세요.");submitClose();
    			Insert_form.password_check.focus();
    			return false;
    			submitClose();
    		} else if (Insert_form.password.value != Insert_form.password_check.value) {
    			alert("비밀번호 두개가 다릅니당");submitClose();
    			Insert_form.password.focus();
    			return false;
    			submitClose();
    		} else if (Insert_form.email.value == "") {
    			alert("이메일을 입력하세요.");submitClose();
    			Insert_form.email.focus();
    			return false;
    			submitClose();
    		}else if(!check(re2, mail, "적합하지 않은 이메일 형식입니다.")) {
           		 alert("적합하지 않은 이메일 형식입니다.");submitClose();
           		 return false;
           		submitClose();
    		}
    		else {
    			alert("회원가입이 완료되었습니다! ");
    			submitOpen();
    			return true;
    			
    		}
            });
    
    function submitClose() {
        $("#btnJoin").attr("disabled",true);
    }

    function submitOpen() {
        $("#btnJoin").attr("disabled",false);
    }

</script>

</head>
<body>





	<div class="container" style="padding-top: 20px">
		<div id="header">
			<h3>
				Customer Informaion Insert <i class="fas fa-book-open"> </i>
			</h3>
		</div>
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<!-- 오른쪽 메뉴바 (기능 없음)-->
					<button type="button" class="collapsed navbar-toggle"
						data-toggle="collapse" data-target="#nav_menu"
						aria-expanded="false">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#"> Customer Informaion Insert </a>
				</div>
			</div>
		</nav>
	</div>

	<div class="col-md-3 col-md-offset-3">
		<div class="panel panel-default">
			<div class="panel-heading">정보를 입력하여 주세요.</div>
			<form name="Insert_form" action="./insertMember" method="POST">
				<div class="panel-body">

					<label for="name">이 름</label><br> 
					<input type="text" autofocus name="name" class="form-control" placeholder=" 이 름 "><br />
				
					<label for="password">비 밀 번 호</label><br> 
					<input type="password" autofocus name="password" class="form-control" placeholder=" 비 밀 번 호 "><br /> 
						
					
					<label for="password_check">비 밀 번 호 확 인</label><br> 					
					<input type="password" autofocus name="password_check" class="form-control" placeholder=" 비 밀 번 호 확 인 "><br /> 
						
					<label for="email">이 메 일</label><br>
					<input type="email" name="email" class="form-control" placeholder="example@example.com"><br />

					<!-- button value='hr/check'>중복검사</button>	<br /-->
					<button type="submit" id="btnJoin" class="btn btn-lg btn-success btn-block" >입력완료</button><br />
					<button type="reset" class="btn btn-lg btn-primary btn-block" value="">초기화</button>

					</div>
			</form>
		</div>
	</div>
</body>
</html>