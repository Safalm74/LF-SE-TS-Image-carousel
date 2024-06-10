import stylings from './stylings';
import { initateLowerNavigator } from './updateLowerNavigator';
import runEventListeners from './eventListeners';
import { animationLoop } from './changeImg';

//implementing necessary stylings
stylings();
//initiating lower navigations
initateLowerNavigator();
//adding Event listeners
runEventListeners();
//animation loop
animationLoop();
