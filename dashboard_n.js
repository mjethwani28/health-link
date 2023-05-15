
  let html=''

const getData = async() => {
  await fetch("http://localhost:5000/my_id.tab", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())

    .then(data => {
      arr = data;
    let c=1;
      arr.forEach(element => {
        console.log("hello", element);
        html += `
        <div class="arr-panel">
        <p><b>Entry ${c}: </b></p>  
        <p>${element.name}</p>
          <p>${element.spec}</p>
          <p>${element.em}</p>
          <p>${element.num}</p>
          <p>${element.price}</p>
          <p>${element.exp}</p>
          <p>${element.bio}</p>
          <br><br>
          
        </div>
        `
        c+=1;
      });
      console.log(html);
      
      const container=document.getElementById('grid');
     
      container.innerHTML=html;
      
  });
  
}

getData();



const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

searchButton.addEventListener("click", () => {
  searchBySpecialization();
});

function searchBySpecialization() {
  
  const searchTerm = searchBar.value;

  
  const container = document.getElementById("grid");
  container.innerHTML = "";

  
  let c = 1;
  for (const entry of arr) {
    if (entry.spec.toLowerCase().includes(searchTerm.toLowerCase())) {
   
      const div = document.createElement("div");
      div.className = "arr-panel";
      div.innerHTML = `
        <p><b>Entry ${c}: </b></p>  
        <p>${entry.name}</p>
        <p>${entry.spec}</p>
        <p>${entry.em}</p>
        <p>${entry.num}</p>
        <p>${entry.price}</p>
        <p>${entry.exp}</p>
        <p>${entry.bio}</p>
        
        <br><br>
      `;
      container.appendChild(div);
      c++;
    }
  }
}




