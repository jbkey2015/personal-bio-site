import util from '../helpers/utilities';

const createProjectCards = (projectsArray) => {
  let stringToPrint = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projectsArray.length; i++) {
    const project = projectsArray[i];
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
          `;
    }
  }
  util.printToDom(stringToPrint, 'projectsPage');
};


export default { createProjectCards };
