$(document).ready(function() {
    $("#teams").carousel({interval:2500});
    $("#teams-button").click(function() {
        if($("#teams-button").children("span").hasClass("fa-pause")) {
            $("#teams").carousel("pause");
            $("#teams-button").children("span").removeClass("fa-pause");
            $("#teams-button").children("span").addClass("fa-play");
        }
        else {
            $("#teams").carousel("cycle");
            $("#teams-button").children("span").removeClass("fa-play");
            $("#teams-button").children("span").addClass("fa-pause");
        }
    });
});