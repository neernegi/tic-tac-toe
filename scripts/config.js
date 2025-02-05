function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayername = formData.get('playername').trim();

    if(!enteredPlayername){
        e.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    
    // if(editedPlayer ===1){
    //     players[0].name = enteredPlayername;
    // }else{
    //     players[1].name = enteredPlayername;
    // }

    players[editedPlayer - 1].name = enteredPlayername;

    closePlayerConfig();

}
