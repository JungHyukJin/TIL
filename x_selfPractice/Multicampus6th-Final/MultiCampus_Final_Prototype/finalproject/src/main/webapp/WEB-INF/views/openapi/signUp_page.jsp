<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<html>
<head>
   <title>signUp_page</title>
</head>
<body>
<h1>
   singup
</h1>
<form action="/openapi/insertMember" method="POST">
    <div>
        id : <input type="text" name="id" placeholder="Create ID">
        password : <input type="password" name="password" placeholder="Create password">
        name : <input type="text" name="name" placeholder="insert your name">
        <input type="submit">
    </div>
</form>
</body>
</html>