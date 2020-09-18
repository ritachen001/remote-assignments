// Request 1: Click to Change Text.
const h1text = document.getElementById('h1text');
h1text.addEventListener('click' , () => {
    h1text.textContent = "Have a Good Time!";
});


// Request 2: Click to Show/Close Menu.
const menubar = document.querySelector('#menubar i');
const menulist = document.getElementById('menulist');


menubar.addEventListener('click' , () => {
  if(menulist.style.display == 'none'){
    // 如果原本表單關閉
    menulist.style.display = 'block';
    menubar.className = 'fas fa-times';
    // 按了他就會打開
  }else{
    menulist.style.display = 'none';
    menubar.className = 'fas fa-bars';
    // 不然就一直是關的
  }
});



// Request 3: Click to Show More Content Boxes.
const toggleList = document.getElementById('toggleList');
const toggle_box = document.getElementById('toggle_box');

toggleList.addEventListener('click' , () => {
  if(toggle_box.style.display == 'none'){
  toggle_box.style.display = 'block';
  }else{
    toggle_box.style.display = 'none';
  }
});