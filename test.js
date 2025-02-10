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
//    #4