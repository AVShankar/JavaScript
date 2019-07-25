function addProperty(obj1, key)
{
    obj1[key] = "true";
    console.log(obj1);
}
var myObj = new Object();
addProperty(myObj, "myProperty");