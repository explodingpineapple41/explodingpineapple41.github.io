function search() {
    var input = document.getElementById("urlinput").value;
    document.getElementById("window").src = input;
}
function home() {
    document.getElementById("window").src = "http://www.bing.com";
}