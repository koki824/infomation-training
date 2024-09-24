let count = 0;
function increaseCount(){
    if (count > 4) {
    } else {
        count++;
    }
    document.getElementById("counter").innerText = count;
}
function herasuCount(){
    if (count < -4) {
    } else {
        count--;
    }
    document.getElementById("counter").innerText = count;
}