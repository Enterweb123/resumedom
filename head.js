 const bodyElement = document.querySelector("body");

// Header
 const header_Element = document.querySelector("header");
      bodyElement.insertBefore(header_Element,bodyElement.firstChild);

 const imgbox = document.createElement("div");
      imgbox.classList.add("imgbox");

 const h1_Element = document.createElement("h1");
      h1_Element.innerHTML=`BRIAN DUDEY`;
      h1_Element.className="headerh1";

 const img_Element = document.createElement("img");
      img_Element.setAttribute("src","./profileimg.jpg");
      img_Element.className="headimg";

 const square = document.createElement("div");
      square.className="square";
      imgbox.append(img_Element)
      imgbox.append(h1_Element)

      console.dir(bodyElement.children[0].appendChild(imgbox));

// header adddres 
const address = document.querySelector(".paratwo");
const addresText = document.createElement("p");
      addresText.innerHTML=`N. Damen Avenue, Chicago 99999 1999-999-9999 | hello@kickresume.com | www.kickresume.com`;
      addresText.className="paratwo";
      addresText.style.textAlign="center";
      addresText.style.padding="10px";
address.append(addresText);
header_Element.after(address);

// row one box1

     const bodyBox1 = document.querySelector(".bodyBox1");
  
     const boxTitle = document.querySelector(".boxTitle1");

     const IconDiv1 = document.querySelector(".IconDiv1")
     const profileIcon = document.createElement("i");
           profileIcon.classList.add("fa-solid", "fa-user");
           IconDiv1.append(profileIcon);

     const profileText = document.createElement("h1");
           profileText.innerHTML="Profile";
           boxTitle.append(profileText)

     const paratag = document.createElement("p");

     paratag.innerText=`Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate`;

     bodyBox1.append(boxTitle);
     bodyBox1.append(paratag);

// row one box2
const bodyBox2 = document.querySelector(".bodyBox2");
  
const boxTitle2 = document.querySelector(".boxTitle2");

const IconDiv2 = document.querySelector(".IconDiv2");

const Skillsicon = document.createElement("i");
      Skillsicon.classList.add("fa-solid", "fa-gear");
      IconDiv2.append(Skillsicon);

      const SkillsText = document.createElement("h1");
            SkillsText.innerHTML="Skills";

            boxTitle2.append(SkillsText);


// skill table1;
const thead1 = document.querySelector('.thead1');
const first_tr = document.createElement("tr");

const first_th = document.createElement("th");
      first_th.setAttribute("colspan","2");

const first_h1 = document.createElement("h1")
      first_h1.innerHTML="Technical Skills";

first_th.append(first_h1);
first_tr.append(first_th);

thead1.append(first_tr);

// skill table1;
const thead2 = document.querySelector('.thead2');
const first_tr2 = document.createElement("tr");

const first_th2 = document.createElement("th");
      first_th2.setAttribute("colspan","2");

const first_h1_2 = document.createElement("h1")
      first_h1_2.innerHTML="Technical Skills";

first_th2.append(first_h1_2);
first_tr2.append(first_th2);

thead2.append(first_tr2);

// skillset

const skillTable1=document.querySelector(".skillTable1");
const skillTable2=document.querySelector(".skillTable2");

function myskils(skillName,barclass){

// 1st tr
const skil_tr = document.createElement("tr");

const skill_td_1=document.createElement("td")
const skill_p = document.createElement("p");
      skill_p.innerHTML=`${skillName}`;

      skill_td_1.append(skill_p);
      skil_tr.append(skill_td_1);

// 2nd tr
const skill_td_2=document.createElement("td");

const progress_bar = document.createElement("div");
      progress_bar.className="progress-bar";

const skill_bar = document.createElement("div");
      skill_bar.className=barclass;

const round = document.createElement("div");
      round.className="round";
      
      skill_bar.append(round);
      progress_bar.append(skill_bar);
      skill_td_2.append(progress_bar)

      skil_tr.append(skill_td_2);

return skil_tr;
}

