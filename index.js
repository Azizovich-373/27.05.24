const btns = document.querySelectorAll('.btn')
const white = document.querySelector('.white')
const space = document.querySelector('.space')
const color = document.querySelector('#color')
const price = document.querySelector('#price')
const img = document.querySelector('#img')
const price_b = document.querySelector('.price_b')

space.onclick = () => {
    color.innerHTML = 'Space Gray'
    img.src = 'https://media.ldlc.com/r1600/mkp/ad8d1a391af94a58bb653b296a973187.jpeg';
    space.classList.add('active')
    white.classList.add('noactive')
}
white.onclick = () => {
    color.innerHTML = 'White'
    img.src = 'https://a.allegroimg.com/original/1160d2/0441c41647489ffc4e88928f41f0/Apple-MacBook-Pro-A1707-i7-7820HQ-16GB-500GB-SSD'
    white.classList.remove('noactive')
    space.classList.remove('active')
}
btns.forEach(btn => {
    
    btn.onclick = () => {
        const value = +(price.innerHTML)
        const value_b = +(price_b.innerHTML)
        btns.forEach(btn => btn.classList.remove('btn_active'))
        btn.classList.add('btn_active')
        price.innerHTML = value + value_b
    }
});