import util from '../helpers/utilities';
import projectsData from '../helpers/data/projectsData';


const createProjectCards = (projectsArray) => {
  let stringToPrint = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projectsArray.length; i++) {
    const project = projectsArray[i];
    if (project.available) {
      stringToPrint += `
        <div class = "projectPage">
          <h2>${project.title}</h2>
          <img src = ${project.imageUrl}>
          <p>${project.description}</p>
          <p>${project.technoligiesUsed}</p>
          <a href = ${project.url}>URL</a>
          <a href = ${project.githubUrl}>GitHub</a>
        </div>
        `;
    }
  }
  util.printToDom(stringToPrint, 'projectsPage');
};

const printProjects = () => {
  projectsData.getProjects()
    .then((projects) => {
      const projectCards = createProjectCards(projects);
      util.printToDom('projectsPage', projectCards);
    })
    .catch((error) => console.error(error));
};


export default { printProjects };
