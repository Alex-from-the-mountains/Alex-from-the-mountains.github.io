let names = [];
let tasks = [];
let newArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items")) : [];
let sportArray = localStorage.getItem("exercise")
  ? JSON.parse(localStorage.getItem("exercise")) : [];
let favArray = localStorage.getItem("favour")
  ? JSON.parse(localStorage.getItem("favour")) : [];
const choosenFood = food.forEach((Object) => names.push(Object.name));
const choosenSport = sport.forEach((Object) => tasks.push(Object.name));

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");
const sportResultBox = document.querySelector(".sport-result-box");
const sportInputBox = document.querySelector("#sport-input-box");
const time = document.querySelector(".time");

if (localStorage.getItem("items") === '[]' || !localStorage.getItem("items")) {
  newArray.push(food[52], food[0], food[113]);
  localStorage.setItem("items", JSON.stringify(newArray))
}

if (localStorage.getItem("exercise") === '[]' || !localStorage.getItem("exercise")) {
  sportArray.push(sport[8]);
  localStorage.setItem("exercise", JSON.stringify(sportArray))
}

document.querySelector("#Meals").click();
document.querySelector("#Zero").click();
generateFood(1);
generateFood(2);
listener()

if (localStorage.getItem("mode") == "light") {
  changeTheme('light'); 
} else {
  changeTheme('dark');
}

function changeTheme(theme) {
  document.body.className = `${theme}-theme`;
  let altTheme = theme == 'dark' ? 'light' : 'dark';
  document.querySelector(`.${theme}`).style.display = 'none';
  document.querySelector(`.${altTheme}`).style.display = 'block';
  localStorage.setItem("mode", `${theme}`);
  let act = document.querySelector(`.${theme}`);
  if (!act.classList.contains("active")) {
      let act = document.querySelector(`.${theme}`).classList.toggle('active');
      let unact = document.querySelector(`.${altTheme}`).classList.toggle('active');
  }

}

inputBox.onkeyup = function () {
  let input = inputBox.value;
  showOptions(1, input);
};
sportInputBox.onkeyup = function () {
  let input = sportInputBox.value;
  showOptions(2, input);
};

function showOptions(num, value) {
  let result = [];
  let arr = num == 1 ? names : tasks;
  let container = num == 1 ? resultBox : sportResultBox;
  num == 1 ? document.querySelector('.food-container').style.display = 'none' : 
  document.querySelector('.sport-container').style.display = 'none';
  if (value.length) {
    result = arr.filter((keyword) => {
      return keyword.toLowerCase().includes(value.toLowerCase());
    });
  }
  display(result, num);

  if (!result.length) {
    document.querySelector('.food-container').style.display = 'block';
    document.querySelector('.sport-container').style.display = 'block';
    container.innerHTML = "";
  }
}

function display(result, num) {
  const content = result.map((list) => {
    return `<li onclick = selectInput(this)>` + list + "</li>";
  });
  let container = num == 1 ? resultBox : sportResultBox;
  container.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  let num = names.includes(list.textContent) ? 1 : 2;
  let bar = num == 1 ? inputBox : sportInputBox;
  let container = num == 1 ? resultBox : sportResultBox;
  bar.value = '';
  container.innerHTML = "";
  if (num == 1) {
    newArray.push(food[names.indexOf(list.textContent)]);
    localStorage.setItem("items", JSON.stringify(newArray));
    document.querySelector('.food-container').style.display = 'block'
  }
  if (num == 2) {
    sportArray.push(sport[tasks.indexOf(list.textContent)]);
    localStorage.setItem("exercise", JSON.stringify(sportArray));
    document.querySelector('.sport-container').style.display = 'block';
  }
  generateFood(num);
}

