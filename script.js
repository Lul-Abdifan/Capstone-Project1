const overlay = document.getElementById('overlay');
const openHumberger = document.getElementById('openHumberger');
const overlayLink = document.querySelectorAll('.overlay_link');

const closeBtn = document.getElementById('closeBtn');
openHumberger.onclick = () => {
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
};
closeBtn.onclick = () => {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
};
overlayLink.forEach((btn) => {
  btn.onclick = () => {
    overlay.style.display = 'none';
    document.body.style.position = 'relative';
  };
});

const Speakers = [
  {
    id: 1,
    name: 'Dr. Abiy Ahmed Ali',
    description: "Prime Minister Abiy Ahmed founded INSA or the Information Network Security Agency and became its director from 2008 through 2010. INSAis an organization which spies on people which the government targets it also secures and encrypts Ethiopia's cyber security",
    position: 'Prime Minister of Ethiopia, Nobel Peace Winner , Founder and Former Director of INSA',
    picture: './assets/img/speaker1.0.jpg',

  },
  {
    id: 2,
    name: 'Solomon Kassa',
    description: 'Solomon is technology strategist and consultant at a Fortune  500 Global Firm leading a multimillion-dollar large  technology implementation. He worked as a software engineer before joining management consulting.',
    position: 'Founder, 1888EC | Father | Author | Public Speaker | Love:Design/Music/Fashion | George Washington Univ Alum ',

    picture: './assets/img/speaker2.jpg',

  },
  {
    id: 3,
    name: 'Abeba Birhane',
    position: 'Senior Fellow in Trustworthy AI @Mozilla Cognitive science PhD  Ethiopian currently in Ireland',
    description: 'Abeba Birhane is an Ethiopian-born cognitive scientist who works at the intersection of complex adaptive systems, machine learning, algorithmic bias, and critical race studies.',
    picture: './assets/img/speaker3.jpg',

  },
  {
    id: 4,
    name: 'Antonio Pedro',
    description: 'Antonio M.A. Pedro is a mineral exploration geologist with more than 40 years of broad experience of and exposure to development issues and management at national, sub-regional, and continental levels. He joined the United Nations Economic Commission for Africa (ECA) in 2001, ',
    position: ' United Nations Economic Commission for Africa, Yaound??Director, Sub Regional Office - Central Africa',
    picture: './assets/img/speaker4.png',

  },
  {
    id: 5,
    name: 'Obins Choudhary',
    description: 'Artificial INtelligence ,Data Scientist ,Deep Learning,Carscan, a South African auto-tech firm that manufactures an augmented reality (AR) app with embedded artificial intelligence (AI) that creates an accurate, reliable, agnostic, complete, and traceable digital record of a car has secured an undisclosed amount in a funding round aimed at scaling up its operations.',
    position: 'Carscan co-founder,Barclays Africa group',
    picture: './assets/img/speaker5.jpeg',

  },
  {
    id: 6,
    name: 'Boris Stilman',
    description: 'Boris Stilman is a Professor of Computer Science at the University of Colorado Denver, USA and the Chairman and CEO of STILMAN Advanced Strategies, LLC, USA. In 1972-1988, in Moscow, USSR, he was involved in the advanced research project PIONEER led by a former World Chess Champion Professor Mikhail Botvinnik.',
    position: 'Professor of Computer Science at the University of Colorado Denver, USA',
    picture: './assets/img/speaker6.JPG',

  },
];

const speakerLists = document.getElementById('speakers-con');
for (let i = 0; i < Speakers.length; i += 1) {
  speakerLists.innerHTML += `<div class="speaker" id="speaker${Speakers[i].id}">
  <div class="speakerImages">
      <img src="${Speakers[i].picture}" class="speakerImage" alt="speaker -image">
  </div>

  <div class="text-container">
    <h2>${Speakers[i].name}</h4>
     <h3>${Speakers[i].position}</h6>
     <p>${Speakers[i].description}</p>
  </div>
</div>
  `;
}
const speaker5 = document.getElementById('speaker5');
const speaker6 = document.getElementById('speaker6');
const moreSpeaker = document.getElementById('more');
moreSpeaker.onclick = () => {
  if (speaker6.style.display === 'none' || speaker5.style.display === '') {
    moreSpeaker.innerHTML = 'Less ';
    speaker5.style.display = 'flex';
    speaker6.style.display = 'flex';
  } else {
    moreSpeaker.innerHTML = 'More';
    speaker5.style.display = 'none';
    speaker6.style.display = 'none';
  }
};
