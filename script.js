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


  Speakers =[
    {
      name:"Dr. Abiy Ahmed Ali",
      description:"Prime Minister Abiy Ahmed founded INSA or the Information Network Security Agency and became its director from 2008 through 2010. INSAis an organization which spies on people which the government targets it also secures and encrypts Ethiopia's cyber security",
      position:"Prime Minister of Ethiopia, Nobel Peace Winner , Founder and Former Director of INSA",
      picture:"./assets/img/speaker1jpeg",

    },
    {
      name:"",
      description:"",
      position:"",
      picture:""

    },
    {
      name:"",
      description:"",
      position:"",
      picture:""

    },
    {
      name:"",
      description:"",
      position:"",
      picture:""

    },
    {
      name:"",
      description:"",
      position:"",
      picture:""

    },
    {
      name:"",
      description:"",
      position:"",
      picture:""

    },
  ]