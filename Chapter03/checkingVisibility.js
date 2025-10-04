let a = 1;
{
    let b = 2
    console.log(a);
    {
        let c = 3;
        console.log(a , b, c);
    }
    console.log(c);// this will show error because c is declare by let and it will not be visible outside its declared block.
}