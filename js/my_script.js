/*$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
});*/


/*$(document).ready(function() {
    $("h2").addClass("underline"); //underlines all <h2> elements
    $("ul").addClass("border");//adds border to all lists
})*/


$(document).ready(function() {
    $("th").click(function() {
        $("tr").children().removeClass("makeOrange");
        $(this).siblings().addClass("makeOrange");
    });
});