var Stats=function()
{function e(e)
{return n.appendChild(e.dom),e}
function t(e){for(var t=0;t<n.children.length;t++)n.children[t].style.display=t===e?"block":"none";l=e}
var l=0,n=document.createElement("div");

var a=(performance||Date).now(),i=a,o=0,r=e(new Stats.Panel("FPS","#0ff","#002")),f=e(new Stats.Panel("MS","#0f0","#020"));
if(self.performance&&self.performance.memory)var c=e(new Stats.Panel("MB","#f08","#201"));;
return t(0),{REVISION:16,domElement:n,addPanel:e,showPanel:t,setMode:t,begin:function(){a=(performance||Date).now()},end:function(){o++;if(f.update(e-a,200),e>i+1e3&&(r.update(1e3*o/(e-i),100),i=e,o=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()}}};


Stats.Panel=function(e,t,l){var n=1/0,a=0,i=Math.round,o=i(window.devicePixelRatio||1),r=80*o,f=48*o,c=3*o,d=2*o,s=3*o,p=15*o,u=74*o,m=30*o,h=document.createElement("canvas");

var S=h.getContext("2d");
return {dom:h,update:function(f,v){n=Math.min(n,f),S.fillText(i(f)+" "+e+" ("+i(n)+"-"+i(a)+")",c,d),S.fillRect(s+u-o,p,o,i((1-f/v)*m))}}};