function generateFood(num) {
  let container = num == 1
      ? document.querySelector(".food-container")
      : document.querySelector(".sport-container");
  container.innerHTML = "";
  if (num == 1 && newArray.length) {
    newArray.forEach((Object) =>
      container.insertAdjacentHTML(
        "afterbegin",
        `<div class = "food-unit"> 
      <div class="un-side"><input type="number" class="food-amount" size="7"
      value="${Object.grams}" name="${Object.name}" /> грамм <div class="vertical">
      <button class="amount-changer">^</button><button class="amount-changer less-amount">⌄</button></div> 
       <div class="vertical"><div class="vert">${Object.name}</div>  <div class="sub-horizontal"><span class="${Object.name}">
      ${Math.round(Object.calories)}</span> ккал </div></div></div> 
      <div class="un-side"><button class="heart" onclick="fav('${Object.name}', ${num})">&heartsuit;</button>
      <button class="delete" onclick="del('${Object.name}', ${num})">X</button> </div></div>`
      )
    );
  }
  if (num == 2 && sportArray.length) {
    sportArray.forEach((Object) =>
      container.insertAdjacentHTML(
        "afterbegin",
        `<div class = "food-unit"> 
        <div class="un-side"><input type="number" class="sport-amount" size="7"
      value="${Object.minutes}" name="${Object.name}" /> минут <div class="vertical">
      <button class="amount-changer">^</button><button class="amount-changer less-amount">⌄</button></div>
       <div class="vertical"><div class="vert">${Object.name}</div>  <div class="sub-horizontal"><span class="${Object.name}">
      ${Math.round(Object.calories)}</span> ккал</div></div></div> 
      <div class="un-side"><button class="heart" onclick="fav('${Object.name}', ${num})">&heartsuit;</button>
      <button class="delete" onclick="del('${Object.name }', ${num})">X</button> </div></div>`
      )
    );
  }
  totalCalories(num);
}

function totalCalories(num) {
  if (num == 1) {
    if (newArray.length) {
      let counter = document.querySelectorAll(".total-cal");
      counter.innerHTML = "";
      let totalCal =
        newArray.length == 1
          ? newArray[0]
          : newArray.reduce((a, b) => ({ calories: a.calories + b.calories }));
      counter.forEach((element) => element.textContent = `🍗 Всего получено: ${Math.round(totalCal.calories)} kcal`);
    }
  }
  if (num == 2) {
    if (sportArray.length) {
      let counter = document.querySelectorAll(".total-sport-cal");
      counter.innerHTML = "";
      let totalCal =
        sportArray.length == 1
          ? sportArray[0]
          : sportArray.reduce((a, b) => ({
              calories: a.calories + b.calories,
            }));
      counter.forEach((element) => element.textContent = `🔥 Всего сожжено: ${Math.round(totalCal.calories)} kcal`);
    }
  }
}

function unitCalories(cal, num) {
  let element = document.querySelector(`.${cal}`);
  if (num == 1) {
    element.textContent = `${Math.round(
      newArray.find((item) => item.name === cal).calories
    )}`;
  }
  if (num == 2) {
    element.textContent = `${Math.round(
      sportArray.find((item) => item.name === cal).calories
    )}`;
  }
}

document.addEventListener("keyup", function (e) {
  if (e.target.className == "food-amount") {
    let result = newArray.find((item) => item.name === e.target.name);
    result.calories = e.target.value == 0 ? result.calories / result.grams
    : (result.calories / result.grams) * e.target.value;
    result.grams = e.target.value == 0 ? 1 : +e.target.value;
    localStorage.setItem("items", JSON.stringify(newArray));
    unitCalories(e.target.name, 1);
    totalCalories(1);
    listener();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.target.className == "sport-amount") {
    let result = sportArray.find((item) => item.name === e.target.name);
    result.calories = e.target.value == 0 ? result.calories / result.minutes
    : (result.calories / result.minutes) * +e.target.value;
    result.minutes = e.target.value == 0 ? 1 : +e.target.value;
    localStorage.setItem("exercise", JSON.stringify(sportArray));
    unitCalories(e.target.name, 2);
    totalCalories(2);
    listener();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("amount-changer")) {
    let negCheck = e.target.classList.contains("less-amount");
    let v = e.target.closest(".food-unit").querySelector("input");
    let num = 1;
    let arr = newArray;
    let temp = negCheck ? -100 : 100;
    let result = arr.find((item) => item.name === v.name);
    if (!result) {
      arr = sportArray;
      temp = negCheck ? -10 : 10;
      v.value = +v.value + temp;
      result = arr.find((item) => item.name === v.name);
      num = 2;
  } if (num == 1) { 
    if (+v.value + temp > 0) {
    v.value = +v.value + temp;
    result.calories = result.calories / result.grams * (result.grams + temp);
    result.grams += temp;
    } else {
      v.value = 1;
      result.calories = result.calories / result.grams;
      result.grams = 1;
    }
    localStorage.setItem("items", JSON.stringify(arr));
  } if (num == 2) {
    if (+v.value + temp > 0) {
    result.calories = result.calories / result.minutes * (result.minutes + temp);
    result.minutes += temp;
    } else {
      v.value = 1;
      result.calories = result.calories / result.minutes;
      result.minutes = 1;
    }
    localStorage.setItem("exercise", JSON.stringify(arr));
  }
    unitCalories(v.name, num);
    totalCalories(num);
    listener();
  }
})

