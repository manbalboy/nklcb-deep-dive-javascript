for(var i=0;i<string.length;i++){
    if(string[i] === search){
        count++;
        
    }
}
for(var i=0;i<string.length;i++){
    if(string[i] !== search) continue;
    
    count++;
}