document.addEventListener('DOMContentLoader', ()=> {

    let toTopBtm = document.querySelector('.to-up');
    
    window.onscroll = function(){
        if(window.pageYOffset>580){
            toTopBtm.style.display = 'block'}
            else{
                toTopBtm.style.display = 'none'
            }
    }
    
    toTopBtm.addEventListener('click', function(){
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
   });     
    
 });   

