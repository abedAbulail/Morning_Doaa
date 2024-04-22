const allcounters = document.querySelectorAll('.counter')

allcounters.forEach(counter => {

    counter.addEventListener('click',()=>{

        let count = parseInt(counter.innerHTML);
        if(count>0){
            count--;
            counter.innerHTML=count;
            if(count ==0){
              counter.classList.add('finish');
            }
        }
      
        

    })
    

}
);
