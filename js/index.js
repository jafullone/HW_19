console.log("It worked! Niiice!");
// $(".skills").click(function() {
//     console.log("skills clicked");
// }
// )
// $(".skills").click(function() {
    
// }
$(".skills").on("click", function() {
    console.log('hi');
    $('html, body').animate({
        scrollTop: $(".skillsHead").offset().top});
}
)