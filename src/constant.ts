type Constants={
    imageCarousel:HTMLElement | null;
    imagesContainer:HTMLElement | null;
    containers:HTMLCollectionOf<Element>;
    image:HTMLCollectionOf<Element>;
    windowHeight:number;
    windowWidth:number;
    currentPosition:number;
    upcommingPosition:number;
    currentContainerPosition:number;
    animationSpeed:number;
    leftBtn:HTMLElement | null;
    rightBtn:HTMLElement |null;
    lowerNavigatorHeight:number;
    lowerNavigator:HTMLElement | null;
    lowerNavigatorCircleSize:number;
    animationEnd:boolean;
}
const widthPercent:number=0.3;
const navigatorCircleSize:number=0.005;

const constants: Constants={
    imageCarousel:document.getElementById('image-carousel'),
    imagesContainer:document.getElementById('images-container'),
    containers:document.getElementsByClassName ('image-container') as HTMLCollectionOf<Element>,
    image:document.getElementsByTagName('img'),
    windowHeight:Math.floor((window.innerWidth*widthPercent) *3/2),
    windowWidth:Math.floor(window.innerWidth*widthPercent),
    currentPosition:0,
    upcommingPosition:0,
    currentContainerPosition:0,
    animationSpeed:1,
    leftBtn:document.getElementById('left-btn'),
    rightBtn:document.getElementById('right-btn'),
    lowerNavigatorHeight:0.2,
    lowerNavigator:document.getElementById("lower-navigator"),
    lowerNavigatorCircleSize:window.innerWidth*navigatorCircleSize,
    animationEnd:true
};


export default  constants;