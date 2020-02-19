<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>로그인 or 회원가입 화면</title>

<script>
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"
    </script>

<link rel="stylesheet" type="text/css"
   href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet"
   href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css">
<link rel="stylesheet"
   href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">



<script>




        function Check_null() {
           
           var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
           
           
            if(Insert_form.email.value == "") {
            alert("이메일을 입력하세요.");
            Insert_form.email.focus();
            return false;
            }else if(!check(re2, mail, "적합하지 않은 이메일 형식입니다.")) {
              alert("적합하지 않은 이메일 형식입니다.");
           
            
             return false;
             
        }
         
            else if(Insert_form.password.value == "") {
            alert("비밀번호를 입력하세요.");
            Insert_form.password.focus();
            return false;
            }
            else {
               return true;
            }
            }
        </script>
        </head>
        
        <body>




	<div class="col-md-6 col-md-offset-3">
		<div class="container" style="padding-top: 10px">
			<div id="header">
				<h3>
					My Schedule Guide <i class="fas fa-book-open"> </i>
				</h3>
			</div>
		</div>
		<!--       <nav class="navbar navbar-inverse">
         <div class="container-fluid"></div> 
            <div class="navbar-header">
               오른쪽 메뉴바 (기능 없음)
               <button type="button" class="collapsed navbar-toggle"
                  data-toggle="collapse" data-target="#nav_menu"
                  aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span> <span
                     class="icon-bar"></span> <span class="icon-bar"></span> <span
                     class="icon-bar"></span>
               </button>
               <a class="navbar-brand" href="#"> My Schedule Guide </a> 
               <br>
            </div>
         </div>
      </nav>
   </div> -->

		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-default">
				<div class="panel-heading">정보를 입력하여 주세요.</div>
				<form name="Insert_form" onsubmit="return Check_null()">
					<div class="panel-body">
						<label for="email">이 메 일</label><br /> <input type="email"
							name="email" class="form-control"
							placeholder="example@example.com"><br /> <label
							for="password">비 밀 번 호</label><br> <input type="password"
							name="password" class="form-control" placeholder="비 밀 번 호"><br />


						<a href="<c:url value='hr/calander'/>" type="button"
							class="btn btn-lg btn-success btn-block">로그인</a><br /> <a
							href="<c:url value='hr/join'/>" type="button"
							class="btn btn-lg btn-primary btn-block">회원가입</a>


					</div>
				</form>
			</div>
		</div>
</body>
</html>