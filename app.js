const calculateTemp = () => {
    const numInput = document.getElementById("number").value;
    const TempSelected = document.getElementById("Celc_fah");
    const tempValue = Celc_fah.options[TempSelected.selectedIndex].value;
     const celToFah = (cel) =>{
        let fah = Math.round((cel * 9/5) +32);
       return fah;
     }
     const fahToCel = (faren) =>{
        let cels = Math.round((faren -32)*5/9);
       return cels;
     }
    let result;
    if (tempValue === 'cel') {
         result = celToFah(numInput)
         
        document.getElementById("result").innerHTML = `= ${result}°Fahrenheit`
    } else {
         result = fahToCel(numInput)
        document.getElementById("result").innerHTML = `= ${result} °Celcius`
    }

}