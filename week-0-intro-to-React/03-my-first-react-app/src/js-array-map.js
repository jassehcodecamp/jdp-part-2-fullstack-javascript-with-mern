const MENU_ITEMS = [
  'Home',
  'About',
  'Services',
  'Contact Us'
];

const domMenuItems = MENU_ITEMS.map(function(item) {
  return `<li><a>${item}</a></li>`
})

console.log(domMenuItems);