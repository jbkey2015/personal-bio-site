import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import navbar from './components/navBar/navBar';
import tech from './components/tech/tech';


const init = () => {
  projects.buildProjects();
  navbar.buildNav();
  tech.buildTech();
};

init();
