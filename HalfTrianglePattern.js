//Loop that makes Sevven calls to Console.log
let i = 0,j = 0,pattern = '';
for(i = 0 ; i < 7 ; ++i)
{
    pattern = '';
    for(j = 0 ; j <= i ; ++j)
    {
        pattern += '#';
    }
    console.log(pattern);
}