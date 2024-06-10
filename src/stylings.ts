import constants from './constant';

function stylings(){
     /*
    width:20% of total width
    height: 3/2 * width (maintaining 2:3 image ratio)

    */ 
    const totalImage: number= constants.containers.length;
    const image_gaps: number=5;
    const imageContainer= Array.from(constants.containers);
    const image= Array.from(constants.image);
   
    //imageCarousel properties:
    if (constants.imageCarousel){
        constants.imageCarousel.style.position="relative";
        constants.imageCarousel.style.width = `${constants.windowWidth}px`;
        constants.imageCarousel.style.height =`${constants.windowHeight}px`;
        constants.imageCarousel.style.overflow="hidden";
    }
    else{
        console.log('imageCarousel Not Found');
    }
    //container for containers: imagesContainer
    if (constants.imagesContainer) {
        constants.imagesContainer.style.position= "absolute";
        constants.imagesContainer.style.width =`${
            constants.windowWidth * totalImage+ 
            image_gaps*totalImage}px`
        constants.imagesContainer.style.height=`${constants.windowHeight}px`;
        
    }
    else{
        console.log('imagesContainer Not Found');
    }
    //image container and img
    for(let i=0;i<totalImage;i++){
        const ImageContainer=imageContainer[i] as HTMLElement;
        const Image=image[i] as HTMLElement;
        
        ImageContainer.style.width = `${constants.windowWidth}px`;
        ImageContainer.style.height =`${constants.windowHeight}px`;
        ImageContainer.style.display=`inline-block`;

        Image.style.width="100%";

    }


}
export default stylings;