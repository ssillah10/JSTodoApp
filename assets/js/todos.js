$("ul").on("click","li", function(){
    $(this).toggleClass("done");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13 && $(this).val() !== ""){
        let newTodo = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newTodo+"</li>");
        $(this).val("");
    }
})

$(".fa-plus").click(function(){
    $("#todoInput").fadeToggle();
})