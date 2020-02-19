<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<link href='../css/core/main.css' rel='stylesheet' />
<link href='../css/daygrid/main.css' rel='stylesheet' />
<link href='../css/timegrid/main.css' rel='stylesheet' />
<link href='../css/list/main.css' rel='stylesheet' />
<link href='../css/timeline/main.css' rel='stylesheet' />
<link href='../css/resource-timeline/main.css' rel='stylesheet' />

<script src='../js/core/main.js'></script>
<script src='../js/interaction/main.js'></script>
<script src='../js/daygrid/main.js'></script>
<script src='../js/timegrid/main.js'></script>
<script src='../js/list/main.js'></script>
<script src='../js/timeline/main.js'></script>
<script src='../js/resource-common/main.js'></script>
<script src='../js/resource-timeline/main.js'></script>

<script type="text/javascript">

 var dataset = [
    <c:forEach var="schList" items="${schList}" varStatus="status">
        <c:if test="${schList.startDate != ''}">
            {"id": '<c:out value="${schList.id}" />',
             "title": '<c:out value="${schList.title}" />',
             "start": '<c:out value="${schList.startDate}" />'
             
            <c:if test="${schList.endDate != ''}">
            ,"end":'<c:out value="${schList.endDate}" />'
              
            </c:if>
            } <c:if test="${!status.last}">,
            </c:if>
        </c:if>
    </c:forEach>
];

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');    

    var calendar = new FullCalendar.Calendar(calendarEl, {
   		  locale: 'ko',
	      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list', 'resourceTimeline' ],
	      now: new Date(),
	      editable: false, // enable draggable events
	      aspectRatio: 1.8,
	      scrollTime: '00:00', // undo default 6am scrollTime
	      header: {
		        left: 'today, prev, next',
		        center: 'title',
		        right: 'resourceTimelineDay,resourceTimelineThreeDays,timeGridWeek,dayGridMonth,listWeek'},
	      defaultView: 'dayGridMonth',
	      resourceLabelText: 'Rooms',
	      
	      dateClick: function(){	    	  
	    	  if (confirm("일정을 입력하시겠습니까?")) location.href="<c:url value='./insertCalander'/>";},
	     
	      events: dataset,
	      eventClick: function(info){
	    	  var getId = info.event.id;
	    	  var newlink = "<c:url value = '/hr/" + getId +"'/>"    	
		    	window.open(newlink, "view_event", "width=500,height=500");
			/* console.log(info.event.id);
			console.log(schList.id); 
			var newlink = "<c:url value='./viewSchedule/'/>"*/
			}
    });
    calendar.render();
    });
  </script>
  
<style>
body {
	margin: 0;
	padding: 0;
	font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
	font-size: 14px;
}

#calendar {
	max-width: 900px;
	margin: 50px auto;
}
</style>
</head>
<body>

	<div id='calendar'></div>
	<c:forEach var="schList" items="${schList}">
	</c:forEach>
</body>
</html>

