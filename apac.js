let html= `<h2 id="name" style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-left: 1170px; margin-top: 5px;">Welcome, </h2>
<button onclick="logout()" style="border-radius: 5px;
border-color: rgb(148, 92, 200);
background-color: rgb(144, 141, 141);
margin: 5px;
padding: 10px;
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 550;
color: white; float: right">Logout</button>`


if(isLoggedIn()){
    document.getElementById('myDiv').innerHTML = html
}


function signIn(){
    
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
    let form= document.createElement('form')
    form.setAttribute('method','GET')
    form.setAttribute('action',oauth2Endpoint)

    let params = {
        "client_id":"761578340833-kl1lbnkqqa5e7s5f9fphg2ge27oios1p.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/hackathon/apac.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes":'true',
        'state':'pass-through-value'
    }
    for( var p in params){
        let input= document.createElement('input')
        input.setAttribute('type','hidden')
        input.setAttribute('name',p)
        input.setAttribute('value',params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
}
  // Parse query string to see if page request is coming from OAuth 2.0 server.
  var param = {};
  var regex = /([^&=]+)=([^&]*)/g, m;
  while (m = regex.exec(location.href)) {
      param[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  if (Object.keys(param).length > 0) {
      localStorage.setItem('authInfo', JSON.stringify(param));
  }
  window.history.pushState({}, document.title, "/" + "hackathon/apac.html");
  let info = JSON.parse(localStorage.getItem('authInfo'))
  console.log(info['access_token'])
  console.log(info['expires_in'])
  
  fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
          "Authorization": `Bearer ${info['access_token']}`
      }
  })
      .then(data => data.json())
      .then((info) => {
          console.log(info, "hello")
          
          document.getElementById('name').innerHTML += info.name
          
      }).catch((e) =>{
          console.log(e)
      })

        


// function hatch(){
//     Promise.
// }
function isLoggedIn(){
    let info1 = localStorage.getItem('authInfo')
    console.log("hello", info1)
    return info1 != null
}

function logout() {
fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'],
    {
        method: 'POST',
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
    .then((data) => {
        location.href = "http://127.0.0.1:5500/hackathon/apac.html"
        document.getElementById('myDiv').style.display= 'none'
        localStorage.removeItem('authInfo')
    })
}



// import { getAuth, signInWithCustomToken } from "firebase/auth";

// const auth = getAuth();
// function signIn(){
// signInWithCustomToken(auth, token)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });
// }

// function signOut(){
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
// }

