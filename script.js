let coins = 0;

function login() {
  let user = document.getElementById("username").value;
  if(user) {
    alert("مرحبا " + user);
    generateCard();
  }
}

function generateCard() {
  let number = "1234 5678 9999 " + Math.floor(Math.random()*9999);
  let code = Math.floor(1000 + Math.random()*9000);

  document.getElementById("card-number").innerText = number;
  document.getElementById("card-code").innerText = "CODE: " + code;
}

function changeColor() {
  let colors = ["red","blue","green","purple"];
  let random = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById("card").style.background = random;
}

function dailyReward() {
  coins += 70;
  updateCoins();
}

function updateCoins() {
  document.getElementById("coins").innerText = "Coins: " + coins;
}

function buy(price) {
  if(coins >= price) {
    coins -= price;
    updateCoins();
    alert("تم الشراء ✅");
  } else {
    alert("❌ لا يوجد رصيد");
  }
}

// منتجات تجريبية
let products = [
  {name:"Python Tool", price:100, desc:"اداة برمجية مفيدة"},
  {name:"Trading Course", price:200, desc:"تعلم التداول"},
  {name:"Programming Course", price:150, desc:"تعلم البرمجة"}
];

let container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="product">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p>${p.price} coins</p>
      <button onclick="buy(${p.price})">شراء</button>
    </div>
  `;
});
