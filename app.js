var a = document.getElementById("in1")

function input(num) {
    a.value += num;
}

function calculate() {
    var b = a.value
    a.value = eval(b)

}

function clearValue() {
    a.value = ''
}