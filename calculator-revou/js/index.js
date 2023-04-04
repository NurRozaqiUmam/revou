
function calculatewide(){
    const baselength = document.getElementById('baselength')
    const tall = document.getElementById('tall')
    const count = document.getElementById('count')
    const result1 = document.getElementById('result1')
    const result2 = document.getElementById('result2')
    const result3 = document.getElementById('result3')

    count.addEventListener('click', function(){
        let a = baselength.value
        let t = tall.value
        let l = 0.5*a*t
        result1.innerHTML = `L = 1/2 x a x t`
        result2.innerHTML = `L = 1/2 x ${a} x ${t}`
        result3.innerHTML = `L = ${l}`
    })
}
    
function calculatearound(){
    const sidea = document.getElementById('sidea')
    const sideb = document.getElementById('sideb')
    const sidec = document.getElementById('sidec')
    const count1 = document.getElementById('count1')
    const result11 = document.getElementById('result11')
    const result12 = document.getElementById('result12')
    const result13 = document.getElementById('result13')

    count1.addEventListener('click', function(){
        let a = sidea.value
        let b = sideb.value
        let c = sidec.value
        let k = a+b+c
        result11.innerHTML = `K = a + b + c`
        result12.innerHTML = `K =  ${a} + ${b} + ${c}`
        result13.innerHTML = `K = ${k}`
    })
}