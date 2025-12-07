function code() {
    document.getElementById('links').innerHTML = '\[ <a href="index.html">> Home</a> | <a href="about.html">> About</a> | <a href="text.html">> Information Booklet</a> | <a href="game.html">> Game</a> | <a href="ppt.html">> Powerpoint</a> | <a href="poster.html">> Posters</a> \]';
};

window.onload = code;
function openNav() {
  document.getElementById("mySidebar").style.width = "30";
  document.getElementById("main").style.marginLeft = "30";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
