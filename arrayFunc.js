//vai a prendere da DOM quell'elemento tramite ID
let res = document.getElementById("res");
let input = document.getElementById("in");
let btn = document.getElementById("bottone");


btn.addEventListener("click", nomefunzione )


//funzioni
function nomefunzione(){
    let inVal = Number (input.value)


    //QUESTA E' LA GUARDIA, PREVIENE GLI ERRORI, penso
    if(isNaN(inVal)){
        res.textContent = "NOOOO"
        return
    }

    console.log(typeof(inVal))
    console.log((inVal+5))
    console.log(typeof(inVal+5))
    res.textContent = inVal+ "+5= " + (inVal+5)

}

//array eterogenei e dinamici
let array = [1,2,3,4,5]
array.push(123)
array.pop()
array.pop()
console.log(array)

