var projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/jbkey2015",
        githubUrl: "https://github.com/jbkey2015",
      },
      {
        title: "Not Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/jbkey2015",
        githubUrl: "https://github.com/jbkey2015",
      },
];

const printToDom = (message, divId) => {
    document.getElementById(divId).innerHTML = message
}

const createProjectCards = (projectsArray) => {
    let stringToPrint = '';    
    for (let i = 0; i < projectsArray.length; i ++) {
        const project = projectsArray[i]
        if (project.available) {
        stringToPrint += `
        <div class = "projectPage">
          <h2>${project.title}</h2>
          <img src = ${project.screenshot}>
          <p>${project.description}</p>
          <p>${project.technoligiesUsed}</p>
          <p>${project.available}</p>
          <a href = ${project.url}>URL</a>
          <a href = ${project.githubUrl}>GitHub</a>
        </div>
          `
    }  
  }
    printToDom(stringToPrint, 'projectsPage')
}



const linkButtons = () => {
  const buttons = document.getElementsByTagName("button");
  for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
      const buttonType = event.target.id;
      event.preventDefault();
      if (buttonType === "navToBio") {
        technologiesPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:none');
        bioPage.setAttribute('style', 'display:block')
      } else if (buttonType === "navToTechnologies") {
        bioPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:none');
        technologiesPage.setAttribute('style', 'display:block')
      } else if (buttonType === "navToProjects") {
        technologiesPage.setAttribute('style', 'display:none');
        bioPage.setAttribute('style', 'display:none');
        projectsPage.setAttribute('style', 'display:block')
      } 
    })
  }
};


const init = () => {
  createProjectCards(projects)
  window.addEventListener('click', linkButtons);
};

init()
