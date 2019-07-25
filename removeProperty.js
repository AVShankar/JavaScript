//removeProperty(obj, “name”);
function removeProperty(obj, name)
{
    if (Object.values(obj).indexOf('name') > -1) 
    {
    delete obj.name;
    }
    else
    {
        console.log("undefined");
    }
}
var myObj = new Object();
removeProperty(myObj, "myKey");