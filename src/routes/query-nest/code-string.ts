export const mediaQueryCSS = `@media (width < 600px) {
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
`;

export const containerQueryHTML = `<div class="card-container">
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
</div>`;

export const containerQueryCSS = `.card-container {
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
`;

export const nestedHTML = `<div class="wrapper">
  <div class="contents">記事1</div>
  <div class="contents">記事2</div>
  <div class="contents">記事3</div>
</div>
`;

export const nestedCSS = `.wrapper {
  display: flex;
  align-items: center;

  .content {
    margin: 10px;
    font-size: 1.2rem;
  }
}
`;


