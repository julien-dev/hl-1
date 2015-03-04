var main = $('#main-hdlx-main');
var result = $('#hdlx-result');
var curQuestion = 0 ;

var html_title_1 = '<img src="images/title-1.png">';
var html_title_2 = '<img src="images/title-2.png">';
var html_r_next = "<div class='img-containner'><img src='images/right-next.png'></div><div class='question-next'></div>";
var html_w_a_next = "<div class='img-containner'><img src='images/wrong-a.png'></div><div class='question-next'></div>";
var html_r = "<div class='img-containner'><img src='images/right.png'></div>";
var html_w_b = "<div class='img-containner'><img src='images/wrong-b.png'></div>";
var questionIndex=[
    {title:html_title_1,answer:[html_r_next,html_w_a_next]},
    {title:html_title_2,answer:[html_w_b,html_r]}
]
main.find("div.title-containner").html(questionIndex[curQuestion]['title']).addClass("title-containner-show");
main.delegate("div.question-containner","tap",function(event){
    main.find("div.question-containner-select").removeClass("question-containner-select");
    $(this).addClass("question-containner-select");
    result.addClass('result-containner-hide').removeClass('result-containner-show');
    result.html(questionIndex[curQuestion]['answer'][$(this).jqmData('index')]);
    result.addClass('result-containner-show').removeClass('result-containner-hide');
});
result.delegate("div.question-next","tap",function(event){
    main.find("div.title-containner-show").addClass("title-containner-hide").removeClass("title-containner-show");
    main.find("div.question-containner-select").removeClass("question-containner-select");
    result.addClass('result-containner-hide').removeClass('result-containner-show');
    curQuestion++;
    main.find("div.title-containner").html(questionIndex[curQuestion]['title']).addClass("title-containner-show").removeClass('result-containner-hide');;

});