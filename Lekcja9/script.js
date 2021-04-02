// założenia:
//   titleField -   zmienna tytuł zdjęcia
// imgField -   obszar ze zdjeciem
// 
  
  // ustalenie stałych
  const titleField = document.querySelector("h2");
  const imgField = document.querySelector(".content");
  const img = document.createElement("img");
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
const rightArr = document.querySelector(".right");


// definicje funkcji


// wyświetlenie testowe
console.log(views[1]);
