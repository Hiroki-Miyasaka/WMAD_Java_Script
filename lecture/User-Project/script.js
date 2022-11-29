const result = document.getElementById("result"); // represent the entire unordered list
const filter = document.getElementById("filter"); // represent the input

const listItems = [];

filter.addEventListener("input", (e) => filterData(e.target.value));

getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  //   console.log(results);

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    result.appendChild(li);
  });
}

function filterData(query) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(query.toLowerCase())) {
      // show it
      item.classList.remove("hide");
    } else {
      // hide it
      item.classList.add("hide");
    }
  });
}
