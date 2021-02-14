$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("navmouvement");
      $(".navbar2").addClass("navmouvement");
    }
    else{
      $(".navbar").removeClass("navmouvement");
      $(".navbar2").removeClass("navmouvement");
    }
  });
	});

