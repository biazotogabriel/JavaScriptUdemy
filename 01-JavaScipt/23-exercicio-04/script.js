const container = document.querySelector('#container')
const paragrafos = container.querySelectorAll('p')
const bodyStyle = getComputedStyle(document.body)
bodyStyle.backgroundColor
for (let key of paragrafos) {
    key.style.backgroundColor = bodyStyle.backgroundColor
}