let list = document.querySelector('.data')

async function Regis() {
  try {
    list.innerHTML = "";
    let { data } = await request.get("register");
    data.map((items) => {
      list.innerHTML += mappingData(items)
    })
  } catch (err) {
    console.log(err);
  }
}

Regis()

function mappingData(item) {
  return `
  <tr>
    <th scope="row">${item.id}</th>
    <td>${item.email}</td>
    <td>${item.password}</td>
    <td id="${item.id}" class="delete">delete</td>
  </tr>
  `
}

window.addEventListener("click", async (e) => {
  let id = e.target.getAttribute("id");


  let checkDelete = e.target.classList.contains("delete");
  if (checkDelete) {
    let deleteConfirm = confirm("Do you want to delete this akkaut?");
    if (deleteConfirm) {
      await request.delete(`register/${id}`);
      Regis();
    }
  }
});