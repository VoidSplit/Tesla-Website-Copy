
let MS = document.getElementById('MS')
let MSPlaid = document.getElementById('MSPlaid')
let box = document.getElementById('cursor-box')
let imgDual = document.getElementById('technology-image-Dual')
let imgTri = document.getElementById('technology-image- Tri')

MS.addEventListener('click', () => {
    verify('MS')
})

MSPlaid.addEventListener('click', () => {
    verify('MSPlaid')
})
function verify(item) {
    console.log('verify')
    if(item == 'MS') {
        if(!MS.classList.contains('active')) {
            switchActive()
        }
    } else if (item == 'MSPlaid') {
        if(!MSPlaid.classList.contains('active')) {
            switchActive()
        }
    }
}
function switchActive() {
    console.log('switched')
    MS.classList.toggle('active')
    MSPlaid.classList.toggle('active')
    box.classList.toggle('right')
    imgDual.classList.toggle('inactive')
    imgTri.classList.toggle('inactive')
}