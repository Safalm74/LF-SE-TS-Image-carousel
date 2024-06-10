import constants from './constant';
import { nextImg,prevImg} from './changeImg';

//adding Event listeners
function runEventListeners():void{
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

}

  export default runEventListeners;