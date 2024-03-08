<script lang="ts">
  import Highlight from "svelte-highlight";
  import { css } from "svelte-highlight/languages";
  import github from "svelte-highlight/styles/github";

  import "./styles.css";
  import {
    hasCSS,
    hasHTML,
    varCSS,
    viewportCSS,
    subGridHTML,
    subGridCSS,
  } from "./code-string";
  import youtubeVarImage from "$lib/images/var-elm/youtube-var.png";
</script>

<svelte:head>
  {@html github}
  <title>CSS</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1>CSSの単位について</h1>

  <h2>端末の縦横に対応する単位</h2>
  <section>
    <h3>svw,svh,lvw,lvh,dvw,dvh</h3>
    <p>
      端末の表示画面エリア(ビューポート)の単位<br />
      従来のvw,vhでは、アドレスバーが現れたり消えたりするスマートフォンに完全対応することが難しかった<br
      />
      ざっくりと、svw,svhはアドレスバーが出ているときの最大、lvw,lvhはアドレスバーが隠れているときの最大となる<br
      />
      dvw,dvhはアドレスバーの変化によって自動的に変わってくれる
    </p>
    <h4>例</h4>
    <article class="code-section">
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={viewportCSS} />
      </div>
    </article>
    <a
      href="https://caniuse.com/viewport-units"
      target="_blank"
      rel="noopener noreferrer">Can I use - Viewport units</a
    >
  </section>

  <h2>変数</h2>
  <section>
    <h3>変数</h3>
    <p>
      これもPostCSSなどでできていた機能。いろいろな機能が標準となっている<br />
      よく使うものを変数定義できる。Youtubeなどで開発ツール立ち上げると大量の変数があるのがわかる
    </p>
    <img src={youtubeVarImage} alt="Youtubeの変数" />
    <h4>例</h4>
    <article class="code-section">
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={varCSS} />
      </div>
    </article>

    <a
      href="https://caniuse.com/css-variables"
      target="_blank"
      rel="noopener noreferrer">Can I use - CSS Variables</a
    >
  </section>

  <h2>疑似クラス</h2>
  <section>
    <h3>:has()</h3>
    <p>例えば、子要素に画像がある場合と無い場合でスタイルを変更したりできる</p>
    <h4>例</h4>
    <p>image要素があったりなかったりする場合などに使える</p>
    <div class="card-container">
      <div class="card">
        <div class="image blue"></div>
        <div class="title">タイトル1</div>
        <div class="text">記事内容1</div>
      </div>
      <div class="card">
        <div class="title">タイトル2</div>
        <div class="text">記事内容2</div>
      </div>
      <div class="card">
        <div class="image orange"></div>
        <div class="title">タイトル3</div>
        <div class="text">記事内容3</div>
      </div>
      <div class="card">
        <div class="title">タイトル4</div>
        <div class="text">記事内容4</div>
      </div>
    </div>
    <article class="code-section">
      <div class="code-preview">
        <p>HTML</p>
        <Highlight language={css} code={hasHTML} />
      </div>
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={hasCSS} />
      </div>
    </article>

    <a
      href="https://caniuse.com/css-has"
      target="_blank"
      rel="noopener noreferrer">Can I use - :has()</a
    >
  </section>

  <h2>Grid</h2>
  <section>
    <h3>Subgrid</h3>
    <p>
      Gridの子要素を親のGridのレイアウトに合わせることができる<br />
      それぞれの行数が違うときなどに従来のGridだと難しかったが、SubGridでそろえられる
    </p>

    <h4>例</h4>

    <div class="grid-container">
      <div class="item">
        <div class="image red">画像など</div>
        <div class="title">
          <p>1行のタイトル</p>
        </div>
        <div class="content">
          <p>1行の内容</p>
        </div>
      </div>
      <div class="item">
        <div class="image blue">画像など</div>
        <div class="title">
          <p>2行の<br />タイトル</p>
        </div>
        <div class="content">
          <p>2行の<br />内容</p>
        </div>
      </div>
    </div>

    <article class="code-section">
      <div class="code-preview">
        <p>HTML</p>
        <Highlight language={css} code={subGridHTML} />
      </div>
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={subGridCSS} />
      </div>
    </article>
  </section>

  <a
    href="https://caniuse.com/css-subgrid"
    target="_blank"
    rel="noopener noreferrer">Can I use - CSS Subgrid</a
  >
</div>
