//Function.prototype.bind.bind(Function.prototype.call);
e=Function.prototype;
BindCall=e.bind.bind(e.call);
console.dir(BindCall);

es.:


var e=Function.prototype;
BindCall=e.bind.bind(e.call);
//console.dir(BindCall);
var f=BindCall(document.createElement,document,'img')
console.dir(f());
