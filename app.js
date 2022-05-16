function myFunction() {
    // question 1
    var x1 = document.getElementById("myText1").value;
    var background1 = document.getElementById('bg1');
    points = 0;
    

    if(x1 == 50){
        background1.classList.toggle('bg-success');
        background1.classList.remove('bg-danger');
        points++;

    }
    else{
        background1.classList.toggle('bg-danger');
    }

    //question2

    var x2 = document.getElementById("myText2").value;
    var background2 = document.getElementById('bg2');

    if(x2.toLowerCase() == 'octagon'){
        background2.classList.toggle('bg-success');
        background2.classList.remove('bg-danger');
        points++;

    }
    else{
        background2.classList.toggle('bg-danger');
    }

    // question 3

    var x3 = document.getElementById("myText3").value;
    var background3 = document.getElementById('bg3');

    if(x3.toLowerCase() == 'dogs'){
        background3.classList.toggle('bg-success');
        background3.classList.remove('bg-danger');
        points++;

    }
    else{
        background3.classList.toggle('bg-danger');
    }

    // question 4
    var x4 = document.getElementById("myText4").value;
    var background4 = document.getElementById('bg4');

    if(x4.toLowerCase() == 'horse'){
        background4.classList.toggle('bg-success');
        background4.classList.remove('bg-danger');
        points++;

    }
    else{
        background4.classList.toggle('bg-danger');
    }

    //question 5 

    var x5 = document.getElementById("myText5").value;
    var background5 = document.getElementById('bg5');

    if(x5.toLowerCase() == 'pacific'){
        background5.classList.toggle('bg-success');
        background5.classList.remove('bg-danger');
        points++;

    }
    else{
        background5.classList.toggle('bg-danger');
    }

    //question 6 

    var x6 = document.getElementById("myText6").value;
    var background6 = document.getElementById('bg6');

    if(x6.toLowerCase() == 'brown'){
        background6.classList.toggle('bg-success');
        background6.classList.remove('bg-danger');
        points++;

    }
    else{
        background6.classList.toggle('bg-danger');
    }

    //question 7

    var x7 = document.getElementById("myText7").value;
    var background7 = document.getElementById('bg7');

    if(x7.toLowerCase() == 'honey'){
        background7.classList.toggle('bg-success');
        background7.classList.remove('bg-danger');
        points++;

    }
    else{
        background7.classList.toggle('bg-danger');
    }

    //question 8 

    var x8 = document.getElementById("myText8").value;
    var background8 = document.getElementById('bg8');

    if(x8.toLowerCase() == 'tea'){
        background8.classList.toggle('bg-success');
        background8.classList.remove('bg-danger');
        points++;

    }
    else{
        background8.classList.toggle('bg-danger');
    }

    //question 9

    var x9 = document.getElementById("myText9").value;
    var background9 = document.getElementById('bg9');

    if(x9.toLowerCase() == 'kid'){
        background9.classList.toggle('bg-success');
        background9.classList.remove('bg-danger');
        points++;

    }
    else{
        background9.classList.toggle('bg-danger');
    }

    //question 10 

    var x10 = document.getElementById("myText10").value;
    var background10 = document.getElementById('bg10');

    if(x10.toLowerCase() == '7'){
        background10.classList.toggle('bg-success');
        background10.classList.remove('bg-danger');
        points++;

    }
    else{
        background10.classList.toggle('bg-danger');
    }

    document.getElementById("points").innerHTML = points;
   
}

