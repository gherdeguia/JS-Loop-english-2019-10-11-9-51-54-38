

for(let x = 1; x <= 9; x++){
    var outputStr = '';
    for(let y = 1; y <= 9; y++){
        outputStr += x+'*'+y+'='+(x*y)+ ' '
    }
    console.log(outputStr);
}