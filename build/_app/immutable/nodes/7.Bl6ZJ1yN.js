import{d as Xe}from"../chunks/index.R8ovVqwX.js";import{s as ta,H as ea,p as Ke,e,a as n,l as aa,y as na,c as a,f as v,g as l,b as u,m as s,o as r,O as la,h as t,i as Qe,n as sa}from"../chunks/scheduler.CWg2ZErC.js";import{S as ra,i as ia,b as mt,d as pt,m as Ct,a as xt,t as _t,e as bt}from"../chunks/index.Bi4X4Qff.js";import{H as $t,c as wt,g as oa}from"../chunks/github.DBa-gk30.js";const da=Xe,va=!0,wa=Object.freeze(Object.defineProperty({__proto__:null,csr:da,prerender:va},Symbol.toStringTag,{value:"Module"})),ca=`body {
  width: 100lvw;
  height: 100lvh;
}

.container {
  width: 100svw;
  height: 100svh;
}`,ha=`<div class="card-container">
  <div class="card">
    <div class="image blue"></div>
    <div class="title">タイトル</div>
    <div class="text">記事内容</div>
  </div>
  <div class="card">
    <div class="title">タイトル</div>
    <div class="text">記事内容</div>
  </div>
  <div class="card">
    <div class="image orange"></div>
    <div class="title">タイトル</div>
    <div class="text">記事内容</div>
  </div>
  <div class="card">
    <div class="title">タイトル</div>
    <div class="text">記事内容</div>
  </div>
</div>`,ua=`.card:has(.image) {
  display: grid;
  grid:
    "image title" 1.2em
    "image text" 1fr
    / 1fr 1fr;
  
  .image {
    grid-area: image;
  }
  .title {
    grid-area: title;
  }
  .text {
    grid-area: text;
  }
}
`,ga=`:root {
  --main-bg-color: #ff00ff;
  --main-font-color: #999;
}

// 以下のようにクラス内で変数を定義することもできる
.card-container {
  --card-gap: 4vw;
}

.card {
  background-color: var(--main-color);
  color: var(--main-font-color);
}
`,fa=`<div class="container">
  <div class="item">
    <div class="image"></div>
    <div class="title">
      <p>1行のタイトル</p>
    </div>
    <div class="content">
      <p>1行の内容</p>
    </div>
  </div>
  <div class="item">
    <div class="image"></div>
    <div class="title">
      <p>2行の<br/>タイトル</p>
    </div>
    <div class="content">
      <p>2行の<br/>内容</p>
    </div>
  </div>
</div>
`,ma=`.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  .item {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
    grid-column-gap: 10vw;

    .image {
      width: 100%;
      height: 5em;
    }
    .image.blue {
      background-color: lightblue;
    }
    .image.red {
      background-color: lightcoral;
    }

    .title {
      border: 1px solid black;
    }

    .content {
      border: 1px solid black;
    }
  }
}`,pa=""+new URL("../assets/youtube-var.DkmPrZyA.png",import.meta.url).href;function Ca(We){let M,St,j,Ht,i,R,pe="CSSの単位について",qt,N,Ce="端末の縦横に対応する単位",At,f,Y,xe="svw,svh,lvw,lvh,dvw,dvh",Dt,U,_e=`端末の表示画面エリア(ビューポート)の単位<br/>
      従来のvw,vhでは、アドレスバーが現れたり消えたりするスマートフォンに完全対応することが難しかった<br/>
      ざっくりと、svw,svhはアドレスバーが出ているときの最大、lvw,lvhはアドレスバーが隠れているときの最大となる<br/>
      dvw,dvhはアドレスバーの変化によって自動的に変わってくれる`,zt,Z,be="例",Gt,B,S,F,$e="CSS",Ot,P,jt,_,we="Can I use - Viewport units",Rt,J,Se="変数",Nt,h,K,He="変数",Yt,Q,Ee=`これもPostCSSなどでできていた機能。いろいろな機能が標準となっている<br/>
      よく使うものを変数定義できる。Youtubeなどで開発ツール立ち上げると大量の変数があるのがわかる`,Ut,W,Te,Zt,X,Ie="例",Bt,tt,H,et,Le="CSS",Ft,V,Jt,b,ke="Can I use - CSS Variables",Kt,at,ye="疑似クラス",Qt,c,nt,Me=":has()",Wt,lt,Pe="例えば、子要素に画像がある場合と無い場合でスタイルを変更したりできる",Xt,st,Ve="例",te,rt,qe="image要素があったりなかったりする場合などに使える",ee,q,Ae='<div class="card"><div class="image blue"></div> <div class="title">タイトル1</div> <div class="text">記事内容1</div></div> <div class="card"><div class="title">タイトル2</div> <div class="text">記事内容2</div></div> <div class="card"><div class="image orange"></div> <div class="title">タイトル3</div> <div class="text">記事内容3</div></div> <div class="card"><div class="title">タイトル4</div> <div class="text">記事内容4</div></div>',ae,E,T,it,De="HTML",ne,A,le,I,ot,ze="CSS",se,D,re,$,Ge="Can I use - :has()",ie,dt,Oe="Grid",oe,m,vt,je="Subgrid",de,ct,Re=`Gridの子要素を親のGridのレイアウトに合わせることができる<br/>
      それぞれの行数が違うときなどに従来のGridだと難しかったが、SubGridでそろえられる`,ve,ht,Ne="例",ce,z,Ye='<div class="item"><div class="image red">画像など</div> <div class="title"><p>1行のタイトル</p></div> <div class="content"><p>1行の内容</p></div></div> <div class="item"><div class="image blue">画像など</div> <div class="title"><p>2行の<br/>タイトル</p></div> <div class="content"><p>2行の<br/>内容</p></div></div>',he,L,k,ut,Ue="HTML",ue,G,ge,y,gt,Ze="CSS",fe,O,me,w,Be="Can I use - CSS Subgrid",Et;return P=new $t({props:{language:wt,code:ca}}),V=new $t({props:{language:wt,code:ga}}),A=new $t({props:{language:wt,code:ha}}),D=new $t({props:{language:wt,code:ua}}),G=new $t({props:{language:wt,code:fa}}),O=new $t({props:{language:wt,code:ma}}),{c(){M=new ea(!1),St=Ke(),j=e("meta"),Ht=n(),i=e("div"),R=e("h1"),R.textContent=pe,qt=n(),N=e("h2"),N.textContent=Ce,At=n(),f=e("section"),Y=e("h3"),Y.textContent=xe,Dt=n(),U=e("p"),U.innerHTML=_e,zt=n(),Z=e("h4"),Z.textContent=be,Gt=n(),B=e("article"),S=e("div"),F=e("p"),F.textContent=$e,Ot=n(),mt(P.$$.fragment),jt=n(),_=e("a"),_.textContent=we,Rt=n(),J=e("h2"),J.textContent=Se,Nt=n(),h=e("section"),K=e("h3"),K.textContent=He,Yt=n(),Q=e("p"),Q.innerHTML=Ee,Ut=n(),W=e("img"),Zt=n(),X=e("h4"),X.textContent=Ie,Bt=n(),tt=e("article"),H=e("div"),et=e("p"),et.textContent=Le,Ft=n(),mt(V.$$.fragment),Jt=n(),b=e("a"),b.textContent=ke,Kt=n(),at=e("h2"),at.textContent=ye,Qt=n(),c=e("section"),nt=e("h3"),nt.textContent=Me,Wt=n(),lt=e("p"),lt.textContent=Pe,Xt=n(),st=e("h4"),st.textContent=Ve,te=n(),rt=e("p"),rt.textContent=qe,ee=n(),q=e("div"),q.innerHTML=Ae,ae=n(),E=e("article"),T=e("div"),it=e("p"),it.textContent=De,ne=n(),mt(A.$$.fragment),le=n(),I=e("div"),ot=e("p"),ot.textContent=ze,se=n(),mt(D.$$.fragment),re=n(),$=e("a"),$.textContent=Ge,ie=n(),dt=e("h2"),dt.textContent=Oe,oe=n(),m=e("section"),vt=e("h3"),vt.textContent=je,de=n(),ct=e("p"),ct.innerHTML=Re,ve=n(),ht=e("h4"),ht.textContent=Ne,ce=n(),z=e("div"),z.innerHTML=Ye,he=n(),L=e("article"),k=e("div"),ut=e("p"),ut.textContent=Ue,ue=n(),mt(G.$$.fragment),ge=n(),y=e("div"),gt=e("p"),gt.textContent=Ze,fe=n(),mt(O.$$.fragment),me=n(),w=e("a"),w.textContent=Be,this.h()},l(o){const ft=aa("svelte-1tjl5zk",document.head);M=na(ft,!1),St=Ke(),j=a(ft,"META",{name:!0,content:!0}),ft.forEach(v),Ht=l(o),i=a(o,"DIV",{class:!0});var d=u(i);R=a(d,"H1",{"data-svelte-h":!0}),s(R)!=="svelte-176l6g9"&&(R.textContent=pe),qt=l(d),N=a(d,"H2",{"data-svelte-h":!0}),s(N)!=="svelte-1cpqpzi"&&(N.textContent=Ce),At=l(d),f=a(d,"SECTION",{});var C=u(f);Y=a(C,"H3",{"data-svelte-h":!0}),s(Y)!=="svelte-al97vh"&&(Y.textContent=xe),Dt=l(C),U=a(C,"P",{"data-svelte-h":!0}),s(U)!=="svelte-18oe0dj"&&(U.innerHTML=_e),zt=l(C),Z=a(C,"H4",{"data-svelte-h":!0}),s(Z)!=="svelte-1rqnd"&&(Z.textContent=be),Gt=l(C),B=a(C,"ARTICLE",{class:!0});var Fe=u(B);S=a(Fe,"DIV",{class:!0});var Tt=u(S);F=a(Tt,"P",{"data-svelte-h":!0}),s(F)!=="svelte-1kct5vr"&&(F.textContent=$e),Ot=l(Tt),pt(P.$$.fragment,Tt),Tt.forEach(v),Fe.forEach(v),jt=l(C),_=a(C,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(_)!=="svelte-1nkg748"&&(_.textContent=we),C.forEach(v),Rt=l(d),J=a(d,"H2",{"data-svelte-h":!0}),s(J)!=="svelte-1xw7obz"&&(J.textContent=Se),Nt=l(d),h=a(d,"SECTION",{});var p=u(h);K=a(p,"H3",{"data-svelte-h":!0}),s(K)!=="svelte-w2v449"&&(K.textContent=He),Yt=l(p),Q=a(p,"P",{"data-svelte-h":!0}),s(Q)!=="svelte-1c4z4oz"&&(Q.innerHTML=Ee),Ut=l(p),W=a(p,"IMG",{src:!0,alt:!0}),Zt=l(p),X=a(p,"H4",{"data-svelte-h":!0}),s(X)!=="svelte-1rqnd"&&(X.textContent=Ie),Bt=l(p),tt=a(p,"ARTICLE",{class:!0});var Je=u(tt);H=a(Je,"DIV",{class:!0});var It=u(H);et=a(It,"P",{"data-svelte-h":!0}),s(et)!=="svelte-1kct5vr"&&(et.textContent=Le),Ft=l(It),pt(V.$$.fragment,It),It.forEach(v),Je.forEach(v),Jt=l(p),b=a(p,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(b)!=="svelte-ss1xw6"&&(b.textContent=ke),p.forEach(v),Kt=l(d),at=a(d,"H2",{"data-svelte-h":!0}),s(at)!=="svelte-1hfamze"&&(at.textContent=ye),Qt=l(d),c=a(d,"SECTION",{});var g=u(c);nt=a(g,"H3",{"data-svelte-h":!0}),s(nt)!=="svelte-1n4za01"&&(nt.textContent=Me),Wt=l(g),lt=a(g,"P",{"data-svelte-h":!0}),s(lt)!=="svelte-2nq42a"&&(lt.textContent=Pe),Xt=l(g),st=a(g,"H4",{"data-svelte-h":!0}),s(st)!=="svelte-1rqnd"&&(st.textContent=Ve),te=l(g),rt=a(g,"P",{"data-svelte-h":!0}),s(rt)!=="svelte-hn427t"&&(rt.textContent=qe),ee=l(g),q=a(g,"DIV",{class:!0,"data-svelte-h":!0}),s(q)!=="svelte-1643nlv"&&(q.innerHTML=Ae),ae=l(g),E=a(g,"ARTICLE",{class:!0});var Lt=u(E);T=a(Lt,"DIV",{class:!0});var kt=u(T);it=a(kt,"P",{"data-svelte-h":!0}),s(it)!=="svelte-h9veq3"&&(it.textContent=De),ne=l(kt),pt(A.$$.fragment,kt),kt.forEach(v),le=l(Lt),I=a(Lt,"DIV",{class:!0});var yt=u(I);ot=a(yt,"P",{"data-svelte-h":!0}),s(ot)!=="svelte-1kct5vr"&&(ot.textContent=ze),se=l(yt),pt(D.$$.fragment,yt),yt.forEach(v),Lt.forEach(v),re=l(g),$=a(g,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s($)!=="svelte-1iy5kaa"&&($.textContent=Ge),g.forEach(v),ie=l(d),dt=a(d,"H2",{"data-svelte-h":!0}),s(dt)!=="svelte-10efjai"&&(dt.textContent=Oe),oe=l(d),m=a(d,"SECTION",{});var x=u(m);vt=a(x,"H3",{"data-svelte-h":!0}),s(vt)!=="svelte-jwytqw"&&(vt.textContent=je),de=l(x),ct=a(x,"P",{"data-svelte-h":!0}),s(ct)!=="svelte-1u4lvr6"&&(ct.innerHTML=Re),ve=l(x),ht=a(x,"H4",{"data-svelte-h":!0}),s(ht)!=="svelte-1rqnd"&&(ht.textContent=Ne),ce=l(x),z=a(x,"DIV",{class:!0,"data-svelte-h":!0}),s(z)!=="svelte-l7al6e"&&(z.innerHTML=Ye),he=l(x),L=a(x,"ARTICLE",{class:!0});var Mt=u(L);k=a(Mt,"DIV",{class:!0});var Pt=u(k);ut=a(Pt,"P",{"data-svelte-h":!0}),s(ut)!=="svelte-h9veq3"&&(ut.textContent=Ue),ue=l(Pt),pt(G.$$.fragment,Pt),Pt.forEach(v),ge=l(Mt),y=a(Mt,"DIV",{class:!0});var Vt=u(y);gt=a(Vt,"P",{"data-svelte-h":!0}),s(gt)!=="svelte-1kct5vr"&&(gt.textContent=Ze),fe=l(Vt),pt(O.$$.fragment,Vt),Vt.forEach(v),Mt.forEach(v),x.forEach(v),me=l(d),w=a(d,"A",{href:!0,target:!0,rel:!0,"data-svelte-h":!0}),s(w)!=="svelte-1kczcv4"&&(w.textContent=Be),d.forEach(v),this.h()},h(){M.a=St,document.title="CSS",r(j,"name","description"),r(j,"content","About this app"),r(S,"class","code-preview"),r(B,"class","code-section"),r(_,"href","https://caniuse.com/viewport-units"),r(_,"target","_blank"),r(_,"rel","noopener noreferrer"),la(W.src,Te=pa)||r(W,"src",Te),r(W,"alt","Youtubeの変数"),r(H,"class","code-preview"),r(tt,"class","code-section"),r(b,"href","https://caniuse.com/css-variables"),r(b,"target","_blank"),r(b,"rel","noopener noreferrer"),r(q,"class","card-container"),r(T,"class","code-preview"),r(I,"class","code-preview"),r(E,"class","code-section"),r($,"href","https://caniuse.com/css-has"),r($,"target","_blank"),r($,"rel","noopener noreferrer"),r(z,"class","grid-container"),r(k,"class","code-preview"),r(y,"class","code-preview"),r(L,"class","code-section"),r(w,"href","https://caniuse.com/css-subgrid"),r(w,"target","_blank"),r(w,"rel","noopener noreferrer"),r(i,"class","text-column")},m(o,ft){M.m(oa,document.head),t(document.head,St),t(document.head,j),Qe(o,Ht,ft),Qe(o,i,ft),t(i,R),t(i,qt),t(i,N),t(i,At),t(i,f),t(f,Y),t(f,Dt),t(f,U),t(f,zt),t(f,Z),t(f,Gt),t(f,B),t(B,S),t(S,F),t(S,Ot),Ct(P,S,null),t(f,jt),t(f,_),t(i,Rt),t(i,J),t(i,Nt),t(i,h),t(h,K),t(h,Yt),t(h,Q),t(h,Ut),t(h,W),t(h,Zt),t(h,X),t(h,Bt),t(h,tt),t(tt,H),t(H,et),t(H,Ft),Ct(V,H,null),t(h,Jt),t(h,b),t(i,Kt),t(i,at),t(i,Qt),t(i,c),t(c,nt),t(c,Wt),t(c,lt),t(c,Xt),t(c,st),t(c,te),t(c,rt),t(c,ee),t(c,q),t(c,ae),t(c,E),t(E,T),t(T,it),t(T,ne),Ct(A,T,null),t(E,le),t(E,I),t(I,ot),t(I,se),Ct(D,I,null),t(c,re),t(c,$),t(i,ie),t(i,dt),t(i,oe),t(i,m),t(m,vt),t(m,de),t(m,ct),t(m,ve),t(m,ht),t(m,ce),t(m,z),t(m,he),t(m,L),t(L,k),t(k,ut),t(k,ue),Ct(G,k,null),t(L,ge),t(L,y),t(y,gt),t(y,fe),Ct(O,y,null),t(i,me),t(i,w),Et=!0},p:sa,i(o){Et||(xt(P.$$.fragment,o),xt(V.$$.fragment,o),xt(A.$$.fragment,o),xt(D.$$.fragment,o),xt(G.$$.fragment,o),xt(O.$$.fragment,o),Et=!0)},o(o){_t(P.$$.fragment,o),_t(V.$$.fragment,o),_t(A.$$.fragment,o),_t(D.$$.fragment,o),_t(G.$$.fragment,o),_t(O.$$.fragment,o),Et=!1},d(o){o&&(M.d(),v(Ht),v(i)),v(St),v(j),bt(P),bt(V),bt(A),bt(D),bt(G),bt(O)}}}class Sa extends ra{constructor(M){super(),ia(this,M,null,Ca,ta,{})}}export{Sa as component,wa as universal};
