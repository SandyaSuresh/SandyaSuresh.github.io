// NavBar and Footer Info
// https://stackoverflow.com/a/70488082

//Making popups
// https://www.w3schools.com/howto/howto_js_popup.asp

//Using the video tag
//https://www.w3schools.com/tags/tag_video.asp

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
        <video controls class="popupcontent" id="video"> 
        <source src="` + video + `" type="video/mp4"></video>
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

function parkingClick(){
    let desc = `I worked on thisproject at my most recent internship with in a group 5of 5 interns.
                The motivation for this project was to help track the number of cars entering and
                exiting a parking lot at a the beginning and end of the day to see when there is the
                most traffic and how heavy the flow is. For this project, we used a RaspberryPi2 with a
                RPICam 2. Initially, we tried using multiple Grove ultrasonic senors with ESP32 boards, 
                but we weren't able to get the boards, so we pivoted our plan with 2-3 weeks left. In this time,
                we tried to get a computer vision model working from the angles that were avialable to us and
                dealing with issues of the pi over heating. Eventually we decided that since we were powering the pi
                with a battery pack, there was only so long the recording could go for an allowed the pi to run at 
                full clock speed so that the image processing would be faster and wouldn't slow down the frame rate.`;
    makePopup("videos/Parking-Conter.mp4", "", "Parking Counter", desc);
    toggleshow();
}

function garpClick(){
    let desc = `I worked on this research project my freshmen year of college with a group of 3 as my
                final project for a class. The goal of this project was to develop genetic algorithms
                that evolve and optimize for a certain pixelated image that the user could input. We also
                created a graph that would display the evaluated fitness over time of these organisms and
                could give us some insight into which fitness functions worked well and which ones didn't.
                I really enjoyed this project and it got me somewhat interested in genetic algorithms and 
                using it develop designs.`;
    makePopup("videos/GARP-Iteration-Graph.mp4", "", "Genetic Algorithm Research Project", desc);
    toggleshow();
}

function origamiClick(){
    let desc = `I worked on this research project with a PhD student at UCSC during high school.
                The objective was to use purely physical characterstics to simulate a hand with joints.
                We tested many different shapes and angles to find the optimal and most realistic way to
                connect these acutator pouches in order to generate the largest range of motion and most
                smooth path. For this research, I generated a lot of figures and graphs based on the 
                simulation data that I also gathered. I also CADed the hand and ran the simulations to get
                multiple kinds of data to be thorough.`;
    makePopup("videos/Hand-with-Stand.mp4", "", "Origami Robot", desc);
    toggleshow();
}

function uselessAlarmClick(){
    let desc = `For this assignment in my mechatronics class, we were allowed to make whatever 
                project we wanted as long as it required some electrical, mechanical, and computer 
                engineering knowledge. My group made a useless alarm clock just by using the
                Arduino Mega kit that we had bought for the class and using our school's resources
                to lsaer cut the box. For thiz project, we had to learn to solder and about protocols
                that would interfere with LCDs and RTC modules. By the end, we weren't able to implement
                all of our desired functionality, but the product was minimally viable. The essence is that
                the alarm clock will go off at a time and the user will not be able to turn it off without
                scanning the rf tag.`;
    makePopup("videos/Useless-Alarm-Clock.mp4", "", "Useless Alarm Clock", desc);
    toggleshow();
}