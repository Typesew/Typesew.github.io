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

const falseL = new Audio();
falseL.src = "statics/mp3/false.mp3";
const trueL = new Audio();
trueL.src = "statics/mp3/true.mp3";

let choice1 = document.querySelector('.choice1');
let choice2 = document.querySelector('.choice2');
let choice3 = document.querySelector('.choice3');
let choice4 = document.querySelector('.choice4');
let choice5 = document.querySelector('.choice5');
let choice6 = document.querySelector('.choice6');
let choice7 = document.querySelector('.choice7');
let choice8 = document.querySelector('.choice8');
let choice9 = document.querySelector('.choice9');
let choice10 = document.querySelector('.choice10');
let choice11 = document.querySelector('.choice11');
let choice12 = document.querySelector('.choice12');
let choice13 = document.querySelector('.choice13');
let choice14 = document.querySelector('.choice14');
let choice15 = document.querySelector('.choice15');
let choice16 = document.querySelector('.choice16');
let choice17 = document.querySelector('.choice17');
let choice18 = document.querySelector('.choice18');
let choice19 = document.querySelector('.choice19');
let choice20 = document.querySelector('.choice20');
let choice21 = document.querySelector('.choice21');
let choice22 = document.querySelector('.choice22');

function trueL1 () {
  trueL.play();
  let allchoice1 = choice1.querySelector('.m');
  let choiceimg1 =  choice1.querySelector('.choiceimg')
  let btnsucces1 = choice1.querySelector('.btn-success');
  let choiceaudo1 = choice1.querySelector('.choiceaudio');
  allchoice1.classList.add('RightChoice');
  choiceaudo1.classList.add('d-none');
  choiceimg1.classList.remove('d-none');
  btnsucces1.classList.remove('d-none');
  }
function trueL2 () {
    trueL.play();
    let allchoice2 = choice2.querySelector('.t');
    let choiceimg2 =  choice2.querySelector('.choiceimg')
    let btnsucces2 = choice2.querySelector('.btn-success');
    let choiceaudo2 = choice2.querySelector('.choiceaudio');
    allchoice2.classList.add('RightChoice');
    choiceaudo2.classList.add('d-none');
    choiceimg2.classList.remove('d-none');
    btnsucces2.classList.remove('d-none');
    }
function trueL3 () {
      trueL.play();
      let allchoice3 = choice3.querySelector('.d');
      let choiceimg3 =  choice3.querySelector('.choiceimg')
      let btnsucces3 = choice3.querySelector('.btn-success');
      let choiceaudo3 = choice3.querySelector('.choiceaudio');
      allchoice3.classList.add('RightChoice');
      choiceaudo3.classList.add('d-none');
      choiceimg3.classList.remove('d-none');
      btnsucces3.classList.remove('d-none');
      }
function trueL4 () {
        trueL.play();
        let allchoice4 = choice4.querySelector('.r');
        let choiceimg4 =  choice4.querySelector('.choiceimg')
        let btnsucces4 = choice4.querySelector('.btn-success');
        let choiceaudo4 = choice4.querySelector('.choiceaudio');
        allchoice4.classList.add('RightChoice');
        choiceaudo4.classList.add('d-none');
        choiceimg4.classList.remove('d-none');
        btnsucces4.classList.remove('d-none');
        }
function trueL5 () {
          trueL.play();
          let allchoice5 = choice5.querySelector('.l');
          let choiceimg5 =  choice5.querySelector('.choiceimg')
          let btnsucces5 = choice5.querySelector('.btn-success');
          let choiceaudo5 = choice5.querySelector('.choiceaudio');
          allchoice5.classList.add('RightChoice');
          choiceaudo5.classList.add('d-none');
          choiceimg5.classList.remove('d-none');
          btnsucces5.classList.remove('d-none');
          }
