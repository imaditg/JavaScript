function CountBs(str = null){
    if(str == null){
        return console.log("No string has been added");
    }
    else{
        let len = null,i = 0,count = 0;
        str = String(str);
        len = str.length;
        for(i = 0 ; i < len ; ++i){
            if(str[i] == 'B'){
                ++count;
            }
        }
        return console.log("The number of 'B' in the string is : " + count);
    }
}
CountBs("The Big Boy is new Batmen");

function Countchar(str = null, char = null){
    if((str == null) || (char == null)){
        return console.log("Please give correct inputs");
    }
    else{
        let i = null, len = null,count = 0;
        str = String(str);
        char = String(char);
        len = str.length;
        for(i = 0; i < len; ++i){
            if(str[i] == char){
                ++count;
            }
        }
        return console.log("The number of " + char + " in the string is : " + count);
    }
}
Countchar("Peter Parker","e");