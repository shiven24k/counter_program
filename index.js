let val = 0;

document.getElementById("myCountButton").onclick = function(){
    val++;
    
    document.getElementById("myCounter").textContent = val;
}

document.getElementById("myDecreaseButton").onclick = function(){
    val--;
    
    document.getElementById("myCounter").textContent = val;
}
document.getElementById("myResetButton").onclick = function(){
    val=0;
    
    document.getElementById("myCounter").textContent = val;
}
