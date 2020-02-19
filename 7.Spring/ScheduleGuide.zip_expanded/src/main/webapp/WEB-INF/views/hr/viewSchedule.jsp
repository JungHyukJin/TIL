<%@ page language="java" contentType="text/html; charset=utf-8"	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>


<script>    
     function deleteChk(){
    	 if (confirm("[ "+"${schList.title}"+" ] "+"일정을 삭제 하시겠습니까?")){
    		 console.log("222");

    		 var f = document.getElementById('delete_Schedule'); 
    		 f.setAttribute("method","post");
    		 f.setAttribute("action","./deleteCalander");
    		 f.submit();
    		// href="deleteCalander?sid=${schList.id}"
    		 location.href="<c:url value='./deleteCalander'/>";
    		 /*     	 
        	 var f = document.createElement("form"); // form 엘리멘트 생성 
    			f.setAttribute("method","post"); // method 속성을 post로 설정
    			f.setAttribute("action","./deleteCalander"); // submit했을 때 무슨 동작을 할 것인지 설정
    			document.body.appendChild(f); // 현재 페이지에 form 엘리멘트 추가 
    			
    			f.submit(); 
    			*/
    		 }
    	 }
     </script>
</head>

<body>
	<form id="delete_Schedule" action="./deleteCalander" method="POST">
	<!-- <form> -->
		<fieldset style="font-size: 20px;">
			<table>
				<tr>
					<td>${schList.id}</td>
					<th>제목</th>
					<td>${schList.title}</td>
				</tr>
				<tr>
					<th>일정시작</th>
					<td>${schList.startDate}</td>
				</tr>
				<tr>
					<th>일정종료</th>
					<td>${schList.endDate}</td>
				</tr>
				<tr>
					<th>메모</th>
					<td>${schList.memo}</td>
				</tr>
			</table>
		</fieldset>
		<center>
<!--  id 값 넘기는 방법 알아야 함  , (submit,파라미터없)방법으로 넘기면 포스트방식으로 넘어감, -->
<%-- 			<a href="javascript:deleteChk();" type="submit">삭제</a>
			</button>

			<button type="submit">삭제</button>
			<a href="deleteCalander?sid=${schList.id}">삭제</a>
 --%>

			<button type="submit" class="btn btn-default" value="" onclick="window.close()">확인</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button type="reset" class="btn btn-default" value="" onclick='javascript:location.href="<c:url value='./updateCalander'/>";'>수정</button>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<button type="submit" class="btn btn-default" value="" onclick='javascript:location.href="<c:url value='./deleteCalander'/>";'>삭제</button>
			<!-- <a href="javascript:deleteChk();" type="submit">삭제</a> -->


		</center>

	</form>

</body>

</html>