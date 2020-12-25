const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// Double everyones money
function doubleMoney(){
  data = data.map((user) => {
    return { ...user, money: user.money * 2};
  });

  updateDom();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDom();
}

function showMilinaries() {
  data = data.filter(user => user.money > 1000000);

  updateDom();
}

function calculateWealth(){
  
  wealth = data.reduce((arr, user) => (arr += user.money), 0);
  console.log(formatMoney(wealth));
  updateDom();

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth <strong> ${formatMoney(wealth)}</strong></h3>`
  main.append(wealthEl);
}


function addData(obj) {
  data.push(obj);

  updateDom();
};




// Update DOM 
function updateDom(providedData = data) {
  // Clearrr main div
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
  // for each로 3개의 파라미터 item,index,arr을 쓸 수 있음
  // providedData.forEach((item, index, arr) => {
  providedData.forEach((item, index, arr) => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(item.money)}`;
    
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}



addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click',showMilinaries);
calculateWealthBtn.addEventListener('click', calculateWealth);