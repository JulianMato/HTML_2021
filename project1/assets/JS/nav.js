function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("search").style.marginLeft = "250px";
    document.getElementById("socialBar").style.marginLeft = "250px";
    document.getElementById("conar").style.marginLeft = "250px";
    document.getElementById("portrat").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("search").style.marginLeft= "0";
    document.getElementById("socialBar").style.marginLeft= "0";
    document.getElementById("conar").style.marginLeft= "0";
    document.getElementById("portrat").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}