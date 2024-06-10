import constants from "./constant";
import { updateLowerNavigator } from "./updateLowerNavigator";
import stylings from "./stylings";

let Interval:any;
let MainLoop:any;
function changeImgAnimation(after:number,next:number): void{
    constants.animationEnd=false;
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
                constants.animationEnd=true;
            }
            } 
        }
        ,constants.animationSpeed);

}

function nextImg():void{
    const totalImage :number=constants.containers.length;
    const temp=constants.currentPosition;
    let next:number;
    constants.currentPosition++;
    constants.currentPosition=constants.currentPosition%totalImage;
    temp>constants.currentPosition?next=-1:next=1

    changeImgAnimation(
        constants.currentPosition,
        next
    );

    updateLowerNavigator();
}

function prevImg():void{
    const totalImage :number=constants.containers.length;
    const temp=constants.currentPosition;
    let next:number;
    constants.currentPosition--;
    if (constants.currentPosition<0) constants.currentPosition=totalImage-1;
    constants.currentPosition=constants.currentPosition%totalImage;
    temp>constants.currentPosition?next=-1:next=1
    changeImgAnimation(
        constants.currentPosition,
        next
    );
    updateLowerNavigator();
}
function animationLoop():void{
    MainLoop=setInterval(
        ()=>{
            stylings();
            if (constants.animationEnd){
                nextImg();
            }
            
        },
        2000
    );
}
export {nextImg,prevImg,Interval,changeImgAnimation,animationLoop,MainLoop};