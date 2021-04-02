// założenia:
//   titleField -   zmienna tytuł zdjęcia
// imgField -   obszar ze zdjeciem
// 
  
  // ustalenie zmiennych stałych
  const titleField = document.querySelector("h4");
  const imgField = document.querySelector(".content");
  const img = document.createElement("img");

//   ustalenie zmiennych zmiennych
let currentSlide=0;
// let changeSlide="left";

    // zdefiniowanie tablicy ze zdjęciami
  const views = [
       {"title": "Zachód słońca pod palmami",
       "src": "1.jpg"},
       {"title": "Misto z lotu ptaka",
       "src": "2.jpg"},
       {"title": "Miato w budowie",
       "src": "3.jpg"},
       {"title": "Spodek",
       "src": "4.jpg"},
   ];
   
// strzałki -stałe
const leftArr = document.querySelector(".left");
leftArr.onclick = () => {changeSlide("left")};
const rightArr = document.querySelector(".right");
rightArr.onclick = () => {changeSlide("right")};


// definicje funkcji
function displayView(index){
    titleField.innerHTML = views[index].title;

    imgField.innerHTML = "";

    img.src = "img/" + views[index].src
    imgField.append(img);
}
function changeSlide(direction){
    if (direction == "left"){
        currentSlide--;
        if (currentSlide < 0){
            currentSlide = views.length-1;
        }
          
    } else {
        currentSlide++;
        if (currentSlide > views.length-1){
            currentSlide = 0;
        
        }
                
    }
    displayView(currentSlide)
}
// wyświetlenie testowe
// console.log(views[3]);
// displayView(0)
// console.log(direction)
// console.log(currentSlide)


// wykonanie
console.log(currentSlide);
displayView(currentSlide);
// changeSlide(currentSlide)
