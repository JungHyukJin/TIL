<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html lang="en">

<head class="col-md-6 col-md-offset-3">
<style>
body {	background-image: url( ".jpg" );
}
</style>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>일정관리</title>
<style type="text/css"></Style>
<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);

label {
	font-family: 'Nanum Pen Script', cursive;
}

body {
	font-family: 'Nanum Pen Script', cursive;
}
</style>



<!-- <div style=" font-size:1.5em;"/> -->


<!-- <style type="text/css">
        body{
        background-color:black;
        }
        </style>
        <script src="1.js" type= "text/javascript"></script>
        <script src="2.js" type= "text/javascript"></script>
        <script type="text/javascript">
        $(document).ready(function(){
        $(document).snowfall({deviceorientation : true, round: true, minSize:1, maxSize:8, flakeCound:250});
        }); -->

</head>

<body>





	<div class="col-md-6 col-md-offset-3">
		<h2>&nbsp;&nbsp;일정을 입력하세요.</h2>

		<form name="Insert_Schedule" action="./insertCalander" method="POST">
			<fieldset style="background-color: snow; font-size: 20px;">
				<label for="calcal">개인/공식 일정</label>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label>중요체크</label><input
					type="checkbox" name="emphasis" id="emphasis" value="HTML"><br>
				<select style="size: 30%;" id="calcal"
					class="text ui-widget-content ui-corner-all"
					float:right;
                    style="margin-bottom:12px; width:95%; padding: .4em;">
					<option value="private" SELECTED>개인일정</option>
					<option value="public">공식일정</option>
				</select><br> <label>제목</label> <br> <input style="size: 30%;"
					type="text" name="title" id="title"
					class="text ui-widget-content ui-corner-all"
					style="margin-bottom:12px; width:95%; padding: .4em;" /> <br>


				<label>메모</label> <br>
				<textarea name="memo" rows="7" cols="40" wrap="virtual"
					placeholder="원하는 내용을 입력해 주세요"></textarea>
				<br>


				<div style="display: inline-block; margin-right: 2%">
					<label>시작하는 날</label><br> <input type="date" name="startDate"
						id="startDate"><br>
				</div>
				<div style="display: inline-block; margin-right: 2%">
					<label>시</label> <select id="startHour"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="12" SELECTED>12</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
					</select>
				</div>
				<div style="display: inline-block; margin-right: 2%;">
					<label>분</label> <select id="startMin"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="00" SELECTED>00</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="40">40</option>
						<option value="50">50</option>
					</select>
				</div>
				<div style="display: inline-block;">
					<label>AM/PM</label> <select id="startMeridiem"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="AM" SELECTED>AM</option>
						<option value="PM">PM</option>
					</select>
				</div>
				<br>
				<div style="display: inline-block; margin-right: 2%">
					<label>끝나는 날</label><br> <input type="date" name="endDate"
						id="endDate"><br>
				</div>
				<div style="display: inline-block; margin-right: 2%">
					<label>시</label> <select id="startHour"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="12" SELECTED>12</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
					</select>
				</div>
				<div style="display: inline-block; margin-right: 2%;">
					<label>분</label> <select id="startMin"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="00" SELECTED>00</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="40">40</option>
						<option value="50">50</option>
					</select>
				</div>
				<div style="display: inline-block;">
					<label>AM/PM</label> <select id="startMeridiem"
						class="text ui-widget-content ui-corner-all"
						style="margin-bottom: 12px; width: 95%; padding: .4em;">
						<option value="AM" SELECTED>AM</option>
						<option value="PM">PM</option>
					</select>
				</div>
				<div class="article category" style="display: block;">



					<center>
						<button type="submit" class="btn btn-default" value="">확인</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button type="reset" class="btn btn-default" value="">초기화</button>
					</center>
				</div>
			</fieldset>
		</form>
	</div>
</body>

</html>