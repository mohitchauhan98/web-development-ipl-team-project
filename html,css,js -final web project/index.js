$(document).ready(function(){
    var obj=[
        {
            teamName:"MI",
            teamIcon:"./mumbai_logo.jpg",
            playerCount:14,
            topBatsman:"Rohit Sharma",
            topBowler:"Lasith Malinga",
            matchesWon:5
        },
        {
            teamName:"SRH",
            teamIcon:"./SRH_logo.jpg",
            playerCount:22,
            topBatsman:"David Warner",
            topBowler:"Rashid Khan",
            matchesWon:2
        },
        {
            teamName:"DC",
            teamIcon:"./DC_logo.jpg",
            playerCount:19,
            topBatsman:"Virender Sehwag",
            topBowler:"Kagiso Rabada",
            matchesWon:0
        },
        {
            teamName:"KXIP",
            teamIcon:"./kings_logo.jpg",
            playerCount:16,
            topBatsman:"Dawid Malan",
            topBowler:"Piyush Chawla",
            matchesWon:0
        },
        {
            teamName:"CSK",
            teamIcon:"./CSK_logo.jpg",
            playerCount:25,
            topBatsman:"Suresh Raina",
            topBowler:"Dwayne Bravo",
            matchesWon:3
        },
        {
            teamName:"RR",
            teamIcon:"./RR_logo.jpg",
            playerCount:17,
            topBatsman:"Shivam Dube",
            topBowler:"Jofra Archer",
            matchesWon:1
        },
        {
            teamName:"RCB",
            teamIcon:"./RCB_logo.jpg",
            playerCount:12,
            topBatsman:"David Warner",
            topBowler:"Yuzvendra Chahal",
            matchesWon:1 
        },
        {
            teamName:"KKR",
            teamIcon:"./KKR_logo.jpg",
            playerCount:17,
            topBatsman:"Shubman Gill",
            topBowler:"Varun Chakravarthy",
            matchesWon:2
        }
    ];

    $("button").click(function(){
        $("#form").show();
    })

    $("#form").submit(function(event){
        event.preventDefault()
    var getvalue1 = $("#team-name").val()
    var getvalue2 = $("#team-image").val()
    console.log(getvalue1,getvalue2)
    
    var obj={
        teamName:getvalue1,
        teamIcon:getvalue2
    }
    console.log(JSON.stringify(obj))
    localStorage.setItem("obj",JSON.stringify(obj));
    
    $("#form").hide();

    var teamCard = document.getElementById("items")


    function teams(){

        var teamGrid = document.createElement('div');
        teamGrid.classList.add("grid")

        var logo = document.createElement('img');
        logo.src = getvalue2
        logo.classList.add("image")
        teamGrid.appendChild(logo)

        var teamName = document.createElement('h4')
        teamName.classList.add("top-left")
        teamName.innerHTML = getvalue1
        teamGrid.appendChild(teamName)

        teamCard.appendChild(teamGrid)

        return teamGrid

    }
        teams();
    }); 

    $(".grid1").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[0]));
        location.assign("./detailspage.html"); 
    })
    
    $(".grid2").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[1]));
        location.assign("./detailspage.html"); 
    })

    $(".grid3").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[2]));
        location.assign("./detailspage.html"); 
    })

    $(".grid4").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[3]));
        location.assign("./detailspage.html"); 
    })

    $(".grid5").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[4]));
        location.assign("./detailspage.html"); 
    })

    $(".grid6").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[5]));
        location.assign("./detailspage.html"); 
    })

    $(".grid7").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[6]));
        location.assign("./detailspage.html"); 
    })

    $(".grid8").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[7]));
        location.assign("./detailspage.html"); 
    })

    $('.search-box').on("keyup", function() {
        var value = $(this).val().toUpperCase();
        $(".grid").each(function(){
            var found="false";
            var title=$(this).children(".top-left").html();
            if(title.indexOf(value)>=0)
            found="true";
            if(found=="true")
            $(this).show();
            else
            $(this).hide();
        });
      }); 
})