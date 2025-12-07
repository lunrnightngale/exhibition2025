function code() {
    document.getElementById('links').innerHTML = '\[ <a href="index.html">> Home</a> | <a href="about.html">> About</a> | <a href="text.html">> Information Booklet</a> | <a href="game.html">> Game</a> | <a href="ppt.html">> Powerpoint</a> | <a href="poster.html">> Posters</a> \]';
};

{
  let sideBar = document.querySelector('.side-bar');
  let arrowCollapse = document.querySelector('#logo-name__icon');
  sideBar.onclick = () => {
    sideBar.classList.toggle('collapse');
    arrowCollapse.classList.toggle('collapse');
    if (arrowCollapse.classList.contains('collapse')) {
      arrowCollapse.classList =
        'bx bx-arrow-from-left logo-name__icon collapse';
    } else {
      arrowCollapse.classList = 'bx bx-arrow-from-right logo-name__icon';
    }
  };
}
