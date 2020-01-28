var Links = {
    setColor:function(color){
      var alist = document.querySelectorAll('a');
    i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
}
}

var Body = {
    setColor:function(color){
      document.querySelector('body').style.color = color;
    },

    backgroundColor:function(color){
      document.querySelector('body').style.backgroundColor = color;
    }
  }


function nightDayHandler(self){
  var target = document.querySelector('body')
  if(self.value == 'night'){
    Body.backgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
     

  } else {
    Body.backgroundColor('white')
      Body.setColor('black');
      self.value = 'night';

      Links.setColor('blue');
    }
  }