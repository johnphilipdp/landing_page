const slideMenu = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', ()=> {
       nav.classList.toggle('nav-active');
    });

    document.html.addEventListener('click', ()=> {
        nav.classList.add('nav-active');
     });
    
}

const backTop = () =>{
        

    
    window.onscroll = ()=> {  
        
            const sCount = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            const topBtn = document.querySelector('.backToTop');
    
            const headerHeight = document.querySelector('header').offsetHeight;
    
            if(sCount > headerHeight){
              topBtn.classList.add('backToTop--show');
            } else{
                topBtn.classList.remove('backToTop--show');
            }
        
    } 
    
}
        
        




const animation = () => {
    
    backTop();
    slideMenu();
    
}

animation();