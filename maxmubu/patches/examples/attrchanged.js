// listen to change in obj of given list of attrs

function valuechanged (data)
{
    if (data.attrname)
    {
        post(data.attrname, data.value, "\n");
	outlet(0, data.attrname, data.value);
    }
}


function loadbang ()
{
    this.bang();
}

function bang ()
{
    if (jsarguments.length < 2)
	error("first argument must be scripting name of listened to object");

    var ob = this.patcher.getnamed(jsarguments[1]); // get the object in 1st arg
    var obattrs = ob.getattrnames();
    var listento = [];
    var listeners = [];

    if (jsarguments.length == 2)
	listento = obattrs; // no attr arg: listen to all
    else
	listento = jsarguments.slice(2);

    post("objname: ", jsarguments[1], "\n");
    post("object: ", ob.maxclass, "\n");
    post("attributes: ", obattrs, "\n");
    post("listen to: ", listento, "\n");

    for (var i = 0; i < listento.length; i++)
    {
	if (obattrs.indexOf(listento[i]) >= 0)
	    listeners[i] = new MaxobjListener(ob, listento[i], valuechanged);
	else
	    error(ob.maxclass +" object "+ jsarguments[1] +" does not have attribute "+ listento[i]);
    }
    gc();
}

bang();

