const typed = new Typed(".looptype" , {
    strings:["Code Vantage","Pray Patel.."],
    typeSpeed: 120,
    backSpeed: 120,
    loop:true,
});

window.addEventListener('scroll' , ()=>{
    const header = document.getElementById('header');
    if(window.scrollY>100){
        header.classList.add('shrink');
    }
    else{
        header.classList.remove('shrink');
    }
});