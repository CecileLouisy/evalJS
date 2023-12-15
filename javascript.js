$(document).ready(function(){//Permet d'executer mes fonctions uniquement lorsque le dom est chargé, je vais placer tout mon code dedans
    $("#genererPassword").on("click",function(){//Je selectionne le bouton par son id et j'ajoute l'evnmnt au clic
        let mot="JeSuisLeMotDePasse123!";//On défini le mdp
        $("#password, #password2").val(mot);//On ajoute le mdp aux 2champs
    });
    $('button[name="voirPassword"]').on("click",function(){//Selection du bouton voir
       $("input type='password'").replaceWith("input type='text");//L'idée est de changer en type text pour afficher le mdp
    });
    //Lorsque l’utilisateur sélectionne une couleur via le champ dédié afficher cette couleur dans la div et fixer la dimension a
    //100px par 100px
    let color = $("#couleur").val();//On récupère la valeur du champ couleur via son id dans une variable color
    $("#apercu_couleur").css("heigh:100px,width:100px,background-color:"+color);//On applique les propriétés css demandées

    function verifFormulaire(){//Création de la fonction pour verif les champs du formulaire
        let boolean=false;//On crée un booléen pour le statut
        if ("#email" !=""//On liste tous les champs via leur id et on vérif qu'ils ne sont pas vide
        &&"#password"!=""//On mets bien && pour le ET car tous les champs doivent être vérifiés
        &&"#password2"!=""
        &&"#couleur"!=""){
            boolean=true;
            $('button[name="voirPassword"]').remove("disabled='disabled'")//On enlève disabled pour libérer le bouton
        }else{
            boolean=false;
        }
        return boolean; //On retourne notre booléen
    }
    verifFormulaire(); //On appelle la fonction

    /*Pour le captcha ci dessous : code pris sur la demo droppable de la doc jquery ui*/
    $( function() { 
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      } );

    //Création d'une fonction qui active le bouton connexion
    if (){
        $('.connection, button[name="submit"]').removeAttr("disabled='disabled'")//On selectionne le bon bouton submit et on enlève disabled pour libérer le bouton
    }

    function utilisateur(email_login,password_login){ //On crée une fonction constructeur pour la connexion
        this.email_login=email_login,
        this.password_login=password_login
    }
    //On va appeler cette fonction au clic sur le bouton connexion
    $('.connection, button[name="submit"]').on("click", function(){
        utilisateur();
    });

    $.ajax()
    POST
    ajax.php
        $('name["login"]').submit(function(e){}); //Pour l'évènement
        $(".message").css("display","content") //On enlève le display:none de la div message pour la montrer
    if($("#email_login"!=""&&"#password_login"!="")){
        $(".message").css("border","1px solid green").html("<p>Inscription OK</p>");//bordure verte+message ok ds la div message
    }else if (){
        $(".message").css("border","1px solid red").html("<p>Erreur mot de passe</p>");//bordure rouge+message erreur mdp ds la div message
    }else{
        $(".message").css("border","1px solid red").html("<p>Error</p>");//bordure rouge+message erreur ds la div message
    }
});
