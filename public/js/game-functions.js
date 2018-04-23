window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var categories; // Array of topics
    var chosenCategory; // Selected catagory
    var getHint; // Word getHint
    var word; // Selected word
    var guess; // Geuss
    var geusses = []; // Stored geusses
    var lives; // Lives
    var counter; // Count correct geusses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");



    // create alphabet ul
    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function() {
        catagoryName.innerHTML = "A menudo las personas dicen que aún no se han encontrado a sí mismas. Pero el sí mismo no es algo que uno encuentra, ...";

    }

    // Create geusses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');


        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space += 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function() {


        showLives.innerHTML = "Tienes " + lives + " vidas";
        if (lives < 1) {
            showLives.innerHTML = "¡Oh! Perdiste, vuelve a intentarlo.";
            document.getElementById("stickman").classList.add("no-display");
            document.getElementById("hint").classList.add("no-display");
            document.getElementById("reset").classList.remove("no-display");
            document.getElementById("buttons").classList.add("no-display");
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "¡Completado!";
                document.getElementById("stickman").classList.add("no-display");
                document.getElementById("hint").classList.add("no-display");
                document.getElementById("buttons").classList.add("no-display");
            }
        }
    }

    // Animate man
    var animate = function() {
        var drawMe = lives;
        drawArray[drawMe]();
    }


    // Hangman
    canvas = function() {

        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#212529";
        context.lineWidth = 2;
    };

    head = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI * 2, true);
        context.stroke();
    }

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    frame1 = function() {
        draw(0, 150, 150, 150);
    };

    frame2 = function() {
        draw(10, 0, 10, 600);
    };

    frame3 = function() {
        draw(0, 5, 70, 5);
    };

    frame4 = function() {
        draw(60, 5, 60, 15);
    };

    torso = function() {
        draw(60, 36, 60, 70);
    };

    rightArm = function() {
        draw(60, 46, 100, 50);
    };

    leftArm = function() {
        draw(60, 46, 20, 50);
    };

    rightLeg = function() {
        draw(60, 70, 100, 100);
    };

    leftLeg = function() {
        draw(60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


    // OnClick Function
    check = function() {
        list.onclick = function() {

            var geuss = (this.innerHTML);
            this.setAttribute("class", "active-game");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function() {
        categories = [
            ["sino algo que uno crea"]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }

    play();

    // Hint

    hint.onclick = function() {

        hints = [
            ["Nosotros vamos creando nuestro camino."]
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Pista: " + hints[0];
    };

    // Reset

    document.getElementById('reset').onclick = function() {
        //correct.parentNode.removeChild(correct);
        //letters.parentNode.removeChild(letters);
        //showClue.innerHTML = "";
        //context.clearRect(0, 0, 400, 400);
        //play();

        document.location.assign("autoconocimiento.html");
    }
}