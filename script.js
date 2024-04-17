total = 0;

function add(val){
    total += val;
    document.getElementById("output").value = total + ".00$";
}

function rem(val){
    total -= val;
    if (total < 0) {  
        total = 0;
    }
    document.getElementById("output").value = total + ".00$";
}
