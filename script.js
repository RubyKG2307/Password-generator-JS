
const lengthTag = document.querySelector("#length")
const letterTag = document.querySelector("#letters__yes")
const numberTag = document.querySelector("#numbers")
const symbolTag = document.querySelector("#symbols")
const generateBtn = document.querySelector(".generator__generate")
const passwordTag = document.querySelector(".generator__password")
const errorTag = document.querySelector(".generator__error")
const copyBtn = document.querySelector(".generator__copy")



const randomizer = (max) => {
    let  rand =   Math.random()  * max ;
    return Math.floor(rand)
}

let result = ""
generateBtn.addEventListener("click",() => {
    passwordTag.innerText = ""
    result = ""
    copyBtn.style.display = "none"

    if (lengthTag.value  && +lengthTag.value > 7  && +lengthTag.value < 128 ) {
        const length = +lengthTag.value
        const isLettersChecked = letterTag.checked
        const isNumbersChecked = numberTag.checked
        const isSymbolsChecked = symbolTag.checked

        const symbolsString = "!\"#$%&\'()*+,-./:;<=>?{}~'"
        const numbersString = "0123456789"
        const lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        let symbolsForUse = ""

        symbolsForUse = (isNumbersChecked ? numbersString : "")
            + (isSymbolsChecked ? symbolsString : "")
            + (isLettersChecked ? lettersString : "")

        if (symbolsForUse) {
            let result = ""
            for (let i = 0; i < length; i++) {
                const random = randomizer(symbolsForUse.length)
                result = `${result}${symbolsForUse[random]}`
            }
            passwordTag.innerText = result
            lengthTag.style.border = "1px solid #000"
            errorTag.innerText = ""
            copyBtn.style.display = "inline"

        } else {
            errorTag.innerText = "You should select something"
        }


    } else {
        lengthTag.style.border = "1px solid brown"
        errorTag.innerText = "Please check input length"
    }
})
 copyBtn.addEventListener("click",()=>{
     navigator.clipboard.writeText(result)
 })
