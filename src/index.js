import{task, project} from './app';
import{pageLoad} from './template';

const firstList = new project('My First List');
firstList.addTask('first things first', 'lets test this is working', 'high', 'now');

const secondList = new project('My Second List');
// secondList.addTask('I second that', 'lets test this more', 'medium', 'later');
