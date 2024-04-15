let contents = document.querySelectorAll('.content');
let letters = document.querySelectorAll('.letter');
document.getElementsByClassName('ToMainPage').onclick = ToMainPage;
for(let i = 0; i < letters.length; i++){
    letters[i].addEventListener('click',() => {

        // //удаляем контент
        for (let j = 0; j < contents.length; j++) {
			contents[j].classList.remove("content--active");
		}
        // //добавляем контент
        contents[i+1].classList.add("content--active");
    });
}
function ToMainPage () {
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("content--active");
    }
    contents[0].classList.add("content--active");
}