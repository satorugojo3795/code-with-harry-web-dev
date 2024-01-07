console.log("Lets write some javascript")

let currentSong = new Audio()

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/5.%20Project%20-%20Spotify%20clone/songs/")
    let response = await a.text();
    // console.log(response)
    let div = document.createElement("div");
    div.innerHTML = response;
    div.getElementsByTagName("td");
    let as = div.getElementsByTagName("a");
    let songs = []
    for(let index=0; index<as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    // console.log(songs)
    return songs;
}

const playMusic = (track,pause=false) => {
    // let audio = new Audio("songs/" + track);
    currentSong.src = "songs/" + track
    if(!pause){
        currentSong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main(){

    //get the list of all the songs
    let songs = await getSongs();
    // console.log(songs)

    playMusic(songs[0],true)

    //show all songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li>
                                            <img class="invert" src="music.svg" alt=""/>
                                            <div class="info">
                                                <div>${song.replaceAll("%20"," ")}</div>
                                                <div>Saksham</div>
                                            </div>
                                            <div class="playnow">
                                                <span>Play Now</span>
                                                <img class="invert" src="play.svg" alt=" "/>
                                            </div>
                                            </li>`
    }

    // attach an event listener to each song in the playlist
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        // console.log(e.querySelector(".info").firstElementChild.innerHTML)
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playMusic(e.querySelector(".info").firstElementChild.innerHTML)
        })    
    })

    //attach an event listener to next, play and previous elements
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        }  
        else{
            currentSong.pause()
            play.src = "play.svg";
        }
    })

    function secondsToTimeFormat(seconds) {
        if (isNaN(seconds) || seconds < 0) {
            return "Invalid input";
        }
    
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
    
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedMinutes}:${formattedSeconds}`;
    }
    
    currentSong.addEventListener("timeupdate",()=>{
        console.log(currentSong.currentTime,currentSong.duration)
        document.querySelector(".songtime").innerHTML = `${secondsToTimeFormat(currentSong.currentTime)}/${secondsToTimeFormat(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100+"%";
    })

    //add an event listener to move seekbar
    document.querySelector(".seekbar").addEventListener("click",(e)=>{
        // console.log(e);
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration)*percent)/100;
    })
}
main()