function trueL6 () {
            trueL.play();
            let allchoice6 = choice6.querySelector('.b');
            let choiceimg6 =  choice6.querySelector('.choiceimg')
            let btnsucces6 = choice6.querySelector('.btn-success');
            let choiceaudo6 = choice6.querySelector('.choiceaudio');
            allchoice6.classList.add('RightChoice');
            choiceaudo6.classList.add('d-none');
            choiceimg6.classList.remove('d-none');
            btnsucces6.classList.remove('d-none');
            }
function trueL7 () {
              trueL.play();
              let allchoice7 = choice7.querySelector('.sh');
              let choiceimg7 =  choice7.querySelector('.choiceimg')
              let btnsucces7 = choice7.querySelector('.btn-success');
              let choiceaudo7 = choice7.querySelector('.choiceaudio');
              allchoice7.classList.add('RightChoice');
              choiceaudo7.classList.add('d-none');
              choiceimg7.classList.remove('d-none');
              btnsucces7.classList.remove('d-none');
              }
function trueL8 () {
                trueL.play();
                let allchoice8 = choice8.querySelector('.a');
                let choiceimg8 =  choice8.querySelector('.choiceimg')
                let btnsucces8 = choice8.querySelector('.btn-success');
                let choiceaudo8 = choice8.querySelector('.choiceaudio');
                allchoice8.classList.add('RightChoice');
                choiceaudo8.classList.add('d-none');
                choiceimg8.classList.remove('d-none');
                btnsucces8.classList.remove('d-none');
                }
function trueL9 () {
                  trueL.play();
                  let allchoice9 = choice9.querySelector('.k');
                  let choiceimg9 =  choice9.querySelector('.choiceimg')
                  let btnsucces9 = choice9.querySelector('.btn-success');
                  let choiceaudo9 = choice9.querySelector('.choiceaudio');
                  allchoice9.classList.add('RightChoice');
                  choiceaudo9.classList.add('d-none');
                  choiceimg9.classList.remove('d-none');
                  btnsucces9.classList.remove('d-none');
                  }
function trueL10 () {
                    trueL.play();
                    let allchoice10 = choice10.querySelector('.z');
                    let choiceimg10 =  choice10.querySelector('.choiceimg')
                    let btnsucces10 = choice10.querySelector('.btn-success');
                    let choiceaudo10 = choice10.querySelector('.choiceaudio');
                    allchoice10.classList.add('RightChoice');
                    choiceaudo10.classList.add('d-none');
                    choiceimg10.classList.remove('d-none');
                    btnsucces10.classList.remove('d-none');
                    }
function trueL11 () {
                      trueL.play();
                      let allchoice11 = choice11.querySelector('.j');
                      let choiceimg11 =  choice11.querySelector('.choiceimg')
                      let btnsucces11 = choice11.querySelector('.btn-success');
                      let choiceaudo11 = choice11.querySelector('.choiceaudio');
                      allchoice11.classList.add('RightChoice');
                      choiceaudo11.classList.add('d-none');
                      choiceimg11.classList.remove('d-none');
                      btnsucces11.classList.remove('d-none');
                      }
function btnchoice1(){
  choice1.classList.add('d-none');
  choice2.classList.remove('d-none');
}
function btnchoice2(){
  choice2.classList.add('d-none');
  choice3.classList.remove('d-none');
}
function btnchoice3(){
  choice3.classList.add('d-none');
  choice4.classList.remove('d-none');
}
function btnchoice4(){
  choice4.classList.add('d-none');
  choice5.classList.remove('d-none');
}
function btnchoice5(){
  choice5.classList.add('d-none');
  choice6.classList.remove('d-none');
}
function btnchoice6(){
  choice6.classList.add('d-none');
  choice7.classList.remove('d-none');
}
function btnchoice7(){
  choice7.classList.add('d-none');
  choice8.classList.remove('d-none');
}
function btnchoice8(){
  choice8.classList.add('d-none');
  choice9.classList.remove('d-none');
}
function btnchoice9(){
  choice9.classList.add('d-none');
  choice10.classList.remove('d-none');
}
function btnchoice10(){
  choice10.classList.add('d-none');
  choice11.classList.remove('d-none');
}
function btnchoice11(){
  choice11.classList.add('d-none');
  choice1.classList.remove('d-none');
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.remove("nav-el--active");
  }
      // //добавляем класс
      navElements[0].classList.add('nav-el--active');

      // удаляем контент
      for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("content--active");
  }
      // //добавляем контент
      contents[0].classList.add('content--active');
}

