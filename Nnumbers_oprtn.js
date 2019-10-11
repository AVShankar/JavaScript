var arr = "+ 1 2 3 4 5 6";
var arr = arr.split(" ");
var len = arr.length;
var list = []
console.log(arr)
for(i=1; i<len; i++)
{
    if(i < len-1)
    {
        list.push(arr[i])
        list.push(arr[0])
    }
    else
    {
        list.push(arr[i])
    }
}
console.log(list)
list = eval(list.join(' '));
console.log(list)
