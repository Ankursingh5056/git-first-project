function Prime_Or_Not(n){      
    if (n == 1) {
        console.log("Non-Prime");
        return;
    }
    for(let i = 2 ; i < n ; i++){
        if (n%i == 0){
            console.log("Non-Prime");
            return;
        }
    }
    console.log("Prime");
}

function main(n){
    if(n<=1){
        return false;
    }
    for (let i = 2 ; i < n ; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
