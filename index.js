
let modalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length;   i++){    
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;   
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    
    if(contrastToggle){
        return document.body.classList += " dark-theme";
    } 
    else{
        document.body.classList.remove("dark-theme");
    }

}


function contact(event){
     event.preventDefault();
    
     const loading = document.querySelector('.modal__overlay--loading');
     const success = document.querySelector('.modal__overlay--success'); 
     loading.classList += ' modal__overlay--visible'; 

     // these IDs from the previous steps
    emailjs.sendForm('service_oklzerm', 'template_rtidcv6', event.target, 'S0P59Bdy6vp2DdLYV')
        .then(() => {
            loading.classList.remove('modal__overlay--visible'); 
            success.classList += ' modal__overlay--visible';
        
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible'); 
            alert('The email service is currently unavailable. Please contact me directly on rosynirabarbosa@gmail.com .');
        });
}

function toggleModal(){
    if(modalOpen){
        modalOpen = false;
        return document.body.classList.remove('modal--open');
    } 
    modalOpen = true;
    document.body.classList += ' modal--open';

}

