<script lang="ts">
  import Highlight from "svelte-highlight";
  import { css } from "svelte-highlight/languages";
  import github from "svelte-highlight/styles/github";

  import "./styles.css";
  import {
    containerQueryCSS,
    containerQueryHTML,
    mediaQueryCSS,
    nestedCSS,
    nestedHTML,
  } from "./code-string";
</script>

<svelte:head>
  {@html github}
  <title>CSS</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
  <h1>クエリとネスト</h1>

  <h2>メディアクエリ</h2>
  <section>
    <h3>&gt; &lt; = 記号の対応</h3>
    <p>
      端末ごとのレイアウトを変更したいときに書く<br />
      min-width: 600pxなどと書いていて、書き方が面倒だったり、以上以下ができなかった<br
      />
      これを使うと簡単に書けて見た目もわかりやすい
    </p>
    <h4>例</h4>
    <div class="query-box" />
    <article class="code-section">
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={mediaQueryCSS} />
      </div>
    </article>

    <a
      href="https://caniuse.com/css-media-range-syntax"
      target="_blank"
      rel="noopener noreferrer">Can I Use - Media Queries: Range Syntax</a
    >
  </section>

  <h2>コンテナクエリ</h2>
  <section>
    <h3>コンテナごとのレイアウト調整</h3>
    <p>
      メディアクエリは全体的に反映する<br />
      より細かい制御をするために、要素ごとにコンテアンクエリを書けるようになった<br
      />
      カード型のレイアウトなどを端末幅によって変える場合など書きやすくなりそう
    </p>
    <h4>例</h4>
    <article class="code-section">
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={containerQueryHTML} />
      </div>
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={containerQueryCSS} />
      </div>
    </article>

    <a
      href="https://caniuse.com/css-container-queries"
      target="_blank"
      rel="noopener noreferrer">Can I Use - CSS Container Queries</a
    >
  </section>

  <h2>CSSのネスト</h2>
  <section>
    <h3>ネステッドCSS</h3>
    <p>
      CSSを入れ子構造で書ける。<br />
      従来PostCSSなどを使って書いていたが、標準でサポート<br />
      入れ子構造でCSSをかけるのでFlexboxなどのレイアウトなどの時の見やすい
    </p>
    <h4>例</h4>
    <article class="code-section">
      <div class="code-preview">
        <p>HTML</p>
        <Highlight language={css} code={nestedHTML} />
      </div>
      <div class="code-preview">
        <p>CSS</p>
        <Highlight language={css} code={nestedCSS} />
      </div>
    </article>

    <a
      href="https://caniuse.com/css-nesting"
      target="_blank"
      rel="noopener noreferrer">Can I use - CSS Nesting</a
    >
  </section>
</div>
