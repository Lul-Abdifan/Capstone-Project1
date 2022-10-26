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
      picture:"./assets/img/speaker1.0.jpg",

    },
    {
      name:"Solomon Kassa",
      description:"Founder, 1888EC | Father | Author | Public Speaker | Love:Design/Music/Fashion | George Washington Univ Alum ",
      position:"Tech Strategist and TV Personality",
      picture:"./assets/img/speaker2.jpg"

    },
    {
      name:"Abeba Birhane",
      description:"Senior Fellow in Trustworthy AI @Mozilla Cognitive science PhD @UCDCompSci @ucddublin #Complexity #Embodiment #Ethics. Ethiopian currently in Ireland",
      position:"Adjust Assistant prof University College Dublin,Ireland",
      picture:"./assets/img/speaker3.jpg"

    },
    {
      name:"Antonio Pedro",
      description:"Antonio M.A. Pedro is a mineral exploration geologist and development practitioner with more than 30 years of broad experience at national, sub-regional, and continental levels.",
      position:" United Nations Economic Commission for Africa, YaoundéDirector, Sub Regional Office - Central Africa",
      picture:"./assets/img/speaker4.png"

    },
    {
      name:"Obins Choudhary",
      description:"Artificial INtelligence ,Data Scientist ,Deep Learning",
      position:"Barclays Africa group",
      picture:"./assets/img/speaker4.png"

    },
    {
      name:"Patricio Gerpe",
      description:"Node javascript Developer ,Human Computer Interaction",
      position:"Argentine Artifial intelligence Community Leader",
      picture:"./assets/img/speaker4.png"

    },
  ]