import './tech.scss';
import utilities from '../../helpers/utilities';


const buildTech = () => {
  const domString = `
  <div class= "container">
    <div class="row">
      <div class="col-12">
        <h1 class="skillsTitle d-flex justify-content-center">TECHNOLOGY</h1>
        <hr id="underline">
        <div class="d-flex flex-wrap container-fluid justify-content-between text-center">
          <li class="skillsIcons"><i class="fab fa-js"></i></li>
          <li class="skillsIcons"><i class="fab fa-html5"></i></li>
          <li class="skillsIcons"><i class="fab fa-sass"></i></li>
          <li class="skillsIcons"><i class="fab fa-css3-alt"></i></li>
          <li class="skillsIcons"><i class="fab fa-react"></i></li>
          <li class="skillsIcons"><i class="fab fa-git"></i></li>
        </div>
      </div>
    `;
  utilities.printToDom('technologiesPage', domString);
};

export default { buildTech };
