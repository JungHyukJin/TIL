<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>로그인 페이지</title>
</head>
<body>
    <h1>로그인</h1>
    <hr>

    <form action="/login" method="post">
        <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />

        <input type="text" id="username" name="username" placeholder="이메일 입력해주세요">
        <input type="password" id="password" name="password" placeholder="비밀번호">
        <button type="submit">로그인</button>
    </form>

</body>
</html>

