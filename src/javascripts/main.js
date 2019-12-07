import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';


const init = () => {
  projects.createProjectCards(projects);
};

init();