function del(name, num) {
  if (num == 1) {
    newArray.splice(
      newArray.findIndex((v) => v.name === name), 1);
    localStorage.setItem("items", JSON.stringify(newArray));
    if (!newArray.length) {
      document.querySelectorAll(".total-cal").forEach((element) => 
      element.textContent = "🍗 Всего получено:");
    }
  }
  if (num == 2) {
    sportArray.splice(
      sportArray.findIndex((v) => v.name === name), 1);
    localStorage.setItem("exercise", JSON.stringify(sportArray));
    if (!sportArray.length) {
      document.querySelectorAll(".total-sport-cal").forEach((element) => 
      element.textContent = "🔥 Всего сожжено:");
    }
  } if (num == 3) {
    favArray.splice(
      favArray.findIndex((v) => v.name === name), 1);
    localStorage.setItem("favour", JSON.stringify(favArray));
    return;
}
  generateFood(num);
}

function fav(name, num) {
  if (num ==1) {
    favArray.push(newArray.find((item) => item.name === name));
  } if (num ==2) {
    favArray.push(sportArray.find((item) => item.name === name));
  }  localStorage.setItem("favour", JSON.stringify(favArray));
}

function showFavour() {
  let container = document.querySelector(".fav-container");
  container.innerHTML = "";
  favArray.forEach((Object) => {
    let foodUnit = document.createElement('div');
    foodUnit.className='food-unit';
    foodUnit.setAttribute('name', Object.name);
    foodUnit.insertAdjacentHTML('afterbegin', `<div class="un-side"><input type="number" class="food-amount" size="7" value="${Object.grams || Object.minutes}" 
    name="${Object.name}" /> ${Object.grams ? "грамм" : "минут"} <div class="vertical">
    <button disabled class="amount-changer">^</button><button disabled class="amount-changer">⌄</button></div> 
    <div class="vertical"> ${Object.name} <div class="sub-horizontal"><span class="${Object.name}"> 
    ${Math.round(Object.calories)}</span>  ккал</div></div></div> 
    <div class="un-side" onclick="del('${Object.name}', 3)"><button class="delete" >X</button> </div>`);
    container.insertAdjacentElement(
      "afterbegin",
      foodUnit
    );
    foodUnit.addEventListener("click", function (e) {
      let v = foodUnit.getAttribute("name");
      if (e.target.className !== "delete") {
        let result = food.find((item) => item.name === v);
        let num = 1;
        if (result) {
          newArray.push(result);
          localStorage.setItem("items", JSON.stringify(newArray));
        }
        if (!result) {
          result = sport.find((item) => item.name === v);
          num = 2;
          sportArray.push(result);
          localStorage.setItem("exercise", JSON.stringify(sportArray));
        }
        generateFood(1);
        generateFood(2);
        listener();
      } if (e.target.className == "delete") {
        showFavour();
      }
    }, { once: true })
  })
}

document.querySelector(".search-box").addEventListener('click', listener);
document.querySelector(".search-box").addEventListener('keydown', listener);

function listener() {
  let temp = /\d+/;
  let regime = JSON.parse(localStorage.getItem("regime"))
  let foodCal = +temp.exec(document.querySelector(".total-cal").textContent);
  let sportCal = +temp.exec(document.querySelector(".total-sport-cal").textContent);
  let compare = foodCal - sportCal;
  let container = document.querySelectorAll(".kcal-comparison");
  if (compare / 10 < -10 + regime) {
    container.forEach((element) => element.textContent = `Маловато питательных веществ, ${compare} ккал! 😓`)
  } if (compare / 10 >= -10 +regime && compare / 10 < 10 + regime) {
    container.forEach((element) => element.textContent = `Оптимально, ${compare} ккал! 💪`)
  } if (compare / 10 >= 10 + regime) {
    container.forEach((element) => element.textContent = `Недостаточно физ. нагрузки, ${compare} ккал! 🏋️‍♀️`)
  }
  donut(foodCal, sportCal)
}

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  if (tabName === 'thirdTab') {
    showFavour()
  }
}

function setRegime(evt, regNum) {
  localStorage.setItem("regime", +regNum);
  let tabmodes = document.querySelectorAll(".tabmodes");
  for (let i = 0; i < tabmodes.length; i++) {
    tabmodes[i].className = tabmodes[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

function donut (gain, burn) {
  let xValues = ["Burned", "Gained"];
  let yValues = [burn, gain];
  let barColors = ["#f8c537", "#50af55",];

new Chart("myChart", {
  type: "doughnut",
  options: {
    animation: false,
    legend: {
        display: false,
    }
  },
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },

});
}



setInterval(() => {
  time.textContent = moment().format("MMMM Do, dddd");
}, 500);
