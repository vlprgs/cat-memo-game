


    var cats = ["https://http.cat/100.jpg","https://http.cat/101.jpg","https://http.cat/200.jpg","https://http.cat/201.jpg", "https://http.cat/300.jpg",
    "https://http.cat/301.jpg","https://http.cat/302.jpg","https://http.cat/303.jpg","https://http.cat/304.jpg","https://http.cat/305.jpg",
    "https://http.cat/307.jpg","https://http.cat/400.jpg","https://http.cat/401.jpg","https://http.cat/402.jpg","https://http.cat/408.jpg",
    "https://http.cat/409.jpg","https://http.cat/410.jpg","https://http.cat/411.jpg","https://http.cat/412.jpg","https://http.cat/100.jpg",
    "https://http.cat/101.jpg","https://http.cat/200.jpg","https://http.cat/201.jpg","https://http.cat/300.jpg","https://http.cat/301.jpg",
    "https://http.cat/302.jpg","https://http.cat/303.jpg","https://http.cat/304.jpg","https://http.cat/305.jpg","https://http.cat/307.jpg",
    "https://http.cat/400.jpg","https://http.cat/401.jpg","https://http.cat/402.jpg","https://http.cat/408.jpg","https://http.cat/409.jpg",
    "https://http.cat/410.jpg","https://http.cat/411.jpg","https://http.cat/412.jpg"
    ]


    function gameStart(){ //game starting function
      let startButton = document.createElement("button")
      let t = document.createTextNode("Game Start");
      startButton.appendChild(t);
      document.body.appendChild(startButton);
    }
    function genDivs(v){ //grid generating function
         let e = document.getElementsByClassName("container");
         for(let i = 0; i < v; i++){
           let row = document.createElement("div");
           row.className = "row";
           for(let x = 1; x <= v; x++){
             let random = cats[Math.floor(Math.random()*cats.length-1)];
               let cell = document.createElement("div");
               cell.className = "gridsquare";
               cell.style.backgroundImage = "url("+random+")";
               //cell.innerText = (i * v) + x;
               row.appendChild(cell);
           }
           e[0].appendChild(row);
         }
         //document.getElementById("code").innerText = e.innerText;
       }
