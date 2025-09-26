// NavBar and Footer Info
// https://stackoverflow.com/a/70488082

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