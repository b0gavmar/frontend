document.getElementById("usernev").value = "";
let userNameElement = document.getElementById("usernev");
let userName = 'b0gavmar';

userNameElement.addEventListener("change", () => {
    userName = document.getElementById("usernev").value;
    console.log(userNameElement.value);
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

                document.getElementById("kiiras").innerHTML = li3.replaceAll(undefined, "---") + "</div>";
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
                let li = '<div class="container-2"><h3>Keresett felhasználó: ' + json.username + '</h3>';
                const languageRanks = json.ranks.languages;
                for(let language in languageRanks){
                    li += language + ':' + languageRanks[language].rank + '<br>';
                }
                /*json.ranks.languages.forEach(language => {
                    li += language + ':' + language.rank + '<br>';
                });*/
                li += "</div>";

                let li2 = li.replaceAll(null, "---");
                let li3 = li2.replaceAll(NaN, "---");

                //console.log(li.replaceAll(null||NaN, "---"));
                console.log(li3);

                document.getElementById("kiiras").innerHTML = li3.replaceAll(undefined, "---") + "</div>";
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