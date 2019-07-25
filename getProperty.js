function accessObj(obj1, key)
{
    console.log(obj1);
}
var obj = new Object();
obj.key = "value";
accessObj(obj, obj.key);