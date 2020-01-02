import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';


const init = () => {
  projects.buildProjects();
};

init();
