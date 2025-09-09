const cars = [
  { title: "Chevrolet Malibu", desc: "2022 yil, avtomat, konditsioner", img: "https://picsum.photos/400/200?car1" },
  { title: "Kia K5", desc: "2023 yil, benzin, multimedia", img: "https://picsum.photos/400/200?car2" },
];

const houses = [
  { title: "Toshkent, Chilonzor", desc: "3 xonali, 80m², yangi ta'mir", img: "https://picsum.photos/400/200?house1" },
  { title: "Samarqand, Registon", desc: "2 xonali, 60m², markazda", img: "https://picsum.photos/400/200?house2" },
];

function renderItems(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <button onclick="openModal('${item.title}', '${item.desc}')">Tanlash</button>
      </div>
    `;
    container.appendChild(card);
  });
}

renderItems(cars, "cars");
renderItems(houses, "houses");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close");

function openModal(title, desc) {
  modal.style.display = "flex";
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
