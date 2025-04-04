const positionAll = document.querySelectorAll('.position');
const clickInfoAll = document.querySelectorAll('.click__info');
// const info = document.querySelectorAll('.info')

// info.style.display = 'none'

clickInfoAll.forEach((clickInfo) => {
    clickInfo.addEventListener('click', () => {
        // const clickInfoAll = document.querySelectorAll('.click__info');
        
        clickInfo.classList.toggle('open')
        
        
        console.log('cl');
    })
}) 


// .outer 

// .circle 

//  

// .two 

// 

// .info 

// .target__site 
