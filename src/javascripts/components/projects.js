import utilities from '../helpers/utilities';
import projectData from '../helpers/data/projectsData';
import projectsCard from './projectsCard/projectsCard';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '<h1 id="projectTitle" class="text-center">WHAT I\'VE DONE</h1> <hr id="underline">';
      project.forEach((board) => {
        domString += '<di class="container">';
        domString += projectsCard.createProjectCards(board);
      });
      utilities.printToDom('projectsPage', domString);
      domString += '</div>';
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };
