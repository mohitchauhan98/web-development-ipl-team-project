$(document).ready(function(){
    var teamInfo=JSON.parse(localStorage.getItem("teamInfo"));
    $(".team-img").attr("src",teamInfo.teamIcon);
    $(".team-name").html(teamInfo.teamName);
    $(".player-count").html(teamInfo.playerCount);
    $(".top-batsman").html(teamInfo.topBatsman);
    $(".top-bowler").html(teamInfo.topBowler);
    $(".matches-won").html(teamInfo.matchesWon);

    var List=[
    {
        "Name":"Mitchell Marsh",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c191412/mitchell-marsh.jpg"
    },
    {
        "Name":"Ravi Bishnoi",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.sportzcraazy.com/wp-content/uploads/elementor/thumbs/ravi-bishnoi-kkr-ovy5wc450rgl55e1of3qno77xpnp291ocdspz9xnqo.png"
    },
    {
        "Name":"Chris Gayle",
        "Role":"Batsman",
        "Team":"KXIP",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/West%20Indies/ODIWC19/Chris-Gayle-CWC19.ashx"
    },
    {
        "Name":"Priyam Garg",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 1.9 Cr",
        "playingStatus":"Playing",
        "photo":"https://spiderimg.amarujala.com/assets/images/cricket/93957.jpg"
    },
    {
        "Name":"Virat Singh",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 1.9 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/298200/298202.10.jpg"
    },
    {
        "Name":"Rahul Chahar",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 1.9 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.infoknocks.com/wp-content/uploads/2020/09/Rahul-Chahar.jpg"
    },
        {
        "Name":"Virat Kohli",
        "Role":"Batsman",
        "Team":"RCB",
        "Price":"Rs 17 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
    },
    {
        "Name":"Pat Cummins",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 15.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170651/pat-cummins.jpg"
    },
    {
        "Name":"Rohit Sharma",
        "Role":"Batsman",
        "Team":"MI",
        "Price":"Rs 15 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170658/rohit-sharma.jpg"
    },
    {
        "Name":"Mahendra Singh Dhoni",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"CSK",
        "Price":"Rs 15 Cr",
        "playingStatus":"Playing",
        "photo":"https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
    },
    {
        "Name":"Ben Stokes",
        "Role":"All-Rounder",
        "Team":"RR",
        "Price":"Rs 12.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/England/Ben-Stokes-CWC19.ashx"
    },
    {
        "Name":"David Warner",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 12 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170635/david-warner.jpg"
    },
    {
        "Name":"AB de Villiers",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RCB",
        "Price":"Rs 11 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170999/ab-de-villiers.jpg"
    },
    {
        "Name":"Suresh Raina",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 11 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg"
    },
    {
        "Name":"Hardik Pandya",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 11 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170666/hardik-pandya.jpg"
    },
    {
        "Name":"Manish Pandey",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 11 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171022/manish-pandey.jpg"
    },
    {
        "Name":"KL Rahul",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"KXIP",
        "Price":"Rs 11 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170673/kl-rahul.jpg"
    },
    {
        "Name":"Rashid Khan",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 9 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/320500/320506.png"
    },
    {
        "Name":"Krunal Pandya",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 8.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171069/krunal-pandya.jpg"
    },
    {
        "Name":"Bhuvneshwar Kumar",
        "Role":"Bowler",
        "Team":"SRH",
        "Price":"Rs 8.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170689/bhuvneshwar-kumar.jpg"
    },
    {
        "Name":"Sunil Narine",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 8.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c152654/sunil-narine.jpg"
    },
    {
        "Name":"Rishabh Pant",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"DC",
        "Price":"Rs 8 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171010/rishabh-pant.jpg"
    },
    {
        "Name":"Sanju Samson",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RR",
        "Price":"Rs 8 Cr",
        "playingStatus":"Playing",
        "photo":"https://im.rediff.com/cricket/2020/sep/28sanju-samson1.JPG"
    },
    {
        "Name":"Shimron Hetmyer",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 7.75 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171232/shimron-hetmyer.jpg"
    },
    {
        "Name":"R Ashwin",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 7.6 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153372/ravichandran-ashwin.jpg"
    },
    {
        "Name":"Dinesh Karthik",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"KKR",
        "Price":"Rs 7.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://im.rediff.com/cricket/2021/jul/02karthik.jpg?w=670&h=900"
    },
    {
        "Name":"Jofra Archer",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 7.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://i.guim.co.uk/img/media/222fd725105c50c4504d75a4aa033ab89d69c7c5/2160_217_4080_2448/master/4080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0afa096498a63191392d9f14afa1360a"
    },
    {
        "Name":"Jasprit Bumrah",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 7 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319940.png"
    },
    {
        "Name":"Ravindra Jadeja",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 7 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170670/ravindra-jadeja.jpg"
    },
    {
        "Name":"Shreyas Iyer",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 7 Cr",
        "playingStatus":"Playing",
        "photo":"https://i.pinimg.com/originals/6c/5b/4e/6c5b4ef9a46cc5b2dce4eb27f3fefdfe.jpg"
    },
    {
        "Name":"Andre Russell",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 7 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170821/andre-russell.jpg"
    },
    {
        "Name":"Dwayne Bravo",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 6.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171033/dwayne-bravo.jpg"
    },
    {
        "Name":"Ishan Kishan",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"MI",
        "Price":"Rs 6.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c203833/ishan-kishan.jpg"
    },
    {
        "Name":"Yuzvendra Chahal",
        "Role":"Bowler",
        "Team":"RCB",
        "Price":"Rs 6 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170690/yuzvendra-chahal.jpg"
    },
    {
        "Name":"Kuldeep Yadav",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 5.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319943.png"
    },
    {
        "Name":"Sam Curran",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 5.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://d2gjl3w70qc898.cloudfront.net/content/uploads/2020/10/14104346/Cricket365-Sam-Curran-IPL.jpg"
    },
    {
        "Name":"Kieron Pollard",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 5.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171071/kieron-pollard.jpg"
    },
    {
        "Name":"Eoin Morgan",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 5.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316564.png"
    },
    {
        "Name":"Shikhar Dhawan",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 5.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg"
    },
    {
        "Name":"Karn Sharma",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 5 Cr",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/1118.png"
    },
    {
        "Name":"Axar Patel",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 5 Cr",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/A9.png"
    },
    {
        "Name":"Mohammad Shami",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 4.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/297800/297864.10.jpg"
    },
    {
        "Name":"Marcus Stoinis",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 4.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321500/321596.png"
    },
    {
        "Name":"Jos Butler",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RR",
        "Price":"Rs 4.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316642.png"
    },
    {
        "Name":"Kagiso Rabada",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 4.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170759/kagiso-rabada.jpg"
    },
    {
        "Name":"Nicholas Pooran",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"KXIP",
        "Price":"Rs 4.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/320100/320109.png"
    },
    {
        "Name":"Varun Chakravarthy",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c196703/varun-chakravarthy.jpg"
    },
    {
        "Name":"Kane Richardson",
        "Role":"Bowler",
        "Team":"RCB",
        "Price":"Rs 4 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/321500/321594.png"
    },
    {
        "Name":"Ajinkya Rahane",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171082/ajinkya-rahane.jpg"
    },
    {
        "Name":"Amit Mishra",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153362/amit-mishra.jpg"
    },
    {
        "Name":"Nitish Rana",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 3.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171047/nitish-rana.jpg"
    },
    {
        "Name":"Vijay Shankar",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://resources.pulse.icc-cricket.com/players/284/1083.png"
    },
    {
        "Name":"Suryakumar Yadav",
        "Role":"Batsman",
        "Team":"MI",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c196666/suryakumar-yadav.jpg"
    },
    {
        "Name":"Kamlesh Nagarkoti",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/271800/271894.jpg"
    },
    {
        "Name":"Washington Sundar",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/India/Washington-Sundar-T20I2020.ashx"
    },
    {
        "Name":"Navdeep Saini",
        "Role":"Bowler",
        "Team":"RCB",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322700/322702.png"
    },
    {
        "Name":"Kane Williamson",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/312900/312908.4.jpg"
    },
    {
        "Name":"Rahul Tewatia",
        "Role":"All-Rounder",
        "Team":"RR",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c196288/rahul-tewatia.jpg"
    },
    {
        "Name":"Jaydev Unadkat",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c169793/jaydev-unadkat.jpg"
    },
    {
        "Name":"Robin Uthappa",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RR",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/166700/166785.3.jpg"
    },
    {
        "Name":"Chris Jordan",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c148144/chris-jordan.jpg"
    },
    {
        "Name":"Shivam Mavi",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 3 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c155147/shivam-mavi.jpg"
    },
    {
        "Name":"Quinton de Kock",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"MI",
        "Price":"Rs 2.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170698/quinton-de-kock.jpg"
    },
    {
        "Name":"Mohammad Siraj",
        "Role":"Bowler",
        "Team":"RCB",
        "Price":"Rs 2.6 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171039/mohammed-siraj.jpg"
    },
    {
        "Name":"Shardul Thakur",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 2.6 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322600/322696.png"
    },
    {
        "Name":"Yashasvi Jaiswal",
        "Role":"Batsman",
        "Team":"RR",
        "Price":"Rs 2.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://i.pinimg.com/originals/4b/ec/d9/4becd94b11ab388db459edc6ce5fa0bd.jpg"
    },
    {
        "Name":"Trent Boult",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 2.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316600/316619.png"
    },
    {
        "Name":"Ambati Rayudu",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 2.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171012/ambati-rayudu.jpg"
    },
    {
        "Name":"Jonny Bairstow",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"SRH",
        "Price":"Rs 2.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/England/Jonny-Bairstow-CWC19.ashx"
    },
    {
        "Name":"Chris Lynn",
        "Role":"Batsman",
        "Team":"MI",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c154633/chris-lynn.jpg"
    },
    {
        "Name":"Josh Hazlewood",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/Australia/Josh-Hazlewood-ODI2020.ashx"
    },
    
    {
        "Name":"Shubman Gill",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 1.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322600/322697.png"
    },
    {
        "Name":"Faf du Plessis",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 1.6 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170639/faf-du-plessis.jpg"
    },
    {
        "Name":"Lockie Ferguson",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 1.6 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321200/321239.png"
    },
    {
        "Name":"Chris Woakes",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 1.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://resources.ecb.co.uk/player-photos/test/480x480/967.png"
    },
    {
        "Name":"Adam Zampa",
        "Role":"Bowler",
        "Team":"RCB",
        "Price":"Rs 1.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321500/321549.png"
    },
    {
        "Name":"Mandeep Singh",
        "Role":"Batsman",
        "Team":"KXIP",
        "Price":"Rs 1.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://staticg.sportskeeda.com/editor/2018/03/59e07-1521020491-800.jpg"
    },
    {
        "Name":"Kartik Tyagi",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 1.3 Cr",
        "playingStatus":"Playing",
        "photo":"https://starsunfolded.com/wp-content/uploads/2020/10/Kartik-Tyagi.jpg"
    },
    {
        "Name":"Wriddhiman Saha",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"SRH",
        "Price":"Rs 1.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171058/wriddhiman-saha.jpg"
    },
    {
        "Name":"Prithvi Shaw",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 1.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/~/-/media/News/2019/07/30Shaw.ashx?w=1600"
    },
    {
        "Name":"Ishant Sharma",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 1.1 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c154520/ishant-sharma.jpg"
    },
    {
        "Name":"Imran Tahir",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/316500/316526.png"
    },
    {
        "Name":"Andrew Tye",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321500/321558.png"
    },
    {
        "Name":"Mayank Agarwal",
        "Role":"Batsman",
        "Team":"KXIP",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/India/Mayank-Agarwal-T20I2020.ashx"
    },
    {
        "Name":"Shreevats Goswami",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"SRH",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/2L.png"
    },
    {
        "Name":"Mohammad Nabi",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170853/mohammad-nabi.jpg"
    },
    {
        "Name":"Rinku Singh",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 80 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c187877/rinku-singh.jpg"
    },
    {
        "Name":"Anuj Rawat",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RR",
        "Price":"Rs 80 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_s_100_2x/lsci/db/PICTURES/CMS/320900/320909.jpg"
    },
    {
        "Name":"Anmolpreet Singh",
        "Role":"Batsman",
        "Team":"MI",
        "Price":"Rs 80 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/images/players/small/65438.png"
    },
    {
        "Name":"Deepak Chahar",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 80 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322700/322704.png"
    },
    {
        "Name":"David Miller",
        "Role":"Batsman",
        "Team":"RR",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170687/david-miller.jpg"
    },
    {
        "Name":"Dhawal Kulkarni",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c156291/dhawal-kulkarni.jpg"
    },
    {
        "Name":"Jason Holder",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170806/jason-holder.jpg"
    },
    {
        "Name":"Avesh Khan",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 70 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/321500/321513.10.jpg"
    },
    {
        "Name":"Rahul Tripathi",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 60 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.cricexec.com/wp-content/uploads/2020/10/3-7.jpg"
    },
    {
        "Name":"Prabhsimran Singh",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"KXIP",
        "Price":"Rs 55 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/EN.png"
    },
    {
        "Name":"Abhishek Sharma",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 55 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153963/abhishek-sharma.jpg"
    },
    {
        "Name":"Saurabh Tiwary",
        "Role":"Batsman",
        "Team":"MI",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/4H.png"
    },
    {
        "Name":"Deepak Hooda",
        "Role":"Batsman",
        "Team":"KXIP",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://ss.thgim.com/photos/article33544336.ece/alternates/FREE_380/DEEPAKHOODA-1jpg"
    },
    {
        "Name":"Lungi Ngidi",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170761/lungi-ngidi.jpg"
    },
    {
        "Name":"Mitchell Santner",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170741/mitchell-santner.jpg"
    },
    {
        "Name":"Anrich Nortje",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/322000/322080.png"
    },
    {
        "Name":"KM Asif",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 40 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://imagevars.gulfnews.com/2020/09/10/20200910-K.M.-Asif_17475f74794_large.jpg"
    },
    {
        "Name":"Darshan Nalkande",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 30 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/4447.png"
    },
    {
        "Name":"Sarfaraz Khan",
        "Role":"Batsman",
        "Team":"KXIP",
        "Price":"Rs 25 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://staticg.sportskeeda.com/editor/2018/03/5e302-1521017782-800.jpg"
    },
    {
        "Name":"Prasidh Krishna",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/318000/318082.6.jpg"
    },
    {
        "Name":"Sandeep Warrier",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://spiderimg.amarujala.com/assets/images/cricket/54291.jpg"
    },
    {
        "Name":"Tim Seifert",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c154935/tim-seifert.jpg"
    },
    {
        "Name":"Riyan Parag",
        "Role":"Batsman",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c156160/riyan-parag.jpg"
    },
    {
        "Name":"Murugan Ashwin",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.indiafantasy.com/wp-content/uploads/2019/04/12d5974af2364102583dd2487fb1705a-1200x1247.jpg"
    },
    {
        "Name":"Arshdeep Singh",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/312300/312341.3.jpg"
    },
    {
        "Name":"Ishan Porel",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c155503/ishan-porel.jpg"
    },
    {
        "Name":"Harpreet Brar",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://cdn.insidesport.co/wp-content/uploads/2021/04/03155920/Harpreet-Brar1.jpg"
    },
    {
        "Name":"Anukul Roy",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/images/players/small/66983.png"
    },
    {
        "Name":"Aditya Tare",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/images/players/small/5435.png"
    },
    {
        "Name":"Jayant Yadav",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/images/players/small/59611.png"
    },
    {
        "Name":"Manan Vohra",
        "Role":"Batsman",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.crictracker.com/wp-content/uploads/2019/05/Manan-Vohra.jpg"
    },
    {
        "Name":"Mohsin Khan",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.infoknocks.com/wp-content/uploads/2020/09/Mohsin-Khan.jpg"
    },
    {
        "Name":"Mahipal Lomror",
        "Role":"Batsman",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/CK.png"
    },
    {
        "Name":"Shreyas Gopal",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/1748.png"
    },
    {
        "Name":"Mayankh Markande",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/04/09/669902-mayank-markande..jpg"
    },
    {
        "Name":"Abdul Samad",
        "Role":"Batsman",
        "Team":"SRH",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/295300/295304.jpg"
    },
    {
        "Name":"Shahbaz Ahmed",
        "Role":"All=Rounder",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Shahbaz%20800%20x%201200.png"
    },
    {
        "Name":"Pawan Deshpande",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/4957.png"
    },
    {
        "Name":"Devdutt Padikkal",
        "Role":"Batsman",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/600x400/i1/c192831/an-ipl-debut-for-devdutt-padikkal-this-year-will-perfectly-align-with-his-sharp-rise-in-indian-cricket.jpg"
    },
    {
        "Name":"Josh Philippe",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/321600/321602.png"
    },
    {
        "Name":"S Rai Kishore",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/10/R-Sai-Kishore-with-the-Vijay-Hazare-Trophy-after-winning-the-game.jpg"
    },
    {
        "Name":"N Jagadeesan",
        "Role":"Batsman/Wicket-Keeper",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/4942.png"
    },
    {
        "Name":"Ruturaj Gaikwad",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/322200/322236.png"
    },
    {
        "Name":"Pravin Dubey",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://images.outlookindia.com/public/uploads/articles/2020/10/19/Pravin-Dubey-DC-IPL_571_855.jpg"
    },
    {
        "Name":"Lalit Yadav",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_s_100_2x/lsci/db/PICTURES/CMS/320700/320746.jpg"
    },
    {
        "Name":"Krishnappa Gowtham",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 9.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/3834.png"
    },
    {
        "Name":"Moeen Ali",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 7 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/England/Moeen-Ali-CWC19.ashx"
    },
    {
        "Name":"Cheteshwar Pujara",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/India/Test-2021/Cheteshwar-Pujara-Test2021.ashx"
    },
    {
        "Name":"K.Bhagath Varma",
        "Role":"All-Rounder",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://moneyball.insidesport.co/img/singleplayer/Bhagath%20Varma1686.jpg"
    },
    {
        "Name":"C Hari Nishaanth",
        "Role":"Batsman",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"http://cricket.upcomingwiki.com/public/images/gallery/65849.png"
    },
    {
        "Name":"M Harishankar Reddy",
        "Role":"Bowler",
        "Team":"CSK",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.cricgram.com/file/2021/04/Harishankar-Reddy.jpeg"
    },
    {
        "Name":"Tom Curran",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 5.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/323100/323112.png"
    },
    {
        "Name":"Steven Smith",
        "Role":"Batsman",
        "Team":"DC",
        "Price":"Rs 2.20 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170624/steven-smith.jpg"
    },
    {
        "Name":"Sam Billings",
        "Role":"Wicket-Keeper",
        "Team":"DC",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c156173/sam-billings.jpg"
    },
    {
        "Name":"Umesh Yadav",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153874/umesh-yadav.jpg"
    },
    {
        "Name":"Ripal Patel",
        "Role":"All-Rounder",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/295100/295156.1.jpg"
    },
    {
        "Name":"Vishnu Vinod",
        "Role":"Wicket-Keeper",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUJMXnsieTpXHK33DlIheD_WCDyhVDM5iE2SL_mYevQGarsOLYReiqcQZjwemaltcySI&usqp=CAU"
    },
    {
        "Name":"Lukman Hussain Meriwala",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://cricshots.com/wp-content/uploads/2021/04/lukman-meriwala.jpg"
    },
    {
        "Name":"M Siddhartha",
        "Role":"Bowler",
        "Team":"DC",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://starsunfolded.com/wp-content/uploads/2021/05/Manimaran-Siddharth-for-Tamil-Nadu-team.jpg"
    },
    {
        "Name":"Shakib Al Hasan",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://resources.pulse.icc-cricket.com/players/284/201.png"
    },
    {
        "Name":"Harbhajan Singh",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319900/319937.png"
    },
    {
        "Name":"Ben Cutting",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c171073/ben-cutting.jpg"
    },
    {
        "Name":"Karun Nair",
        "Role":"Batsman",
        "Team":"KKR",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/7K.png"
    },
    {
        "Name":"Pawan Negi",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c153913/pawan-negi.jpg"
    },
    {
        "Name":"Venkatesh Iyer",
        "Role":"All-Rounder",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://cdn.insidesport.co/wp-content/uploads/2021/04/11003636/ad.jpg"
    },
    {
        "Name":"Sheldon Jackson",
        "Role":"Wicket-Keeper",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"http://cricfit.com/wp-content/uploads/2016/07/Sheldon-Jackson.jpg"
    },
    {
        "Name":"Vaibhav Arora",
        "Role":"Bowler",
        "Team":"KKR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/14859.png"
    },
    {
        "Name":"Nathan Coulter-Nile",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 5 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/Australia/Nathan-Coulter-Nile-CWC19.ashx"
    },
    {
        "Name":"Adam Milne",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 3.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/New%20Zealand/Adam-Milne-CT17.ashx"
    },
    {
        "Name":"Piyush Chawla",
        "Role":"Bowler",
        "Team":"MI",
        "Price":"Rs 2.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://st3.cricketcountry.com/wp-content/uploads/cricket/20140529095533.jpeg"
    },
    {
        "Name":"James Neesham",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 50 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/319700/319781.png"
    },
    {
        "Name":"Yudhvir Charak",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/images/players/large/74054.png?v=1.34&w=400"
    },
    {
        "Name":"Marco Jansen",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mumbaiindians.com/static-assets/waf-images/7b/81/dd/4-3/592-444/LLo1rJkSgs.jpg"
    },
    {
        "Name":"Arjun Tendulkar",
        "Role":"All-Rounder",
        "Team":"MI",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://images.outlookindia.com/public/uploads/articles/2021/2/18/Arjun-Tendulkar-Twitter_571_855.jpg"
    },
    {
        "Name":"Jhye Richardson",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 14 Cr",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/GS.png"
    },
    {
        "Name":"Riley Meredith",
        "Role":"Bowler",
        "Team":"KXIP",
        "Price":"Rs 8 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c155663/riley-meredith.jpg"
    },
    {
        "Name":"Shahrukh Khan",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 5.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://static.toiimg.com/thumb/msid-81094925,width-1200,height-900,resizemode-4/.jpg"
    },
    {
        "Name":"Moises Henriques",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 4.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/Australia/Moises-Henriques-ODI2020.ashx"
    },
    {
        "Name":"Dawid Malan",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 1.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://c.ndtvimg.com/2020-09/nqm6km4o_dawid-malan-england-vs-australia-afp_625x300_07_September_20.jpg?q=60"
    },
    {
        "Name":"Fabian Allen",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://img1.hscicdn.com/image/upload/f_auto,t_gn_f_345/lsci/db/PICTURES/CMS/321900/321999.png"
    },
    {
        "Name":"Jalaj Saxena",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 30 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://starsunfolded.com/wp-content/uploads/2021/01/All-rounder-Jalaj-Saxena.jpg"
    },
    {
        "Name":"Saurabh Kumar",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://storage.googleapis.com/cricketimages/Players/DX.png"
    },
    {
        "Name":"Utkarsh Singh",
        "Role":"All-Rounder",
        "Team":"KXIP",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.mykhel.com/thumb/247x100x233/cricket/players/8/11078.jpg"
    },
    {
        "Name":"Christopher Morris",
        "Role":"All-Rounder",
        "Team":"RR",
        "Price":"Rs 16.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170696/chris-morris.jpg"
    },
    {
        "Name":"Shivam Dube",
        "Role":"All-Rounder",
        "Team":"RR",
        "Price":"Rs 4.4 Cr",
        "playingStatus":"Playing",
        "photo":"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/12/05/884044-shivam-dube.jpg"
    },
    {
        "Name":"Chetan Sakariya",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 1.2 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c169708/chetan-sakariya.jpg"
    },
    {
        "Name":"Mustafizur Rahman",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 1 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Mustafizur-Rahman-CWC19.ashx"
    },
    {
        "Name":"Liam Livingstone",
        "Role":"All-Rounder",
        "Team":"RR",
        "Price":"Rs 75 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/323100/323103.png"
    },
    {
        "Name":"K C Cariappa",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"http://cricclubs.com/documentsRep/profilePics/66fcbef5-a3bc-441d-80e0-41025585dbd0.jpg"
    },
    {
        "Name":"Akash Singh",
        "Role":"Bowler",
        "Team":"RR",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://starsunfolded.com/wp-content/uploads/2021/01/Akash-Singh-Rajasthan-Royals.jpg"
    },
    {
        "Name":"Kyle Jamieson",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 15 Cr",
        "playingStatus":"Playing",
        "photo":"https://navbharattimes.indiatimes.com/thumb/msid-74237534,width-1200,height-900,resizemode-75/pic.jpg"
    },
    {
        "Name":"Glenn Maxwell",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 14.25 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170641/glenn-maxwell.jpg"
    },
    {
        "Name":"Dan Christian",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 4.8 Cr",
        "playingStatus":"Playing",
        "photo":"https://www.espncricinfo.com/db/PICTURES/CMS/321500/321572.png"
    },
    {
        "Name":"Sachin Baby",
        "Role":"Batsman",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://ss.thgim.com/cricket/article19728182.ece/alternates/FREE_380/SACHIN%20BABY"
    },
    {
        "Name":"Rajat Patidar",
        "Role":"Batsman",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.toiimg.com/photo/imgsize-,msid-49700450/49700450.jpg"
    },
    {
        "Name":"Suyash Prabhudesai",
        "Role":"All-Rounder",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Suyash%20800%20x%201200.png"
    },
    {
        "Name":"KS Bharat",
        "Role":"Wicket-Keeper",
        "Team":"RCB",
        "Price":"Rs 20 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Bharat%20800%20x%201200.png"
    },
    {
        "Name":"Kedar Jadav",
        "Role":"All-Rounder",
        "Team":"SRH",
        "Price":"Rs 2 Cr",
        "playingStatus":"Playing",
        "photo":"https://timesofindia.indiatimes.com/photo/69256946.cms"
    },
    {
        "Name":"Mujeeb Zadran",
        "Role":"Bowler",
        "Team":"SRH",
        "Price":"Rs 1.5 Cr",
        "playingStatus":"Playing",
        "photo":"https://m.cricbuzz.com/a/img/v1/192x192/i1/c170865/mujeeb-ur-rahman.jpg"
    },
    {
        "Name":"J Suchith",
        "Role":"Bowler",
        "Team":"SRH",
        "Price":"Rs 30 Lakhs",
        "playingStatus":"Playing",
        "photo":"https://static.iplt20.com/players/210/2741.png"
    }];
    var playerList=[];
    for(var i=0;i<List.length;i++){
        if(teamInfo.teamName==List[i].Team){
            playerList.push(List[i]);
        }
    }
    console.log(playerList);

    for(var j=0;j<playerList.length;j++){
        var button=$("<a>").addClass("button").attr("href","./Infopage.html").html("View");
        var price=$("<p>").addClass("card-text").html(playerList[j].Price);
        var title=$("<h5>").addClass("card-title").html(playerList[j].Name);
        var text= $("<div>").addClass("card-wrapper").append(title,price,button);
        var icon=$("<img>").attr("src",playerList[j].photo).addClass("player-image");
        var card=$("<div>").addClass("player-wrapper").css("width","18rem");
       
        card.append(icon,text);
        $(".player-card").append(card);

        var getvalue4 = playerList[j].Team
    }

    

    $(".button").click(function(){
        for(var i=0;i<playerList.length;i++){
            if($(this).siblings("h5").html()==playerList[i].Name){
                localStorage.setItem("playerInfo",JSON.stringify(playerList[i]));
            }
        }
    });
    $('.search-box').on("keyup", function() {
        var value = $(this).val().toUpperCase();
        $(".player-wrapper").each(function(){
            var found="false";
            var title=$(this).children(".card-wrapper").children(".card-title").html().toUpperCase();
            if(title.indexOf(value)>=0)
            found="true";
            if(found=="true")
            $(this).show();
            else
            $(this).hide();
        });
      });

    $("button").click(function(){
        $("#form").show();
    })

    $("#form").submit(function(event){
        event.preventDefault()
    var getvalue1 = $("#player-name").val()
    var getvalue2 = $("#player-image").val()
    var getvalue3 = $("#player-price").val()
    console.log(getvalue1,getvalue2,getvalue3)
    
    var playerList={
        "Name":getvalue1,
        "photo":getvalue2,
        "Price":getvalue3,
        "playingStatus":"Playing",
        "Team":getvalue4
        
    }
    console.log(JSON.stringify(playerList))
    localStorage.setItem("playerList",JSON.stringify(playerList));

    $("#form").hide();

    var button=$("<a>").addClass("button").html("View");
    var price=$("<p>").addClass("card-text").html(getvalue3);
    var title=$("<h5>").addClass("card-title").html(getvalue1);
    var text= $("<div>").addClass("card-wrapper").append(title,price,button);
    var icon=$("<img>").attr("src",getvalue2).addClass("player-image");
    var card=$("<div>").addClass("player-wrapper").css("width","18rem");
    card.append(icon,text);
    $(".player-card").append(card);

})



});