function trueL12 () {
  trueL.play();
  let allchoice12 = choice12.querySelector('.m');
  let choiceimg12 =  choice12.querySelector('.choiceimg')
  let btnsucces12 = choice12.querySelector('.btn-success');
  let choiceaudo12 = choice12.querySelector('.choiceaudio');
  allchoice12.classList.add('RightChoice');
  choiceaudo12.classList.add('d-none');
  choiceimg12.classList.remove('d-none');
  btnsucces12.classList.remove('d-none');
  }
function trueL13 () {
    trueL.play();
    let allchoice13 = choice13.querySelector('.t');
    let choiceimg13 =  choice13.querySelector('.choiceimg')
    let btnsucces13 = choice13.querySelector('.btn-success');
    let choiceaudo13 = choice13.querySelector('.choiceaudio');
    allchoice13.classList.add('RightChoice');
    choiceaudo13.classList.add('d-none');
    choiceimg13.classList.remove('d-none');
    btnsucces13.classList.remove('d-none');
    }
function trueL14 () {
      trueL.play();
      let allchoice14 = choice14.querySelector('.d');
      let choiceimg14 =  choice14.querySelector('.choiceimg')
      let btnsucces14 = choice14.querySelector('.btn-success');
      let choiceaudo14 = choice14.querySelector('.choiceaudio');
      allchoice14.classList.add('RightChoice');
      choiceaudo14.classList.add('d-none');
      choiceimg14.classList.remove('d-none');
      btnsucces14.classList.remove('d-none');
      }
function trueL15 () {
        trueL.play();
        let allchoice15 = choice15.querySelector('.r');
        let choiceimg15 =  choice15.querySelector('.choiceimg')
        let btnsucces15 = choice15.querySelector('.btn-success');
        let choiceaudo15 = choice15.querySelector('.choiceaudio');
        allchoice15.classList.add('RightChoice');
        choiceaudo15.classList.add('d-none');
        choiceimg15.classList.remove('d-none');
        btnsucces15.classList.remove('d-none');
        }
function trueL16 () {
          trueL.play();
          let allchoice16 = choice16.querySelector('.l');
          let choiceimg16 =  choice16.querySelector('.choiceimg')
          let btnsucces16 = choice16.querySelector('.btn-success');
          let choiceaudo16 = choice16.querySelector('.choiceaudio');
          allchoice16.classList.add('RightChoice');
          choiceaudo16.classList.add('d-none');
          choiceimg16.classList.remove('d-none');
          btnsucces16.classList.remove('d-none');
          }
function trueL17 () {
            trueL.play();
            let allchoice17 = choice17.querySelector('.b');
            let choiceimg17 =  choice17.querySelector('.choiceimg')
            let btnsucces17 = choice17.querySelector('.btn-success');
            let choiceaudo17 = choice17.querySelector('.choiceaudio');
            allchoice17.classList.add('RightChoice');
            choiceaudo17.classList.add('d-none');
            choiceimg17.classList.remove('d-none');
            btnsucces17.classList.remove('d-none');
            }
