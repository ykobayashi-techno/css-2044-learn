import{d as pe}from"../chunks/index.R8ovVqwX.js";import{s as Ce,H as ge,p as fe,e,a,l as _e,y as $e,c as n,f as c,g as r,b as f,m as s,o as l,h as t,i as xe,n as Se}from"../chunks/scheduler.CWg2ZErC.js";import{S as be,i as He,b as at,d as rt,m as st,a as lt,t as ot,e as it}from"../chunks/index.Bi4X4Qff.js";import{H as ct,c as dt,g as ye}from"../chunks/github.DBa-gk30.js";const Ee=pe,we=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,csr:Ee,prerender:we},Symbol.toStringTag,{value:"Module"})),Te=`@media (width < 600px) {
  .query-box {
    background-color: lightgreen;
  }
}

@media (600px <= width < 1000px) {
  .query-box {
    background-color: lightcoral;
  }
}
  
@media (1000px <= width) {
  .query-box {
    background-color: lightblue;
  }
}
`,Ie=`<div class="card-container">
  <div class="card blue">
    <div class="image"></div>
    <div class="text">記事内容</div>
  </div>
  <div class="card orange">
    <div class="image"></div>
    <div class="text">記事内容</div>
  </div>
  <div class="card green">
    <div class="image"></div>
    <div class="text">記事内容</div>
  </div>
  <div class="card purple">
    <div class="image"></div>
    <div class="text">記事内容</div>
  </div>
</div>`,ke=`.card-container {
  container-type: inline-size;
  container-name: cards;
  
  .card {
    display: flex;
    align-items: center;
    direction: row;
  }

  @container cards (width < 300px) {
    .card {
      direction: column;
    }
  }
}
`,qe=`<div class="wrapper">
  <div class="contents">記事1</div>
  <div class="contents">記事2</div>
  <div class="contents">記事3</div>
</div>
`,Le=`.wrapper {
  display: flex;
  align-items: center;

  .content {
    margin: 10px;
    font-size: 1.2rem;
  }
}
`;function Me(me){let T,et,P,vt,o,j,Bt="クエリとネスト",_t,A,Gt="メディアクエリ",$t,d,D,Jt="> < = 記号の対応",St,V,Kt=`端末ごとのレイアウトを変更したいときに書く<br/>
      min-width: 600pxなどと書いていて、書き方が面倒だったり、以上以下ができなかった<br/>
      これを使うと簡単に書けて見た目もわかりやすい`,bt,O,Wt="例",Ht,nt,yt,Q,$,z,Xt="CSS",Et,I,wt,C,Yt="Can I Use - Media Queries: Range Syntax",Tt,N,Zt="コンテナクエリ",It,h,R,te="コンテナごとのレイアウト調整",kt,U,ee=`メディアクエリは全体的に反映する<br/>
      より細かい制御をするために、要素ごとにコンテアンクエリを書けるようになった<br/>
      カード型のレイアウトなどを端末幅によって変える場合など書きやすくなりそう`,qt,F,ne="例",Lt,S,b,B,ae="CSS",Mt,k,Pt,H,G,re="CSS",jt,q,At,g,se="Can I Use - CSS Container Queries",Dt,J,le="CSSのネスト",Vt,u,K,oe="ネステッドCSS",Ot,W,ie=`CSSを入れ子構造で書ける。<br/>
      従来PostCSSなどを使って書いていたが、標準でサポート<br/>
      入れ子構造でCSSをかけるのでFlexboxなどのレイアウトなどの時の見やすい`,Qt,X,ce="例",zt,y,E,Y,de="HTML",Nt,L,Rt,w,Z,ve="CSS",Ut,M,Ft,_,he="Can I use - CSS Nesting",ht;return I=new ct({props:{language:dt,code:Te}}),k=new ct({props:{language:dt,code:Ie}}),q=new ct({props:{language:dt,code:ke}}),L=new ct({props:{language:dt,code:qe}}),M=new ct({props:{language:dt,code:Le}}),{c(){T=new ge(!1),et=fe(),P=e("meta"),vt=a(),o=e("div"),j=e("h1"),j.textContent=Bt,_t=a(),A=e("h2"),A.textContent=Gt,$t=a(),d=e("section"),D=e("h3"),D.textContent=Jt,St=a(),V=e("p"),V.innerHTML=Kt,bt=a(),O=e("h4"),O.textContent=Wt,Ht=a(),nt=e("div"),yt=a(),Q=e("article"),$=e("div"),z=e("p"),z.textContent=Xt,Et=a(),at(I.$$.fragment),wt=a(),C=e("a"),C.textContent=Yt,Tt=a(),N=e("h2"),N.textContent=Zt,It=a(),h=e("section"),R=e("h3"),R.textContent=te,kt=a(),U=e("p"),U.innerHTML=ee,qt=a(),F=e("h4"),F.textContent=ne,Lt=a(),S=e("article"),b=e("div"),B=e("p"),B.textContent=ae,Mt=a(),at(k.$$.fragment),Pt=a(),H=e("div"),G=e("p"),G.textContent=re,jt=a(),at(q.$$.fragment),At=a(),g=e("a"),g.textContent=se,Dt=a(),J=e("h2"),J.textContent=le,Vt=a(),u=e("section"),K=e("h3"),K.textContent=oe,Ot=a(),W=e("p"),W.innerHTML=ie,Qt=a(),X=e("h4"),X.textContent=ce,zt=a(),y=e("article"),E=e("div"),Y=e("p"),Y.textContent=de,Nt=a(),at(L.$$.fragment),Rt=a(),w=e("div"),Z=e("p"),Z.textContent=ve,Ut=a(),at(M.$$.fragment),Ft=a(),_=e("a"),_.textContent=he,this.h()},l(i){const tt=_e("svelte-1tjl5zk",document.head);T=$e(tt,!1),et=fe(),P=n(tt,"META",{name:!0,content:!0}),tt.forEach(c),vt=r(i),o=n(i,"DIV",{class:!0});var v=f(o);j=n(v,"H1",{"data-svelte-h":!0}),s(j)!=="svelte-wjjfnh"&&(j.textContent=Bt),_t=r(v),A=n(v,"H2",{"data-svelte-h":!0}),s(A)!=="svelte-tlmh32"&&(A.textContent=Gt),$t=r(v),d=n(v,"SECTION",{});var x=f(d);D=n(x,"H3",{"data-svelte-h":!0}),s(D)!=="svelte-1pa4ip9"&&(D.textContent=Jt),St=r(x),V=n(x,"P",{"data-svelte-h":!0}),s(V)!=="svelte-qonmio"&&(V.innerHTML=Kt),bt=r(x),O=n(x,"H4",{"data-svelte-h":!0}),s(O)!=="svelte-1rqnd"&&(O.textContent=Wt),Ht=r(x),nt=n(x,"DIV",{class:!0}),f(nt).forEach(c),yt=r(x),Q=n(x,"ARTICLE",{class:!0});var ue=f(Q);$=n(ue,"DIV",{class:!0});var ut=f($);z=n(ut,"P",{"data-svelte-h":!0}),s(z)!=="svelte-1kct5vr"&&(z.textContent=Xt),Et=r(ut),rt(I.$$.fragment,ut),ut.forEach(c),ue.forEach(c),wt=r(x),C=n(x,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(C)!=="svelte-7ne1jl"&&(C.textContent=Yt),x.forEach(c),Tt=r(v),N=n(v,"H2",{"data-svelte-h":!0}),s(N)!=="svelte-1jr8teh"&&(N.textContent=Zt),It=r(v),h=n(v,"SECTION",{});var m=f(h);R=n(m,"H3",{"data-svelte-h":!0}),s(R)!=="svelte-12fyjx3"&&(R.textContent=te),kt=r(m),U=n(m,"P",{"data-svelte-h":!0}),s(U)!=="svelte-hejco1"&&(U.innerHTML=ee),qt=r(m),F=n(m,"H4",{"data-svelte-h":!0}),s(F)!=="svelte-1rqnd"&&(F.textContent=ne),Lt=r(m),S=n(m,"ARTICLE",{class:!0});var ft=f(S);b=n(ft,"DIV",{class:!0});var xt=f(b);B=n(xt,"P",{"data-svelte-h":!0}),s(B)!=="svelte-1kct5vr"&&(B.textContent=ae),Mt=r(xt),rt(k.$$.fragment,xt),xt.forEach(c),Pt=r(ft),H=n(ft,"DIV",{class:!0});var mt=f(H);G=n(mt,"P",{"data-svelte-h":!0}),s(G)!=="svelte-1kct5vr"&&(G.textContent=re),jt=r(mt),rt(q.$$.fragment,mt),mt.forEach(c),ft.forEach(c),At=r(m),g=n(m,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(g)!=="svelte-kr1agv"&&(g.textContent=se),m.forEach(c),Dt=r(v),J=n(v,"H2",{"data-svelte-h":!0}),s(J)!=="svelte-1320tv7"&&(J.textContent=le),Vt=r(v),u=n(v,"SECTION",{});var p=f(u);K=n(p,"H3",{"data-svelte-h":!0}),s(K)!=="svelte-ak29vn"&&(K.textContent=oe),Ot=r(p),W=n(p,"P",{"data-svelte-h":!0}),s(W)!=="svelte-fp3x3q"&&(W.innerHTML=ie),Qt=r(p),X=n(p,"H4",{"data-svelte-h":!0}),s(X)!=="svelte-1rqnd"&&(X.textContent=ce),zt=r(p),y=n(p,"ARTICLE",{class:!0});var pt=f(y);E=n(pt,"DIV",{class:!0});var Ct=f(E);Y=n(Ct,"P",{"data-svelte-h":!0}),s(Y)!=="svelte-h9veq3"&&(Y.textContent=de),Nt=r(Ct),rt(L.$$.fragment,Ct),Ct.forEach(c),Rt=r(pt),w=n(pt,"DIV",{class:!0});var gt=f(w);Z=n(gt,"P",{"data-svelte-h":!0}),s(Z)!=="svelte-1kct5vr"&&(Z.textContent=ve),Ut=r(gt),rt(M.$$.fragment,gt),gt.forEach(c),pt.forEach(c),Ft=r(p),_=n(p,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(_)!=="svelte-1hmex20"&&(_.textContent=he),p.forEach(c),v.forEach(c),this.h()},h(){T.a=et,document.title="CSS",l(P,"name","description"),l(P,"content","About this app"),l(nt,"class","query-box"),l($,"class","code-preview"),l(Q,"class","code-section"),l(C,"href","https://caniuse.com/css-media-range-syntax"),l(C,"target","_blank"),l(C,"rel","noopener noreferrer"),l(b,"class","code-preview"),l(H,"class","code-preview"),l(S,"class","code-section"),l(g,"href","https://caniuse.com/css-container-queries"),l(g,"target","_blank"),l(g,"rel","noopener noreferrer"),l(E,"class","code-preview"),l(w,"class","code-preview"),l(y,"class","code-section"),l(_,"href","https://caniuse.com/css-nesting"),l(_,"target","_blank"),l(_,"rel","noopener noreferrer"),l(o,"class","text-column")},m(i,tt){T.m(ye,document.head),t(document.head,et),t(document.head,P),xe(i,vt,tt),xe(i,o,tt),t(o,j),t(o,_t),t(o,A),t(o,$t),t(o,d),t(d,D),t(d,St),t(d,V),t(d,bt),t(d,O),t(d,Ht),t(d,nt),t(d,yt),t(d,Q),t(Q,$),t($,z),t($,Et),st(I,$,null),t(d,wt),t(d,C),t(o,Tt),t(o,N),t(o,It),t(o,h),t(h,R),t(h,kt),t(h,U),t(h,qt),t(h,F),t(h,Lt),t(h,S),t(S,b),t(b,B),t(b,Mt),st(k,b,null),t(S,Pt),t(S,H),t(H,G),t(H,jt),st(q,H,null),t(h,At),t(h,g),t(o,Dt),t(o,J),t(o,Vt),t(o,u),t(u,K),t(u,Ot),t(u,W),t(u,Qt),t(u,X),t(u,zt),t(u,y),t(y,E),t(E,Y),t(E,Nt),st(L,E,null),t(y,Rt),t(y,w),t(w,Z),t(w,Ut),st(M,w,null),t(u,Ft),t(u,_),ht=!0},p:Se,i(i){ht||(lt(I.$$.fragment,i),lt(k.$$.fragment,i),lt(q.$$.fragment,i),lt(L.$$.fragment,i),lt(M.$$.fragment,i),ht=!0)},o(i){ot(I.$$.fragment,i),ot(k.$$.fragment,i),ot(q.$$.fragment,i),ot(L.$$.fragment,i),ot(M.$$.fragment,i),ht=!1},d(i){i&&(T.d(),c(vt),c(o)),c(et),c(P),it(I),it(k),it(q),it(L),it(M)}}}class Oe extends be{constructor(T){super(),He(this,T,null,Me,Ce,{})}}export{Oe as component,Ve as universal};
