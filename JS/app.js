const btnContainer = document.querySelector('.myBtnContainer');
const btns = btnContainer.querySelectorAll('.catalog-btn');
const menuButton = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')
const order = document.querySelector('.b-order')
const consulIvan = document.querySelector('.consult-i') 
const consulGalina = document.querySelector('.consult-g') 
const consulSveta = document.querySelector('.consult-s') 
const subs = document.querySelector('.mailing-b')
const sub = document.querySelector('.sub')
const mails = document.querySelector('.mails')
subs.onclick = function ()
{
  alert("Успешно!")
}
order.onclick = function() 
{
  alert("Звонок заказан, ожидайте!");
}
consulIvan.onclick = function() 
{
  alert("Менедежер недоступен!");
}

consulGalina.onclick = function() 
{
  alert("Менедежер недоступен!")
}
consulSveta.onclick = function() 
{
  alert("Светлана свяжется с вами в ближайшее время!")
}




for (var i = 0; i < btns.length; i++) {
  console.log("jkdhdjkgh");
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

menuButton.addEventListener('click', () => {
  console.log("ejfhhefh");
  menu.classList.toggle("is-open")
})







