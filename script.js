let slider = document.querySelector('#slider')
let texts = ['text1', 'текст2', 'ТЕКСТ3']

let i = 0

setInterval(() => {
slider.textContent = texts[i]
i++
if (i == texts.length) {
    i = 0
}
}, 1000)
