
function save(item) {
    let playlistArray = getStoreArray("playlist");
    playlistArray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}
function deleteItem(item){
    let playlistArray = getStoreArray("playlist");
    playlistArray.pop(item);
    localStorage.setItem("playlist", JSON.stringify(playlistArray));
}
function loadPlaylist() {
    console.log("loadPlaylist");
    let playlistArray = getSavedSongs();
    let ol = document.getElementById("playlist");

    if (playlistArray != null) {
        for (let i = 0; i < playlistArray.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = "<p>" + playlistArray[i] + "</p>" + "<span>Delete</span>";
            ol.appendChild(li);
        }
    }
}