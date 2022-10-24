


const moonIcon = document.querySelector(".moon");
const sunIcon =document.getElementById('icon')

const toggle = document.querySelector('.toggle')

const body = document.querySelector('body')

const dropdownBox = document.querySelector('.dropdown-box')
const buttonBox = document.querySelector('.button-box')


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            
        }else{
            entry.target.classList.remove('show')

        }
    })
    
})

const hiddenSection = document.querySelectorAll('.hidden')
console.log(hiddenSection)

hiddenSection.forEach((section) => {
    observer.observe(section)
    
})

toggle.addEventListener('click',(e) => {
    e.preventDefault()
        toggle.classList.toggle('active')
        body.classList.toggle('light')
        
})