skillTable1.append(myskils("JavaScript","javaScript"));
skillTable1.append(myskils("css","css"));
skillTable1.append(myskils("html","html"));
skillTable1.append(myskils("react","react"));
skillTable1.append(myskils("redux","redux"));
skillTable1.append(myskils("mongo","mongo"));
skillTable1.append(myskils("deployment","deployment"));

skillTable2.append(myskils("management","management"));
skillTable2.append(myskils("recuitment","recuitment"));
skillTable2.append(myskils("business","business"));
skillTable2.append(myskils("editing","editing"));
skillTable2.append(myskils("found","found"));

// box3;

function paragrap(iconClass,WorkName,Event,Place,Date,li1,li2,li3){
     const mainDiv = document.createElement("div");
     mainDiv.classList.add("bodyBox");

// 1st div
     const boxTitle =document.createElement("div");
           boxTitle.className="boxTitle";

     const IconDiv =document.createElement("div");
           IconDiv.className="IconDiv";

     const i=document.createElement("i");
     const work=document.createElement("h1")
           work.textContent=WorkName; //D1
           i.classList.add("fa-solid", iconClass); //D2
           IconDiv.append(i);
           boxTitle.append(IconDiv);
           boxTitle.append(work);
           mainDiv.append(boxTitle);

// 2nd div
     const experienceBox =document.createElement("div");
           experienceBox.className="experienceBox";

     const experienceText =document.createElement("div");
           experienceText.className="experienceText";
     
     const experienceContent =document.createElement("h3");
           experienceContent.innerText=Event;
           experienceText.append(experienceContent);

     const experienceTextTwo =document.createElement("div");
          experienceTextTwo.className="experienceTextTwo";
     
     const experienceTwoContent =document.createElement("p");
           experienceTwoContent.innerHTML=Date;
           experienceTextTwo.append(experienceTwoContent);


           experienceBox.append(experienceText);
           experienceBox.append(experienceTextTwo);

           mainDiv.append(experienceBox);

// 3ed prara
const para2 =document.createElement("p");
      para2.textContent= Place;
      mainDiv.append(para2);

// 4th ul-li tag
const ul = document.createElement("ul");

const lione = document.createElement("li");
      lione.innerHTML=li1;

const litwo = document.createElement("li");
      litwo.innerHTML=li2;

const lithree = document.createElement("li");
      lithree.innerHTML=li3;

ul.append(lione,litwo,lithree); 

    // 1
const experienceBox2 =document.createElement("div");
experienceBox.className="experienceBox";

const experienceText2 = document.createElement("div")
experienceText2.className="experienceText";

const myh3=document.createElement("h3")
 myh3.innerText="BA,English";
 experienceText2.append(myh3);
 
      experienceBox2.append(experienceText2);
     //  2
const experienceTextTwo2 = document.createElement("div")
experienceText2.className="experienceTextTwo";

const myptag=document.createElement("p")
myptag.innerText="BA,English";
 experienceTextTwo2.append(myptag);

      experienceBox2.append(experienceText2);
      experienceBox2.append(experienceTextTwo2);

          mainDiv.append(ul);
          mainDiv.append(experienceBox2);

return mainDiv;
}
// row one 2nd 
const RowOne2nd = document.querySelector(".RowOne");

const myli1 = "Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships andon-site facilitation"
const myli2 = "Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women";

const myli3 = "Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations"

RowOne2nd.append(paragrap(
"fa-person-digging",
"Work experience",
"Event Manager",
"C3 Presents,Washington DC",
"03/2014-02/2017",
myli1,
myli2,
myli3
));

// row two 1st
const RowTwo = document.querySelector(".RowTwo");

const RowTwoli1 = "Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships andon-site facilitation";
const RowTwoli2 = "Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women";

const RowTwoli3 = "Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations"

RowTwo.prepend(paragrap(
"fa-person-digging",
"Work experience",
"Community Relations",
"Car & Bike Housing, Los Angeles",
"06/2011-01/2014",
RowTwoli1,
RowTwoli2,
RowTwoli3
));

RowTwo.append(paragrap(
"fa-person-digging",
"Education",
"Engineering Program",
"Thinkful, Chicago, IL",
"11/2018-06/2018",
RowTwoli1,
RowTwoli2,
RowTwoli3
));