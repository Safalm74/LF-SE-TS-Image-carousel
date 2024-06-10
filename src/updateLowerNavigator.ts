import constants from "./constant";
import { changeImgAnimation } from "./changeImg";

function initateLowerNavigator():void{
    if(constants.lowerNavigator){
        const totalImage: number=constants.containers.length;
        for(let i=0;i<totalImage;i++){
            const cirNavInst=document.createElement('div');
            cirNavInst.style.height=`${constants.lowerNavigatorCircleSize}px`;
            cirNavInst.style.width=`${constants.lowerNavigatorCircleSize}px`;
            cirNavInst.style.border=`1px solid rgba(200,200,200,0.8)`;
            cirNavInst.style.borderRadius='50%';
            cirNavInst.id=`lowerNavCircle${i}`;
            cirNavInst.style.cursor="pointer";
            cirNavInst.addEventListener(
                'click',
                ()=>{
                    const positionClicked: number=+ (cirNavInst.id).slice(14);
                    let next:number;
                    constants.currentPosition>positionClicked?
                        next=-1:
                        next=1;
                    changeImgAnimation(positionClicked,next);
                    constants.currentPosition=positionClicked;
                    updateLowerNavigator();
                });
            i===constants.currentPosition?
                cirNavInst.style.backgroundColor="white":
                cirNavInst.style.backgroundColor="rgba(165, 163, 163, 0.8)"
            constants.lowerNavigator.appendChild(cirNavInst);
        }
    }
}

function updateLowerNavigator():void{
    const circleNavs=constants.lowerNavigator?.children;
    if (circleNavs){
        for (let i=0;i<circleNavs?.length;i++){
            const cirNavInst=circleNavs[i] as HTMLElement;
            i===constants.currentPosition?
                cirNavInst.style.backgroundColor="white":
                cirNavInst.style.backgroundColor="rgba(165, 163, 163, 0.8)"
        }
    }

}


export  {updateLowerNavigator,initateLowerNavigator};