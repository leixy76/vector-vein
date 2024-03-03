import{w as ln,c as z}from"./path-CbwjOpE9.js";import{a8 as an,a9 as G,aa as j,ab as rn,ac as g,N as on,ad as K,ae as _,af as un,ag as t,ah as sn,ai as tn,aj as fn}from"./WorkflowSpaceUse-CMSGWMrU.js";function cn(l){return l.innerRadius}function gn(l){return l.outerRadius}function yn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,E,q,v,A,B,a){var I=E-l,i=q-h,n=B-v,m=a-A,r=m*I-n*i;if(!(r*r<g))return r=(n*(h-A)-m*(l-v))/r,[l+r*I,h+r*i]}function W(l,h,E,q,v,A,B){var a=l-E,I=h-q,i=(B?A:-A)/K(a*a+I*I),n=i*I,m=-i*a,r=l+n,s=h+m,f=E+n,c=q+m,C=(r+f)/2,o=(s+c)/2,p=f-r,y=c-s,R=p*p+y*y,T=v-A,P=r*c-f*s,N=(y<0?-1:1)*K(fn(0,T*T*R-P*P)),O=(P*y-p*N)/R,S=(-P*p-y*N)/R,w=(P*y+p*N)/R,d=(-P*p+y*N)/R,x=O-C,e=S-o,u=w-C,F=d-o;return x*x+e*e>u*u+F*F&&(O=w,S=d),{cx:O,cy:S,x01:-n,y01:-m,x11:O*(v/T-1),y11:S*(v/T-1)}}function vn(){var l=cn,h=gn,E=z(0),q=null,v=yn,A=mn,B=pn,a=null,I=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=A.apply(this,arguments)-rn,C=un(c-f),o=c>f;if(a||(a=n=I()),s<r&&(m=s,s=r,r=m),!(s>g))a.moveTo(0,0);else if(C>on-g)a.moveTo(s*G(f),s*j(f)),a.arc(0,0,s,f,c,!o),r>g&&(a.moveTo(r*G(c),r*j(c)),a.arc(0,0,r,c,f,o));else{var p=f,y=c,R=f,T=c,P=C,N=C,O=B.apply(this,arguments)/2,S=O>g&&(q?+q.apply(this,arguments):K(r*r+s*s)),w=_(un(s-r)/2,+E.apply(this,arguments)),d=w,x=w,e,u;if(S>g){var F=sn(S/r*j(O)),L=sn(S/s*j(O));(P-=F*2)>g?(F*=o?1:-1,R+=F,T-=F):(P=0,R=T=(f+c)/2),(N-=L*2)>g?(L*=o?1:-1,p+=L,y-=L):(N=0,p=y=(f+c)/2)}var H=s*G(p),J=s*j(p),M=r*G(T),Q=r*j(T);if(w>g){var U=s*G(y),V=s*j(y),X=r*G(R),Y=r*j(R),D;if(C<an)if(D=dn(H,J,X,Y,U,V,M,Q)){var Z=H-D[0],$=J-D[1],b=U-D[0],k=V-D[1],nn=1/j(tn((Z*b+$*k)/(K(Z*Z+$*$)*K(b*b+k*k)))/2),en=K(D[0]*D[0]+D[1]*D[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}N>g?x>g?(e=W(X,Y,H,J,s,x,o),u=W(U,V,M,Q,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(H,J),a.arc(0,0,s,p,y,!o)):a.moveTo(H,J),!(r>g)||!(P>g)?a.lineTo(M,Q):d>g?(e=W(M,Q,U,V,r,-d,o),u=W(H,J,X,Y,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,R,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-an/2;return[G(m)*n,j(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:z(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:z(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as a};
