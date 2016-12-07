javascript:void(function(){'use strict';
 var w=window, d=w.document, m=d.querySelectorAll('.modal-image');
 if(m.length){ 
  let n=d.createDocumentFragment(), g=/_m(\.[^.]*$)/, e=w.Function.prototype, f=e.bind.bind(e.call);
  f=f(d.createElement,d);
  m=w.Array.from(m);
  while(e=m.pop()){
   let s=e.currentSrc;
   if(s.length){
    n.appendChild(f('img')).src=s.replace(g,'$1');
   }; 
  };
  f=e=m=g=null;

  w=w.open();
  d=w.document;
  d.title='Images:\u0020'+n.children.length;
  e=d.body;
  e.appendChild(n);

  n=null;


 };
}());
