import{_ as n,a as t,b as a,c as r,i as e,s,d as c,S as o,e as i,t as l,f as u,g as f,h as v,l as h,j as p,k as g,m as b,n as d,o as m,L as j,q as E,M as k,p as y,r as P,P as N,B as D,C as S,N as R,D as A,y as x,E as I,F as $,J as L,K as V,z as B,A as C,I as T}from"./client.d16346dd.js";import"./browser.a1da661f.js";function w(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return a(this,e)}}function q(n,t,a){var r=n.slice();return r[13]=t[a],r}function M(n){var t,a,r,e,s,c,o=n[8].length>0&&O(n);return{c:function(){t=i("div"),a=i("p"),r=i("span"),e=l("Border Countries:"),s=u(),c=i("div"),o&&o.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var i=v(t);a=f(i,"P",{class:!0});var l=v(a);r=f(l,"SPAN",{class:!0});var u=v(r);e=h(u,"Border Countries:"),u.forEach(p),l.forEach(p),s=g(i),c=f(i,"DIV",{class:!0});var b=v(c);o&&o.l(b),b.forEach(p),i.forEach(p),this.h()},h:function(){b(r,"class","svelte-17bj0k6"),b(a,"class","svelte-17bj0k6"),b(c,"class","bordering-countries-outter"),b(t,"class","country-info-borders svelte-17bj0k6")},m:function(n,i){d(n,t,i),m(t,a),m(a,r),m(r,e),m(t,s),m(t,c),o&&o.m(c,null)},p:function(n,t){n[8].length>0?o?o.p(n,t):((o=O(n)).c(),o.m(c,null)):o&&(o.d(1),o=null)},d:function(n){n&&p(t),o&&o.d()}}}function O(n){for(var t,a=n[8],r=[],e=0;e<a.length;e+=1)r[e]=U(q(n,a,e));return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=j()},l:function(n){for(var a=0;a<r.length;a+=1)r[a].l(n);t=j()},m:function(n,a){for(var e=0;e<r.length;e+=1)r[e].m(n,a);d(n,t,a)},p:function(n,e){if(256&e){var s;for(a=n[8],s=0;s<a.length;s+=1){var c=q(n,a,s);r[s]?r[s].p(c,e):(r[s]=U(c),r[s].c(),r[s].m(t.parentNode,t))}for(;s<r.length;s+=1)r[s].d(1);r.length=a.length}},d:function(n){k(r,n),n&&p(t)}}}function U(n){var t,a,r,e,s,c,o=n[13]+"";return{c:function(){t=i("div"),a=i("a"),r=i("button"),e=l(o),c=u(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var s=v(t);a=f(s,"A",{href:!0,rel:!0});var i=v(a);r=f(i,"BUTTON",{class:!0});var l=v(r);e=h(l,o),l.forEach(p),i.forEach(p),c=g(s),s.forEach(p),this.h()},h:function(){b(r,"class","svelte-17bj0k6"),b(a,"href",s=n[13]),b(a,"rel","prefetch"),b(t,"class","bordering-countries-inner")},m:function(n,s){d(n,t,s),m(t,a),m(a,r),m(r,e),m(t,c)},p:function(n,t){256&t&&o!==(o=n[13]+"")&&E(e,o),256&t&&s!==(s=n[13])&&b(a,"href",s)},d:function(n){n&&p(t)}}}function z(n){var t,a,r,e,s,c,o,j,k,N,D,S,R,A,x,I,$,L,V,B,C,T,w,q,O,U,z,G,H,J,K,_,Q,W,X,Y,Z,nn,tn,an,rn,en,sn,cn,on,ln,un,fn,vn,hn,pn,gn,bn,dn,mn,jn,En,kn,yn,Pn,Nn,Dn=F(n[3])+"",Sn=n[9].join(", ")+"",Rn=n[10].join(", ")+"",An=n[8].length>0&&M(n);return{c:function(){t=i("div"),a=i("div"),r=i("img"),c=u(),o=i("div"),j=i("div"),k=i("h2"),N=l(n[1]),D=u(),S=i("div"),R=i("p"),A=i("span"),x=l("Native Name:"),I=u(),$=l(n[2]),L=u(),V=i("p"),B=i("span"),C=l("Population:"),T=u(),w=l(Dn),q=u(),O=i("p"),U=i("span"),z=l("Region:"),G=u(),H=l(n[4]),J=u(),K=i("p"),_=i("span"),Q=l("Sub Region:"),W=u(),X=l(n[5]),Y=u(),Z=i("p"),nn=i("span"),tn=l("Capital:"),an=u(),rn=l(n[6]),en=u(),sn=i("div"),cn=i("p"),on=i("span"),ln=l("Top Level Domain:"),un=u(),fn=l(n[7]),vn=u(),hn=i("p"),pn=i("span"),gn=l("Currencies:"),bn=u(),dn=l(Sn),mn=u(),jn=i("p"),En=i("span"),kn=l("Languages:"),yn=u(),Pn=l(Rn),Nn=u(),An&&An.c(),this.h()},l:function(e){t=f(e,"DIV",{class:!0});var s=v(t);a=f(s,"DIV",{class:!0});var i=v(a);r=f(i,"IMG",{src:!0,alt:!0,class:!0}),i.forEach(p),c=g(s),o=f(s,"DIV",{class:!0});var l=v(o);j=f(l,"DIV",{class:!0});var u=v(j);k=f(u,"H2",{class:!0});var b=v(k);N=h(b,n[1]),b.forEach(p),u.forEach(p),D=g(l),S=f(l,"DIV",{class:!0});var d=v(S);R=f(d,"P",{class:!0});var m=v(R);A=f(m,"SPAN",{class:!0});var E=v(A);x=h(E,"Native Name:"),E.forEach(p),I=g(m),$=h(m,n[2]),m.forEach(p),L=g(d),V=f(d,"P",{class:!0});var y=v(V);B=f(y,"SPAN",{class:!0});var P=v(B);C=h(P,"Population:"),P.forEach(p),T=g(y),w=h(y,Dn),y.forEach(p),q=g(d),O=f(d,"P",{class:!0});var M=v(O);U=f(M,"SPAN",{class:!0});var F=v(U);z=h(F,"Region:"),F.forEach(p),G=g(M),H=h(M,n[4]),M.forEach(p),J=g(d),K=f(d,"P",{class:!0});var xn=v(K);_=f(xn,"SPAN",{class:!0});var In=v(_);Q=h(In,"Sub Region:"),In.forEach(p),W=g(xn),X=h(xn,n[5]),xn.forEach(p),Y=g(d),Z=f(d,"P",{class:!0});var $n=v(Z);nn=f($n,"SPAN",{class:!0});var Ln=v(nn);tn=h(Ln,"Capital:"),Ln.forEach(p),an=g($n),rn=h($n,n[6]),$n.forEach(p),d.forEach(p),en=g(l),sn=f(l,"DIV",{class:!0});var Vn=v(sn);cn=f(Vn,"P",{class:!0});var Bn=v(cn);on=f(Bn,"SPAN",{class:!0});var Cn=v(on);ln=h(Cn,"Top Level Domain:"),Cn.forEach(p),un=g(Bn),fn=h(Bn,n[7]),Bn.forEach(p),vn=g(Vn),hn=f(Vn,"P",{class:!0});var Tn=v(hn);pn=f(Tn,"SPAN",{class:!0});var wn=v(pn);gn=h(wn,"Currencies:"),wn.forEach(p),bn=g(Tn),dn=h(Tn,Sn),Tn.forEach(p),mn=g(Vn),jn=f(Vn,"P",{class:!0});var qn=v(jn);En=f(qn,"SPAN",{class:!0});var Mn=v(En);kn=h(Mn,"Languages:"),Mn.forEach(p),yn=g(qn),Pn=h(qn,Rn),qn.forEach(p),Vn.forEach(p),Nn=g(l),An&&An.l(l),l.forEach(p),s.forEach(p),this.h()},h:function(){r.src!==(e=n[0])&&b(r,"src",e),b(r,"alt",s=n[1]+" flag"),b(r,"class","svelte-17bj0k6"),b(a,"class","flag-image svelte-17bj0k6"),b(k,"class","svelte-17bj0k6"),b(j,"class","country-info-name svelte-17bj0k6"),b(A,"class","svelte-17bj0k6"),b(R,"class","svelte-17bj0k6"),b(B,"class","svelte-17bj0k6"),b(V,"class","svelte-17bj0k6"),b(U,"class","svelte-17bj0k6"),b(O,"class","svelte-17bj0k6"),b(_,"class","svelte-17bj0k6"),b(K,"class","svelte-17bj0k6"),b(nn,"class","svelte-17bj0k6"),b(Z,"class","svelte-17bj0k6"),b(S,"class","country-info-inner-left svelte-17bj0k6"),b(on,"class","svelte-17bj0k6"),b(cn,"class","svelte-17bj0k6"),b(pn,"class","svelte-17bj0k6"),b(hn,"class","svelte-17bj0k6"),b(En,"class","svelte-17bj0k6"),b(jn,"class","svelte-17bj0k6"),b(sn,"class","country-info-inner-right svelte-17bj0k6"),b(o,"class","country-info-outter svelte-17bj0k6"),b(t,"class","container svelte-17bj0k6")},m:function(n,e){d(n,t,e),m(t,a),m(a,r),m(t,c),m(t,o),m(o,j),m(j,k),m(k,N),m(o,D),m(o,S),m(S,R),m(R,A),m(A,x),m(R,I),m(R,$),m(S,L),m(S,V),m(V,B),m(B,C),m(V,T),m(V,w),m(S,q),m(S,O),m(O,U),m(U,z),m(O,G),m(O,H),m(S,J),m(S,K),m(K,_),m(_,Q),m(K,W),m(K,X),m(S,Y),m(S,Z),m(Z,nn),m(nn,tn),m(Z,an),m(Z,rn),m(o,en),m(o,sn),m(sn,cn),m(cn,on),m(on,ln),m(cn,un),m(cn,fn),m(sn,vn),m(sn,hn),m(hn,pn),m(pn,gn),m(hn,bn),m(hn,dn),m(sn,mn),m(sn,jn),m(jn,En),m(En,kn),m(jn,yn),m(jn,Pn),m(o,Nn),An&&An.m(o,null)},p:function(n,t){var a=y(t,1)[0];1&a&&r.src!==(e=n[0])&&b(r,"src",e),2&a&&s!==(s=n[1]+" flag")&&b(r,"alt",s),2&a&&E(N,n[1]),4&a&&E($,n[2]),8&a&&Dn!==(Dn=F(n[3])+"")&&E(w,Dn),16&a&&E(H,n[4]),32&a&&E(X,n[5]),64&a&&E(rn,n[6]),128&a&&E(fn,n[7]),512&a&&Sn!==(Sn=n[9].join(", ")+"")&&E(dn,Sn),1024&a&&Rn!==(Rn=n[10].join(", ")+"")&&E(Pn,Rn),n[8].length>0?An?An.p(n,a):((An=M(n)).c(),An.m(o,null)):An&&(An.d(1),An=null)},i:P,o:P,d:function(n){n&&p(t),An&&An.d()}}}function F(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function G(n,t,a){var r=t.flag,e=t.name,s=t.nativeName,c=t.population,o=t.region,i=t.subregion,l=t.capital,u=t.topLevelDomain,f=t.currencies,v=t.languages,h=t.borders,p=[];f.forEach((function(n){a(9,p=[].concat(N(p),[n.name]))}));var g=[];return v.forEach((function(n){a(10,g=[].concat(N(g),[n.name]))})),n.$set=function(n){"flag"in n&&a(0,r=n.flag),"name"in n&&a(1,e=n.name),"nativeName"in n&&a(2,s=n.nativeName),"population"in n&&a(3,c=n.population),"region"in n&&a(4,o=n.region),"subregion"in n&&a(5,i=n.subregion),"capital"in n&&a(6,l=n.capital),"topLevelDomain"in n&&a(7,u=n.topLevelDomain),"currencies"in n&&a(11,f=n.currencies),"languages"in n&&a(12,v=n.languages),"borders"in n&&a(8,h=n.borders)},[r,e,s,c,o,i,l,u,h,p,g,f,v]}var H=function(t){n(i,o);var a=w(i);function i(n){var t;return r(this,i),t=a.call(this),e(c(t),n,G,z,s,{flag:0,name:1,nativeName:2,population:3,region:4,subregion:5,capital:6,topLevelDomain:7,currencies:11,languages:12,borders:8}),t}return i}();function J(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,s=t(n);if(r){var c=t(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return a(this,e)}}function K(n){var t,a,r,e,s,c,o,j;document.title=t=n[0][0].name;for(var E=[n[0][0]],k={},P=0;P<E.length;P+=1)k=R(k,E[P]);return o=new H({props:k}),{c:function(){a=u(),r=i("a"),e=i("button"),s=l("Back"),c=u(),A(o.$$.fragment),this.h()},l:function(n){x('[data-svelte="svelte-9848jk"]',document.head).forEach(p),a=g(n),r=f(n,"A",{href:!0});var t=v(r);e=f(t,"BUTTON",{type:!0,class:!0});var i=v(e);s=h(i,"Back"),i.forEach(p),t.forEach(p),c=g(n),I(o.$$.fragment,n),this.h()},h:function(){b(e,"type","button"),b(e,"class","svelte-cy2qqy"),b(r,"href","/")},m:function(n,t){d(n,a,t),d(n,r,t),m(r,e),m(e,s),d(n,c,t),$(o,n,t),j=!0},p:function(n,a){var r=y(a,1)[0];(!j||1&r)&&t!==(t=n[0][0].name)&&(document.title=t);var e=1&r?L(E,[V(n[0][0])]):{};o.$set(e)},i:function(n){j||(B(o.$$.fragment,n),j=!0)},o:function(n){C(o.$$.fragment,n),j=!1},d:function(n){n&&p(a),n&&p(r),n&&p(c),T(o,n)}}}function _(n){return Q.apply(this,arguments)}function Q(){return(Q=D(S.mark((function n(t){var a,r,e,s,c,o,i,l;return S.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t.params,n.next=3,this.fetch("https://restcountries.eu/rest/v2/name/".concat(a.country));case 3:return r=n.sent,n.next=6,r.json();case 6:if(e=n.sent,!(r.ok&&e[0].borders.length>0)){n.next=24;break}return console.log("entrei"),s=e[0].borders,c="https://restcountries.eu/rest/v2/alpha?codes=",s.forEach((function(n,t){t===s.length-1?c+=n:c+="".concat(n,";")})),n.next=14,this.fetch(c);case 14:return o=n.sent,n.next=17,o.json();case 17:return i=n.sent,l=[],i.forEach((function(n){l=[].concat(N(l),[n.name])})),e[0].borders=l,n.abrupt("return",{country:e});case 24:if(!r.ok){n.next=28;break}return n.abrupt("return",{country:e});case 28:this.error(r.status,err);case 29:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function W(n,t,a){var r=t.country;return n.$set=function(n){"country"in n&&a(0,r=n.country)},[r]}var X=function(t){n(i,o);var a=J(i);function i(n){var t;return r(this,i),t=a.call(this),e(c(t),n,W,K,s,{country:0}),t}return i}();export default X;export{_ as preload};
