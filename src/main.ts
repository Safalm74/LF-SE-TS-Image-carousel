import constants from './constant';
import stylings from './stylings';
import { nextImg,prevImg} from './changeImg';
import { initateLowerNavigator } from './updateLowerNavigator';

//implementing necessary stylings
stylings();
initateLowerNavigator();
window.addEventListener(
  'keypress',
  (e: KeyboardEvent)=>{
    if(e.key.toLowerCase()==='d'){
      nextImg();
    } 
    if(e.key.toLowerCase()==='a'){
      prevImg();
    }
  }
);
constants.leftBtn?.addEventListener(
  'click',
  ()=>{
    prevImg();
  });
constants.rightBtn?.addEventListener(
  'click',
  ()=>{
    nextImg();
  });
