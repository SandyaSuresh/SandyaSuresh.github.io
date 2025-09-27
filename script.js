// NavBar and Footer Info
// https://stackoverflow.com/a/70488082

//Making popups
// https://www.w3schools.com/howto/howto_js_popup.asp

let navBar = `
<nav>
    <ul class="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="resume.html">Resume</a></li>
    </ul>
</nav>`;



let footer = `
<nav>
    <ul class="foot">
        <li><a href="https://linkedin.com/in/sandyasuresh">LinkedIn</a></li>
        <li><a href="https://github.com/SandyaSuresh">Github</a></li>
    </ul>
</nav>`;


window.addEventListener('DOMContentLoaded', function (){
    document.getElementsByClassName("nav-bar")[0].innerHTML = navBar;
    document.getElementsByClassName("footer")[0].innerHTML = footer;
});

function makePopup(video, image, title, text){
    let div = document.getElementById("popup");
    div.innerHTML = `
    <h4 class="popupcontent">` + title + `</h4>
    <div class="popupcontent">
        <video class="popupcontent" id="video" src="` + video + `" type="video/mp4"></video>
        <p class="popupcontent">` + text +  `</p>
        <button class="popupcontent" onclick="toggleshow()">close</button>
    </div>
    `;

}

function toggleshow(){
    console.log("hi");
    let popup = document.getElementById("popup");
    if(popup.style.visibility == "visible"){
        popup.style.visibility="hidden";
    }else{
        popup.style.visibility="visible";
    }

}

function uselessAlarmClick(){
    console.log("clickerd");
    let desc = "adfad";
    makePopup("videos/Useless-Alarm-Clock.mp4", "", "Useless Alarm Clock", desc);
    toggleshow();
}