import utilities from '../../helpers/utilities';


const buildNav = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light mainNav">
  <a class="navbar-brand" href="#welcome">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse navLinks" id="navbarSupportedContent">
    <ul class="navbar-nav container">
      <li class="nav-item active">
        <a class="nav-link" id="navLink" href="#bioPage">ABOUT</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" id="navLink" href="#technoligiesPage">SKILLS</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" id="navLink" href="#projectsPage">PROJECTS</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" id="navLink" href="#contact">CONTACT</a>
      </li>
    </ul>
  </div>
</nav> 
    `;
  utilities.printToDom('navbar', domString);
};

export default { buildNav };
