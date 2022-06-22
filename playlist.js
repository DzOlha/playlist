
function handleButtonClick() {
    console.log("handleButtonClick!");
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;

    if (songName == "") {
        alert("Please enter a song");
    } 
    else {
        //console.log("Empty song!");
        let li = document.createElement("li");
        li.innerHTML = "<p>" + songName + "</p>" + "<span>Delete</span>";
        let ol = document.getElementById("playlist")
        ol.appendChild(li);
        save(songName);
        textInput.value = "";
    }
}
function deleteSong(){
    let ol = document.getElementById('playlist');
    ol.addEventListener('click', function(e){
        if(e.target.tagName == 'SPAN'){
            //console.log("Delete!");
            deleteItem(e.target.innerText);
            e.target.parentNode.innerHTML = "";
        }
    }, true)
}
function getStoreArray(key) {
    console.log("getStoreArray");
    let playlistArray = localStorage.getItem(key);

    if (playlistArray == null || playlistArray == "") {
        playlistArray = new Array();
    }
    else {
        playlistArray = JSON.parse(playlistArray);
    }
    return playlistArray;
}
function getSavedSongs() {
    console.log("getSavedSongs");
    return getStoreArray("playlist");
}

let init = function() {
    console.log("Init!");
    let button = document.getElementById("addButton");
    button.addEventListener('click', function(){
        handleButtonClick();
    })
    //button.onclick = handleButtonClick;
    loadPlaylist();
}
window.onload = function(){
   init();
   deleteSong();
};
