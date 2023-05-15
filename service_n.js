let arr = [];
let html = "";

document.getElementById("submit").addEventListener('click', (e) => {
  e.preventDefault();
  let name1 = document.getElementById("name").value;
  let spec1 = document.getElementById("spec").value;
  let em1 = document.getElementById("em").value;
  let num1 = document.getElementById("num").value;
  let price1 = document.getElementById("price").value;
  let exp1 = document.getElementById("exp").value;
  let bio1 = document.getElementById("bio").value;
  

  let data = {
    name: name1,
    spec: spec1,
    em: em1,
    num: num1,
    price: price1,
    exp: exp1,
    bio: bio1
  };

  fetch("http://localhost:5000/my_id.tab ", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log("JSON",json);
     
    });
});


document.getElementById('submit').addEventListener('click',(e)=>{
  document.getElementById("contactForm").reset();
})