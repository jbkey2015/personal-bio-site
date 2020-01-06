import './projectsCard.scss';

const createProjectCards = (projects) => {
  let domString = '';
  domString += `
  <div class="row projectCard">
  <div class="col">
  <a href="${projects.url}"><img class="projectImg" src="${projects.imageUrl}" alt="${projects.title}"></a>
  </div>
  <div class="col projectContents text-center">
  <h4 class="projectTitle">${projects.title}</h4>
    <p class="projectInfo">${projects.description}</p>  
    <p class="projectInfo"><strong>Technologies Used:</strong> ${projects.technoligiesUsed}</p>
  </div>
</div>
      `;
  return domString;
};
export default { createProjectCards };
