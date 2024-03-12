function displayHTML(string) {
    const mainImage = document.getElementById('thumbnail');
    mainImage.innerHTML = `<img alt="test" src="${string}" />`;
  }
  fetch('https://dummyjson.com/products/2')
    .then(res => res.json())
    .then(json => displayHTML(json.thumbnail))