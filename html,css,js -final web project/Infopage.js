$(document).ready(function(){
    var playerInfo=JSON.parse(localStorage.getItem("playerInfo"));
    $(".pic").attr("src",playerInfo.photo);
    $(".name").html(playerInfo.Name);
    $(".team").html(playerInfo.Team);
    $(".price").html(playerInfo.Price);
    $(".status").html(playerInfo.playingStatus);
    $(".role").html(playerInfo.Role);
})