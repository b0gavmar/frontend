document.getElementById("usernev").value = "";
let userNameElement = document.getElementById("usernev");
let userName = 'myjinxin2015';
let users = false;
let kiUsers = new Array();

userNameElement.addEventListener("change", () => {
    userName = document.getElementById("usernev").value;
    userName = userName.replaceAll(' ', '');
    console.log(userNameElement.value);
});

document.getElementById("button1").addEventListener("click", () => {
    users = false;
});

document.getElementById("button2").addEventListener("click", () => {
    users = false;
});

document.getElementById("button3").addEventListener("click", () => {
    if (users) {

    }
    else {
        users = true;
        document.getElementById("kiiras").innerHTML = "";
    }
});

function FetchScoreSum() {
    if (userName) {
        fetch("https://www.codewars.com/api/v1/users/" + userName)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error 404 - A keresett felhasználó nem található");
                }
                else {
                    return response.json();
                }
            })
            .then(json => {
                console.log(json);
                let li = '<div class="container-2"><h3>Keresett felhasználó: ' + json.username + '</h3>';

                li += 'Név: ' + json.name + '<br> Honor: ' + json.honor + '<br>'
                    + 'Klán: ' + json.clan + '<br> Dobogós helyezés: ' + json.leaderboardPosition
                    + '<br>Rank: ' + json.ranks.overall.name + '(' + json.ranks.overall.rank + ',' + json.ranks.overall.color + ')' + '<br> Pontszám: ' + json.totalPoints + '</div>';
                let li2 = li.replaceAll(null, "---");
                let li3 = li2.replaceAll(NaN, "---");

                //console.log(li.replaceAll(null||NaN, "---"));
                console.log(li3);

                document.getElementById("kiiras").innerHTML = li3.replaceAll(undefined, "---");
            }).catch(error => {
                console.error('Error:', error);
                document.getElementById("kiiras").innerHTML = "<div class='container-2'>" + error.message + "</div>";
            });
    }
    else {
        document.getElementById("kiiras").innerHTML = "<div class='container-2'>Írjon be egy felhasználó nevet!</div>";
    }
}

function FetchScoreByLanguages() {
    if (userName) {
        fetch("https://www.codewars.com/api/v1/users/" + userName)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error 404 - A keresett felhasználó nem található");
                }
                else {
                    return response.json();
                }
            })
            .then(json => {
                console.table(json.ranks.languages);
                let li = '<div class="container-2"><h3>Keresett felhasználó: ' + json.username + '</h3><div class="flex-row2">';
                const languageRanks = json.ranks.languages;
                for (let language in languageRanks) {
                    li += '<div class="flex-element"><h4>' + language + ':</h4>Rank: ' + languageRanks[language].rank + '<br>Név: ' + languageRanks[language].name + '<br>Szín: ' + languageRanks[language].color + '<br>Pontok: ' + languageRanks[language].score + '</div><br>';
                }
                li += "</div></div>";

                let li2 = li.replaceAll(null, "---");
                let li3 = li2.replaceAll(NaN, "---");

                console.log(li3);

                document.getElementById("kiiras").innerHTML = li3.replaceAll(undefined, "---");
            }
            ).catch(error => {
                console.error('Error:', error);
                document.getElementById("kiiras").innerHTML = "<div class='container-2'>" + error.message + "</div>";
            });
    }
    else {
        document.getElementById("kiiras").innerHTML = "<div class='container-2'>Írjon be egy felhasználó nevet!</div>";
    }
}

function AddUser() {
    if (userName) {
        fetch("https://www.codewars.com/api/v1/users/" + userName)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error 404 - A keresett felhasználó nem található");
                }
                else {
                    return response.json();
                }
            })
            .then(json => {
                console.log(json);
                let li = '<div class="container-2"><h3>Felhasználó: ' + json.username + '</h3>';
                li += 'Pontok: ' + json.ranks.overall.score + '</div>';
                if (!kiUsers.some(user => user.username == json.username)) {
                    kiUsers.push(json);
                    console.table(kiUsers);
                    if (users == true) {
                        document.getElementById("kiiras").innerHTML += li;
                    }
                    else {
                        document.getElementById("kiiras").innerHTML = li;
                    }
                } else {

                }
            }).catch(error => {
                console.error('Error:', error);
                document.getElementById("kiiras").innerHTML = "<div class='container-2'>" + error.message + "</div>";
                users = false;
            });
    }
    else {
        users = false;
        document.getElementById("kiiras").innerHTML = "<div class='container-2'>Írjon be egy felhasználó nevet!</div>";
    }
}

function Rangsor(){
    if(kiUsers.length >= 2){
        kiUsers.sort((a, b) => b.ranks.overall.score - a.ranks.overall.score);
        console.table(kiUsers);
        let li = '<div class="container-2"><h3>Rangsorozott felhasználók:</h3>';
        let i = parseInt(1);
        kiUsers.forEach(user => {
            li += '<div class="flex-element"><h4>'+i +'. '+ user.username + '</h4>Pontok: '+ user.ranks.overall.score+'</div>';
            i++;
        });
        li += '</div>';
        document.getElementById("kiiras").innerHTML = li;
    }
}
