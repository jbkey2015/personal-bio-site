import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects/projects';
import navbar from './components/navBar/navBar';


const init = () => {
  projects.buildProjects();
  navbar.buildNav();
  navbar.buttons();
};

init();
