// Write a program to display this pattern.

function printPattern(row,col){
    let nStars = col;
    for(let i = 0;i<row;i++){
        for(let j = 0;j<nStars;j++){
            if(i == 0)
                process.stdout.write("* ");
            else{
                if(j == 0 || (j + 1) == nStars)
                     process.stdout.write("* ");
                else
                     process.stdout.write("  ");    
            }    
        }
        console.log("\n");
        nStars--;
    }
}

printPattern(6,6);