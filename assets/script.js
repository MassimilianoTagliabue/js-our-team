const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardElem = document.getElementById("card");





const cardItem = (Members) => {

  for (let i = 0; i < teamMembers.length; i++) {

    const currItem = teamMembers[i];
  
    let { name, role, email, img } = currItem;
  
    console.log(name);
    console.log(role);
    console.log(email);
    console.log(img);

  cardElem.innerHTML += `

  <div>${name}</div>
  <span>${role}</span>
  <span>${email}</span>
  <span>${img}</span>
  <br><br>


`;

}
};

console.log(cardItem(teamMembers));