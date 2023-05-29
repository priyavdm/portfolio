function createUser(){
    
    // console.log(document.getElementById("username").value,);
    fetch('http://localhost:3000/insert',{
    method: 'POST',
    body: JSON.stringify({
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      subjects: document.getElementById("subjects").value,
      message: document.getElementById("message").value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    location.reload()
  }

  fetch('http://localhost:3000/getall')
      .then(response => response.json())
      .then(json => {
        html=''
      json.forEach(e => {
        html+=
        `<tr>
                <td>${e.id}</td>
                <td>${e.username}</td>
                <td>${e.email}</td>
                <td>${e.subjects}</td>
                <td>${e.message}</td>
                <td><button onclick="Edit('${e.id}','${e.username}','${e.email}','${e.subjects}','${e.message}')">Edit</button>
                  <button onclick="Delete(${e.id},${e.isActive})">Delete</button></td>
                </tr>`
            });
      console.log(html)
      document.getElementsByTagName('tbody')[0].innerHTML=html
          })