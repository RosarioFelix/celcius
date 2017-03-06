function convertidorFahrenheit() {

    var cel = document.getElementById("fahrenheit").value;
    var x = (cel* 9 / 5 )+ 32;
    document.getElementById("celcius").value = parseInt(x) +"°";
}

function convertidorCelcius() {
        var fah = document.getElementById("celcius").value;
        var y = (fah -32) * 5 / 9;
        document.getElementById("fahrenheit").value = parseInt(y) + "°";
}
