const language = [
  {
    subtitle: "Desarrollador Multiplataforma y Diseñador Web",
    sobre_mi_title: "Sobre Mi",
    sobre_mi_text: `Me llamo Ruben y soy desarrollador de software con interes en los juegos y en Android <br>
          <br>
          Tengo el titulo de Sistemas Microinformaticos y Redes en el IES Monte da vila y tengo tambien el titulo de Desarrollo de Aplicaciones Multiplataforma en IES Chan do Monte. Ahora mismo, estoy en un curso de Diseño Web para reciclarme y volver al diseño de moviles con mas fuerza. <br>
          <br>
          En mi tiempo libre, me gusta hacer deporte, jugar videojuegos y aprender cosas nuevas. <br>
          <br>
          Si quieres saber mas sobre mi, puedes mirar mi CV.`,
    skills_title: "Habilidades",
    projects_title: "Proyectos",
    contact_title: "Contacto",
  },
  {
    subtitle: "Multiplatform Developer and Web Designer",
    sobre_mi_title: "About Me",
    sobre_mi_text: `
    My name is Ruben, and I'm a software developer with an interest in games and Android.
    <br><br>
I have a degree in Sistemas Microinformaticos y Redes from IES Monte da Vila and a degree in Desarrollo de Aplicaciones Multiplataforma from IES Chan do Monte. I'm currently taking a Web Design course to refresh my skills and return to mobile design with renewed energy.
    <br><br>
In my free time, I enjoy playing sports, video games, and learning new things.
    <br>
    <br>
If you'd like to know more about me, you can view my CV.
    `,
    skills_title: "Skills",
    projects_title: "Projects",
    contact_title: "Contact",
  },
];


const lang = document.getElementById('lang');
lang.addEventListener('change', (event) => {
  let index = event.target.value;
  document.getElementById('subtitle').innerText = language[index].subtitle;
  document.getElementById('aboutTitle').innerHTML = language[index].sobre_mi_title;
  document.getElementById('aboutText').innerHTML = language[index].sobre_mi_text;
  document.getElementById('skillsTitle').innerHTML = language[index].skills_title;
  document.getElementById('projectsTitle').innerHTML = language[index].projects_title;
  document.getElementById('contactTitle').innerHTML = language[index].contact_title;
})