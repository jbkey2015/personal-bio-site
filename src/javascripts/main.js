import 'bootstrap';
import '../styles/main.scss';
import projects from './components/projects';


const init = () => {
  projects.init();
  projects.printProjects();
};

init();
