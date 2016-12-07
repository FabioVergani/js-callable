//Function.prototype.bind.bind(Function.prototype.call);
e=Function.prototype;
BindCall=e.bind.bind(e.call);
console.dir(BindCall);