function trueL18 () {
              trueL.play();
              let allchoice18 = choice18.querySelector('.sh');
              let choiceimg18 =  choice18.querySelector('.choiceimg')
              let btnsucces18 = choice18.querySelector('.btn-success');
              let choiceaudo18 = choice18.querySelector('.choiceaudio');
              allchoice18.classList.add('RightChoice');
              choiceaudo18.classList.add('d-none');
              choiceimg18.classList.remove('d-none');
              btnsucces18.classList.remove('d-none');
              }
function trueL19 () {
                trueL.play();
                let allchoice19 = choice19.querySelector('.a');
                let choiceimg19 =  choice19.querySelector('.choiceimg')
                let btnsucces19 = choice19.querySelector('.btn-success');
                let choiceaudo19 = choice19.querySelector('.choiceaudio');
                allchoice19.classList.add('RightChoice');
                choiceaudo19.classList.add('d-none');
                choiceimg19.classList.remove('d-none');
                btnsucces19.classList.remove('d-none');
                }
function trueL20 () {
                  trueL.play();
                  let allchoice20 = choice20.querySelector('.k');
                  let choiceimg20 =  choice20.querySelector('.choiceimg')
                  let btnsucces20 = choice20.querySelector('.btn-success');
                  let choiceaudo20 = choice20.querySelector('.choiceaudio');
                  allchoice20.classList.add('RightChoice');
                  choiceaudo20.classList.add('d-none');
                  choiceimg20.classList.remove('d-none');
                  btnsucces20.classList.remove('d-none');
                  }
function trueL21 () {
                    trueL.play();
                    let allchoice21 = choice21.querySelector('.z');
                    let choiceimg21 =  choice21.querySelector('.choiceimg')
                    let btnsucces21 = choice21.querySelector('.btn-success');
                    let choiceaudo21 = choice21.querySelector('.choiceaudio');
                    allchoice21.classList.add('RightChoice');
                    choiceaudo21.classList.add('d-none');
                    choiceimg21.classList.remove('d-none');
                    btnsucces21.classList.remove('d-none');
                    }
function trueL22 () {
                      trueL.play();
                      let allchoice22 = choice22.querySelector('.j');
                      let choiceimg22 = choice22.querySelector('.choiceimg')
                      let btnsucces22 = choice22.querySelector('.btn-success');
                      let choiceaudo22 = choice22.querySelector('.choiceaudio');
                      allchoice22.classList.add('RightChoice');
                      choiceaudo22.classList.add('d-none');
                      choiceimg22.classList.remove('d-none');
                      btnsucces22.classList.remove('d-none');
                      }
function btnchoice12(){
  choice12.classList.add('d-none');
  choice13.classList.remove('d-none');
}
function btnchoice13(){
  choice13.classList.add('d-none');
  choice14.classList.remove('d-none');
}
function btnchoice14(){
  choice14.classList.add('d-none');
  choice15.classList.remove('d-none');
}
function btnchoice15(){
  choice15.classList.add('d-none');
  choice16.classList.remove('d-none');
}
function btnchoice16(){
  choice16.classList.add('d-none');
  choice17.classList.remove('d-none');
}
function btnchoice17(){
  choice17.classList.add('d-none');
  choice18.classList.remove('d-none');
}
function btnchoice18(){
  choice18.classList.add('d-none');
  choice19.classList.remove('d-none');
}
function btnchoice19(){
  choice19.classList.add('d-none');
  choice20.classList.remove('d-none');
}
function btnchoice20(){
  choice20.classList.add('d-none');
  choice21.classList.remove('d-none');
}
function btnchoice21(){
  choice21.classList.add('d-none');
  choice22.classList.remove('d-none');
}
function btnchoice22(){
  choice22.classList.add('d-none');
  choice12.classList.remove('d-none');
  for (let i = 0; i < navElements.length; i++) {
    navElements[i].classList.remove("nav-el--active");
  }
      // //добавляем класс
      navElements[0].classList.add('nav-el--active');

      // удаляем контент
      for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("content--active");
  }
      // //добавляем контент
      contents[0].classList.add('content--active');
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