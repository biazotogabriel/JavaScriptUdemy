//escreva uma função que leia dois numeros e retrone o maior entre eles
function max(n1, n2) {
    return Math.max(n1, n2)
}
console.log(max(4,7))
max2 = function (n1, n2) {
    return n1 > n2 ? n1 : n2
}
console.log(max2(4,7))

max3 = (n1, n2) => n1 > n2 ? n1 : n2
console.log(max3(4,7))