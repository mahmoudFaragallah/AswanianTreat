$(document).ready(function () {
    console.log("hello mahmoud");

    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");

    // Anonymous function
    button.on("click", function () {
        console.log("Buying Item");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You Clicked on" + $(this).text());
    });


    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(200);
    })
});