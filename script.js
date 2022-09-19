console.log("Hello")

const timeTag = document.querySelector(".timer__time")
const startBtn = document.querySelector(".timer__start")
const pauseBtn = document.querySelector(".timer__pause")
const resetBtn = document.querySelector(".timer__reset")

let runTimer = null
let ss = 0
let mm = 0
let hh = 0

 const zeroAdder = (num) => {
    if (num < 10) {
       return `0${num}`
    } else{
        return num
    }
 }
 const  showTime = () => {

    timeTag.innerText = `${zeroAdder(hh)}:${zeroAdder(mm)}:${zeroAdder(ss)}`

};

startBtn.addEventListener("click",() => {
    if (runTimer === null) {
        runTimer = setInterval(() => {
            ss++
            if (ss === 60) {
                ss = 0
                mm++
            }
            if (mm === 60) {
                mm = 0
                hh++
            }
            showTime()
        }, 1000)
    }
})

pauseBtn.addEventListener("click",() =>{
    clearInterval(runTimer)
    runTimer = null
})

resetBtn.addEventListener("click",() =>{
    clearInterval(runTimer)
    runTimer = null
    ss = 0
    mm = 0
    hh = 0
    showTime()
})