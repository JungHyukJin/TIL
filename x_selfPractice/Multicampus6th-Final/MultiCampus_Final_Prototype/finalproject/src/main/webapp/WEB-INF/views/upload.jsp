<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>api사진 테스트</title>
</head>
<body>
    사진은!
    <image src=${uploadedImage}></image>
    <form action="/recomand" method="GET">
        <input type="text" name="label" value="${label[0]}">
        <input type="text" name="label" value="${label[1]}">
        <input type="text" name="label" value="${label[2]}">
        <input type="submit">
    </form>
</body>
</html>

