function identificerInsekt(){
    var antalBen = parseInt(document.getElementById("ben").value);
    var vinger = document.getElementById("vinger").value;
    var vingetypefelt = document.getElementById("vingetypefelt").value;
    var insekt = "";
    
    if (antalBen === 6){
        if (vinger === "ja"){
            if (vingetypefelt === "glasklare"){
                insekt = "Honningbi";//Hvis antal ben = 6 & vinger & glasklare vinger
            }else{
                insekt = "Sommerfugl";//Hvis antal ben = 6 & vinger og uklare vinger
            }else{
                insekt = "Rød skovmyre";//Hvis vinger = Nej
            }//Slut på ben = 6;
        }else{
            insekt = "Det er ikke et insekt";//Hvis antal ben forskellig fra 6
        }
        
        document.getElementById("resultat").value = insekt;
    }
    
    
    function skiftVingefelt(){
        var vinger = document.getElementById("vinger").value;
        
        if(vinger === "ja"){
            document.getElementById("vingetype").style.display = "block";
    }else{
        document.getElementById("vingetype").style.display = "none";
    }
}


//Hovedprogramdel

document.getElementById("vinger").addEventListener("change", skiftVingefelt);
document.getElementById("identificer").addEventListener("click", identificerInsekt);
