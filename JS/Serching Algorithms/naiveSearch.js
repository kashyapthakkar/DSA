function linierSearch(supStr, subStr){
    let count = 0;
    for(let i = 0; i < supStr.length; i++){
        for(let j = 0; j < subStr.length; j++){
            if(subStr[j] !== supStr[i + j]){
                break;
            }else if(j === subStr.length - 1){
                count++;
            }
        }
    }
    return count;
}