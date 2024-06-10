import constants from "./constant";
import { updateLowerNavigator } from "./updateLowerNavigator";

let Interval:any;
function changeImgAnimation(after:number,next:number): void{
    clearInterval(Interval);
    let before=constants.currentContainerPosition;
    after=after*constants.windowWidth;
    Interval=setInterval(
        ()=>{
            if(constants.imagesContainer){
            constants.imagesContainer.style.left=`-${before}px`; 
            before=before+next;
            constants.currentContainerPosition=before;
            if (before===after){
                clearInterval(Interval);
            }
            } 
        }
        ,constants.animationSpeed);

}

function nextImg():void{
    const totalImage :number=constants.containers.length;
    if (constants.currentPosition<totalImage-1){
        changeImgAnimation(
            constants.currentPosition + 1,
            1
        );
        constants.currentPosition++;
        updateLowerNavigator();

    }
}

function prevImg():void{
    if (constants.currentPosition>0){
        changeImgAnimation(
            constants.currentPosition - 1,
            -1
        );
        constants.currentPosition--;
        updateLowerNavigator();
    }
}

export {nextImg,prevImg,Interval,changeImgAnimation};