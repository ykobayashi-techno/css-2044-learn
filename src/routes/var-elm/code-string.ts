export const viewportCSS = `body {
  width: 100lvw;
  height: 100lvh;
}

.container {
  width: 100svw;
  height: 100svh;
}`;

export const hasHTML = `<div class="card-container">
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
</div>`;

export const hasCSS = `.card:has(.image) {
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
`;

export const varCSS = `:root {
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
`;

export const subGridHTML = `<div class="container">
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
`;

export const subGridCSS = `.container {
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
}`;