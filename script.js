$(".scene2").hide();
$(".scene3").hide();
$(".reset").hide();

$(".reset").click(function(){
    $(location).attr('href', 'https://christianmonzon1.github.io/Unit-6-Project/');
});

$(".leave-button").click(function() {
    $(".scene1").hide();
    
    $(".scene2").fadeIn();
    $(".scene3").hide();
    $("body").css("background-image","url(https://img.freepik.com/free-vector/picnic-food-grass-park-cartoon-illustration-straw-basket-with-olives-wine-sausages-blanket_74855-17775.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1700611200&semt=ais)");
    
});

$(".stay-button").click(function() {
    $(".ant").hide();
    $(".dead").show();
    $(".title").hide();
    $(".leave-button").hide();
    $(".stay-button").hide();
    $(".choice").hide();
    $(".stop").fadeIn();
    $(".reset").show();
  
});

$(".apple").click(function(){
    $(".picnic").fadeOut();
    $(".scene1").hide();
    $(".scene2").hide();
    $(".apple2").hide();
    $(".ant").hide();
    $(".ant2").hide();
    $(".ant3").hide();
    $(".scene3").fadeIn();
    
    
   
});

$(".home-button").click(function(){
    $(".picnic").hide();
    $("body").css("background-image","url(https://images.squarespace-cdn.com/content/v1/52440ddbe4b03b33d728e5ea/1540469688095-RRLMHTZ0AVHME5KIIOZZ/ant-colony-operate-800x800.jpg)");
    $(".apple2").fadeIn();
    $(".ant2").fadeIn();
    $(".ant3").hide();
    $(".watermelon2").hide();
    $(".home-button").hide();
    $(".more-button").hide();
    $(".choice3").text("You made it back safe! Double click the apple to eat it."); 
    $(".reset").show();
});
$(".apple2").dblclick(function(){
    $(".apple2").fadeOut();
    $(".choice3").text("Hover over the ant for a surprise.");
});
$(".ant2").mouseenter(function(){
    $(".ant2").hide();
    $(".ant3").show();
});
$(".ant3").mouseleave(function(){
    $(".ant3").hide();
    $(".ant2").show();
});
$(".more-button").click(function(){
    $(".picnic").fadeOut();
    $(".watermelon2").fadeOut();
    $(".ant").hide();
    $(".home-button").hide();
    $(".more-button").hide();
    $(".dead").show();
    $(".reset").show();
    $(".choice3").text("It was too heavy! Bring a friend next time.");
    
   
});

$(".watermelon").click(function(){
    $(".picnic").fadeOut();
    $(".choice2").text("It was too heavy! Bring a friend next time.");
    $(".dead").show();
    $(".reset").show();
    
});


