let i = null,j = null,length = 8,string = '';
for(i = 0 ; i < length ; ++i){
    for(j = 0 ; j < length ; ++j ){
        if((i % 2) == 0){
            string += "# ";
        }
        else{
            string += " #";
        }
    }
    string += "\n";
    console.log(string);
    string = '';
}