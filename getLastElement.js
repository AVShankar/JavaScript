function getLastElement(array)
{
    len = array.length;
    if(len!=0)
    {
        console.log(array[len - 1]);
    }
    else
    {
        console.log("undefined");
    }
}
var inparr= [1, 2, 3, 4];
getLastElement(inparr);