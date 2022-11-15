const fruits = ["apple", "banana", "peach"];
const $ul = document.createElement("ul");
const alertFruit = (fruit) => {
  alert("your choice is " + fruit);
};
fruits.forEach(function (fruit) {
  const $li = document.createElement("li");
  $li.innerText = fruit;
  $li.addEventListener("click", alertFruit.bind(null, fruit));

  $ul.appendChild($li);
});

document.body.appendChild($ul);
