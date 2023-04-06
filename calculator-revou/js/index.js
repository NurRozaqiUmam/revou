
function calculatewide(){
    const baselength = document.getElementById('baselength')
    const tall = document.getElementById('tall')
    const count = document.getElementById('count')
    const resultwide1 = document.getElementById('resultwide1')
    const resultwide2 = document.getElementById('resultwide2')
    const resultwide3 = document.getElementById('resultwide3')

    count.addEventListener('click', function(){
        let a = baselength.value
        let t = tall.value
        let l = 0.5*a*t
        resultwide1.innerHTML = `L = 1/2 x a x t`
        resultwide2.innerHTML = `L = 1/2 x ${a} cm x ${t} cm`
        resultwide3.innerHTML = `L = ${l} cm`
    })
}
    
function calculatearound(){
    const sidea = document.getElementById('sidea')
    const sideb = document.getElementById('sideb')
    const sidec = document.getElementById('sidec')
    const count1 = document.getElementById('count1')
    const resultaround1 = document.getElementById('resultaround1')
    const resultaround2 = document.getElementById('resultaround2')
    const resultaround3 = document.getElementById('resultaround3')

    count1.addEventListener('click', function(){
        let a = sidea.value
        let b = sideb.value
        let c = sidec.value
        let k = Number(a) + Number(b) + Number(c)
        resultaround1.innerHTML = `K = a + b + c`
        resultaround2.innerHTML = `K =  ${a}cm + ${b} cm + ${c} cm`
        resultaround3.innerHTML = `K = ${k} cm`
    })
}

function calculatewideparallelogram(){
    const baseparallelogram = document.getElementById('baseparallelogram')
    const tallparallelogram = document.getElementById('tallparallelogram')
    const count2 = document.getElementById('count2')
    const resultwideparallelogram1 = document.getElementById('resultwideparallelogram1')
    const resultwideparallelogram2 = document.getElementById('resultwideparallelogram2')
    const resultwideparallelogram3 = document.getElementById('resultwideparallelogram3')

    count2.addEventListener('click', function(){
        let a = baseparallelogram.value
        let t = tallparallelogram.value
        let l = a*t
        resultwideparallelogram1.innerHTML = `L = a x t`
        resultwideparallelogram2.innerHTML = `L = ${a} cm x ${t} cm`
        resultwideparallelogram3.innerHTML = `L = ${l} cm`
    })
}

function calculatearoundparallelogram(){
    const baseparallelogram1 = document.getElementById('baseparallelogram1')
    const sisibparallelogram = document.getElementById('sisibparallelogram')
    const count3 = document.getElementById('count3')
    const resultaroundparallelogram1 = document.getElementById('resultaroundparallelogram1')
    const resultaroundparallelogram2 = document.getElementById('resultaroundparallelogram2')
    const resultaroundparallelogram3 = document.getElementById('resultaroundparallelogram3')
    
    count3.addEventListener('click', function(){
        let a = baseparallelogram1.value
        let b = sisibparallelogram.value
        let k = 2*(Number(a) + Number(b))
        resultaroundparallelogram1.innerHTML = `L = a x t`
        resultaroundparallelogram2.innerHTML = `L = 2 x (${a} cm + ${b} cm)`
        resultaroundparallelogram3.innerHTML = `L = ${k} cm`
    })

}