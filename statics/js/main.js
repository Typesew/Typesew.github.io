let navElements = document.querySelectorAll('.nav-el');
let contents = document.querySelectorAll('.content');
function LeadToCatalog(){
    //удаляем класс
        
		for (let i = 0; i < navElements.length; i++) {
			navElements[i].classList.remove("nav-el--active");
		}
        // //добавляем класс
        navElements[1].classList.add('nav-el--active');

        // удаляем контент
        for (let i = 0; i < contents.length; i++) {
			contents[i].classList.remove("content--active");
		}
        // //добавляем контент
        contents[1].classList.add('content--active');
}

function LeadTo469(){
  //удаляем класс
      
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.remove("nav-el--active");
  }
      // //добавляем класс
      navElements[2].classList.add('nav-el--active');

      // удаляем контент
      for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("content--active");
  }
      // //добавляем контент
      contents[2].classList.add('content--active');
}

function LeadToFirstLetter(){
  //удаляем класс
      
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.remove("nav-el--active");
  }
      // //добавляем класс
      navElements[3].classList.add('nav-el--active');

      // удаляем контент
      for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("content--active");
  }
      // //добавляем контент
      contents[3].classList.add('content--active');
}

for(let i = 0; i<navElements.length;i++){
    navElements[i].addEventListener('click',() => {
        //удаляем класс
        
		for (let i = 0; i < navElements.length; i++) {
			navElements[i].classList.remove("nav-el--active");
		}
        // //добавляем класс
        navElements[i].classList.add('nav-el--active');

        // //удаляем контент
        for (let i = 0; i < contents.length; i++) {
			contents[i].classList.remove("content--active");
		}
        // //добавляем контент
        contents[i].classList.add('content--active');
    });
}
const audioA = new Audio();
audioA.src = "statics/mp3/bukva-a.mp3";
const audioB = new Audio();
audioB.src = "statics/mp3/bukva-b.mp3";
const audioV = new Audio();
audioV.src = "statics/mp3/v.mp3";
const audioG = new Audio();
audioG.src = "statics/mp3/bukva-g.mp3";
const audioD = new Audio();
audioD.src = "statics/mp3/bukva-d.mp3";
const audioE = new Audio();
audioE.src = "statics/mp3/bukva-e.mp3";
const audioZH = new Audio();
audioZH.src = "statics/mp3/bukva-zh.mp3";
const audioZ = new Audio();
audioZ.src = "statics/mp3/bukva-z.mp3";
const audioI = new Audio();
audioI.src = "statics/mp3/bukvy-i-i-j.mp3";
const audioK = new Audio();
audioK.src = "statics/mp3/bukva-k.mp3";
const audioL = new Audio();
audioL.src = "statics/mp3/bukva-l.mp3";
const audioM = new Audio();
audioM.src = "statics/mp3/bukva-m.mp3";
const audioN = new Audio();
audioN.src = "statics/mp3/ny.mp3";
const audioO = new Audio();
audioO.src = "statics/mp3/zvuk-o.mp3";
const audioP = new Audio();
audioP.src = "statics/mp3/bukva-p.mp3";
const audioR = new Audio();
audioR.src = "statics/mp3/bukva-r.mp3";
const audioS = new Audio();
audioS.src = "statics/mp3/bukva-s.mp3";
const audioT = new Audio();
audioT.src = "statics/mp3/t.mp3";
const audioU = new Audio();
audioU.src = "statics/mp3/ey.mp3";
const audioF = new Audio();
audioF.src = "statics/mp3/bukva-f.mp3";
const audioH = new Audio();
audioH.src = "statics/mp3/bukva-h34.mp3";
const audioC = new Audio();
audioC.src = "statics/mp3/bukva-c.mp3";
const audioCH = new Audio();
audioCH.src = "statics/mp3/zvuk-ch.mp3";
const audioSH = new Audio();
audioSH.src = "statics/mp3/bukva-sh.mp3";
const audioSCH = new Audio();
audioSCH.src = "statics/mp3/bukva-SCH.mp3";
const audioY = new Audio();
audioY.src = "statics/mp3/bukvy-y-.mp3";
const audioJE = new Audio();
audioJE.src = "statics/mp3/bukva-je.mp3";
const audioJU = new Audio();
audioJU.src = "statics/mp3/bukva-ju.mp3";
const audioJA = new Audio();
audioJA.src = "statics/mp3/bukva-ja.mp3";