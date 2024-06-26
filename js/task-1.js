const ul1 = document.querySelector('ul#categories');
const liItem = ul1.querySelectorAll('li.item');
console.log("Number of categories: " + liItem.length);

for (let i = 0; i < liItem.length; i++) {
  let h2 = liItem[i].querySelector('h2');
  console.log("Category: " + h2.textContent);

  let ulitems = liItem[i].querySelector('ul');
  let licateg = ulitems.querySelectorAll('li');
  console.log("Elements: " + licateg.length);
}