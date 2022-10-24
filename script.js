const overlay=document.getElementById('overlay');
const  openHumberger =document.getElementById('openHumberger');
const overlay_link =document.querySelectorAll('.overlay_link')

closeBtn =document.getElementById('closeBtn');
openHumberger.onclick = () => {
    overlay.style.display = 'block';
    document.body.style.position = 'fixed';
  };
  closeBtn.onclick =() =>{
    overlay.style.display = 'none';
    document.body.style.position = 'relative';
  }
overlay_link.forEach((btn) => {
    btn.onclick = () => {     overlay.style.display = 'none';
    document.body.style.position = 'relative';};
  });