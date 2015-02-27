var main = $('#main-hdlx-main');
var result = $('#hdlx-result');
main.delegate("div.question-containner","tap",function(event,index){
    main.find("div.question-containner-select").removeClass("question-containner-select");
    $(this).addClass("question-containner-select");
    result.addClass('result-containner-show');
});