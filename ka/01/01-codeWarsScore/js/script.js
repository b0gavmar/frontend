let userNameElement = document.getElementById("usernev");
let userName;

userNameElement.addEventListener("change",()=>{
    userName = document.getElementById("usernev").value;
    console.log(userNameElement.value);
});

function FetchScoreSum(){
    fetch("https://www.codewars.com/api/v1/users/"+userName)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let li = '<h3>Keresett felhasználó</h3><br>';
        li+=    '<div>'+json.username+';'+json.name+';'+json.honor+';'
                +';'+json.clan+';'+json.leaderboardPosition+';'+/*skills*/+';'+
                /*ranks*/+';'+/*codeChallanges*/+'</div>';
        document.getElementById("kiiras").innerHTML = li;
    }).catch(error => console.error('Hiba:', error));
}
