// Menu button
const menuBtn = document.getElementById('menu-btn')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('change');

    if (menuBtn.classList.contains('change')) {
        document.getElementById('menu').style.width = '12em'
        document.getElementById('menu-btn').style.right = '14em'
        return
    }

    document.getElementById('menu').style.width = '0'
    document.getElementById('menu-btn').style.right = '2em'
})


// Theme switch button
const switchBtn = document.getElementById('switch-btn')
const switchToggle = document.getElementById('switch-toggle')

switchBtn.addEventListener('click', () => {
    
    document.body.classList.toggle('dark')
    switchBtn.classList.toggle('active')

    if (switchBtn.classList.contains('active')) {
        switchToggle.style.left = 'unset'
        switchToggle.style.right = '0'
        return
    }
    
    switchToggle.style.left = '0'
    switchToggle.style.right = 'unset'
})