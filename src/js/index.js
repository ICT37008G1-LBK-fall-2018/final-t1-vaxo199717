import axios from "axios";

const ALBUMS_LINK = "https://jsonplaceholder.typicode.com/albums",
  LIST_CONTENT = document.querySelector(".list__content");

let albumList = document.querySelector(".list");

addEventListener("load", getData);

// Get data after load
function getData() {
  let hasLoad = false;
  axios.get(ALBUMS_LINK).then(res => {
    if (res.status === 200 && !hasLoad) {
      hasLoad = true;
      return displayAlbumList(res.data);
    } else {
      LIST_CONTENT.textContent = "მონაცემები იტვრთება";
    }
  });
}

function displayAlbumList(data) {
  if (data && data.length !== 0) {
    data.forEach(el => {
      albumList.innerHTML += `
        <li class="list__item" data-id="${el.id}">${el.title}</li>
    `;
    });
  }
}
