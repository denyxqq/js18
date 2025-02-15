// #1
const siblings = document.querySelectorAll(".sibling");
console.log(`У списку ${siblings.length} категорії`);
const titles = document.querySelectorAll(".title");
titles.forEach((titles, index) =>
  console.log(`Категорія: ${titles.textContent} Кількість елементів: ${siblings[index].children.length}`)
);
// #2
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
 ];
 const ulElement =  document.querySelector("ul#ingredients");
let liElement = [];
for(let i = 0; i < ingredients.length; i++){
liElement.push(`<li>${ingredients[i]}</li>`);;
}
const text = liElement.join(" ");

ulElement.innerHTML = text;
// #3
const images = [
  {
   url:
    'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'White and Black Long Fur Cat',
  },
  {
   url:
    'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
   url:
    'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   alt: 'Group of Horses Running',
  },
 ];
 let textElement = [];
 for(let i = 0; i < images.length; i++){
 textElement.push(`<li><img class="img" src="${images[i].url}" alt="${images[i].alt}"></li>`);
 }
 console.log(textElement);
 const conectText = textElement.join(" ");
 document.querySelector("ul#gallery").insertAdjacentHTML("afterbegin" , conectText);

 //    #4

const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[data-action="increment"]')
const valueSpan = document.getElementById('value')
let counterValue = 0
decrementButton.addEventListener('click', () => {
  counterValue -= 1
  valueSpan.textContent = counterValue
})
incrementButton.addEventListener('click', () => {
  counterValue += 1
  valueSpan.textContent = counterValue
})