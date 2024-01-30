let rulesBtn = document.getElementById('rules'),
    container = document.querySelector('.container')

;



// show game rules
rulesBtn.addEventListener('click', ()=> {
    let rulesBlock = document.querySelector('.rulesBlock'),
        closeBtn = document.getElementById('closeBtn')
    ;

    rulesBlock.classList.add('active');
    
    closeBtn.addEventListener('click', ()=> {
        rulesBlock.classList.remove('active');
    })

    // if(rulesBlock.classList.contains('active')) {
    //     // container.style.overflowY = 'hidden';
    //     container.style.height = '100vh';
    // } else {
    //     container.style.overflowY = 'auto';
    //     container.style.height = 'auto';
    // }
})