const yes =()=>{
    alert('So you are Stupid')
    // document.getElementById('div0').style.display= 'block'
    document.querySelector('button').style.display= 'none'
    document.querySelector('h1').style.display= 'none'
    document.getElementById('no').style.display = "none"
    // document.getElementById('div1').style.display = "block"
    // document.getElementById('div2').style.display = "block"
    // document.getElementById('div3').style.display = "block"

    // document.getElementById('div4').style.display = "block"
    setTimeout(function(){
        document.getElementById('div0').style.display= 'block'
    }, 1000)
    setTimeout(function(){
        document.getElementById('div1').style.display= 'block'
    }, 3000)
    setTimeout(function(){
        document.getElementById('div2').style.display= 'block'
    }, 5000)
    setTimeout(function(){
        document.getElementById('div3').style.display= 'block'
    }, 7000)
    setTimeout(function(){
        document.getElementById('div4').style.display= 'block'
    }, 9000)


}
const no =()=>{
    document.getElementById('no1').style.display = "block"
    document.getElementById('no').style.display = "none"
    setTimeout(function(){
        // console.log('hi')
        document.getElementById('no4').style.display = "none"
        document.getElementById('no1').style.display = "none"
        document.getElementById('no2').style.display = "none"
        document.getElementById('no3').style.display = "none"
        document.getElementById('no').style.display = "none"
        alert('click on yes')
    },20000)
}
const no1 =()=>{
    document.getElementById('no4').style.display = "block"
    document.getElementById('no1').style.display = "none"
}
const no2 =()=>{
    document.getElementById('no3').style.display = "block"
    document.getElementById('no2').style.display = "none"
}
const no3 =()=>{
    document.getElementById('no1').style.display = "block"
    document.getElementById('no3').style.display = "none"
}
const no4 =()=>{
    document.getElementById('no2').style.display = "block"
    document.getElementById('no4').style.display = "none"
}
// setTimeout(function(){
//     console.log('hi')
//     document.getElementById('no4').style.display = "none"
//     document.getElementById('no1').style.display = "none"
//     document.getElementById('no2').style.display = "none"
//     document.getElementById('no3').style.display = "none"
//     document.getElementById('no').style.display = "none"
//     alert('click on yes')
// },20000)