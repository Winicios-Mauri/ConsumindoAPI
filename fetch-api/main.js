const url = 'http://localhost:5500/api'

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    header: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updateUser),
    header: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
    header: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
    .then(response => response.json())
    .then(data => (alertAPI.textContent = data))
    .catch(error => console.error(error))
}

const newUser = {
  name: 'Wini',
  avatar: 'https://picsum.photos/200/300',
  city: 'São Gabriel'
}

addUser(newUser)

getUsers()

getUser(9)

const updatedUser = {
  name: 'Teste',
  avatar: 'https://picsum.photos/200/300',
  city: 'Nova Venecia'
}

updateUser(updatedUser, 9)

deleteUser(3)
