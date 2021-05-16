(function(){

    // let bouton = document.getElementById('bouton_nouvelles');
    let nouvelles = document.querySelector('.nouvelles section');

    let annonce = document.getElementById('annonce');

    // bouton.addEventListener('mousedown', monAjax);
    window.addEventListener('load', function(){
        monAjax(monObjJS.URLDomaine + '/wp-json/wp/v2/posts?categories=33&order=desc', nouvelles);
        monAjax(monObjJS.URLDomaine + '/wp-json/wp/v2/posts?categories=34', annonce);
    });

    function monAjax(requete, elmDom)
    {
       let maRequete = new XMLHttpRequest();

       maRequete.open('GET', requete);

       maRequete.onload = function () {

           if (maRequete.status >= 200 && maRequete.status < 400) {
               let data = JSON.parse(maRequete.responseText);
               let chaine = '';

               for (const elm of data)
               {
                    chaine += '<h2>' + elm.title.rendered + '</h2>';
                    chaine += elm.content.rendered;
               }
               elmDom.innerHTML = chaine;
            }
       }

       maRequete.onerror = function () {
           console.log("erreur de connexion");
       }
       maRequete.send()
    }

    /***
     * Traitement de l'ajout d'un article de catégorie 'Nouvelles'
     ***/

    bouton_ajout = document.getElementById('bout-rapide');
    bouton_ajout.addEventListener('mousedown', function(){

        let monArticle = {
            "title": document.querySelector('.admin-rapide [name="title"]').value,
            "content": document.querySelector('.admin-rapide [name="content"]').value,
            "status": "publish",
            "categories": [33] // Rechangé à 33, sinon mon nouveau article Nouvelle apparaît dans la barre d'annonce
        }

        let creerArticle = new XMLHttpRequest();
        creerArticle.open("POST", monObjJS.URLDomaine + '/wp-json/wp/v2/posts');
        creerArticle.setRequestHeader("X-WP-Nonce", monObjJS.nonce);
        creerArticle.setRequestHeader("Content-Type", "application/json;charset=UTF8-8");
        creerArticle.send(JSON.stringify(monArticle)); // Transmet la requete au serveur
        creerArticle.onreadystatechange = function(){
            if (creerArticle.readyState == 4)
            {
                if (creerArticle.status == 201)
                {
                    document.querySelector('.admin-rapide [name="title"]').value = '';
                    document.querySelector('.admin-rapide [name="content"]').value = '';
                }

                else
                {
                    alert('Erreur! S.V.P Réessayer');
                }
            }

        }
    })

}())