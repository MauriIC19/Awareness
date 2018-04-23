console.clear();

//Event listeners
window.addEventListener('load', declare, false);

function declare() {
    // Cache HTML elements
    aud = document.getElementById('src-audio');
    vizArea = document.getElementById('viz');
    inputAudio = document.getElementById('input-src');
    inputList = document.getElementById('input-list');
    createdSource = false;
    source = null;

    loadSongs(inputList);

    aud.addEventListener('loadeddata', init, false);
    inputAudio.addEventListener('change', loadSong.bind(inputAudio), false);
    inputList.addEventListener('change', loadSong.bind(inputList), false);

    // Create audio context
    AUDIO = new(window.AudioContext || window.webkitAudioContext)();
    if (!AUDIO) console.error('Web Audio API not supported :c');

    // Create and configure analyzer node and storage buffer
    analyzer = AUDIO.createAnalyser();
    analyzer.fftSize = 128;
    bufferLength = analyzer.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
}

function loadSongs(songlist) {
    for (var i = 0; i < 4; i++) {
        songlist.innerHTML += (
            "<option value='./public/audio/" + i + ".mp3'>Song " + i + "</option>"
        );
    }
}

// Creates a set of divs with graded BG colors.
// Returns it as an array of jQuery-wrapped elements for
// later manipulation.
function createSegments(numSegments) {



    console.log('numSegments', numSegments);
    var segCollection = [],
        colorSlice = Math.floor(255 / numSegments);

    for (var i = 0; i < numSegments; i++) {
        var s = document.createElement('div');
        s.classList.add('viz-seg');
        var g = colorSlice * i,
            r = 127 - (colorSlice * i);

        s.style.backgroundColor = 'rgba(' + r + ',' + g + ',255,0.1)';
        vizArea.appendChild(s);
        segCollection.push($(s));
    }
    return segCollection;
}

var $segs, rot = 0;

// Main update/render method.
// Gets the current frequency data and transforms the div set based on it.
// Used jQuery because I'm too lazy to look up my transform-prefix shiv.
function update() {
    analyzer.getByteFrequencyData(dataArray);
    for (var i = 0; i < bufferLength; i++) {
        // Scaled based on frequency, staggered rotation
        var segScale = dataArray[i] / 255,
            segRotate = rot + (i * 3);
        $segs[i].css('transform', 'scale(' + (segScale) + ') rotate(' + segRotate + 'deg)');
    }
    if (++rot > 360) rot = 0;
}

function init() {
    // Connect video to analyzer and analyzer to audio-out
    vizArea.innerHTML = "";
    if (!createdSource) {
        source = AUDIO.createMediaElementSource(aud);
        createdSource = true;
    }
    source.connect(analyzer);
    analyzer.connect(AUDIO.destination);

    $segs = createSegments(bufferLength)
    loop();
}

// Main loop
function loop() {
    requestAnimationFrame(loop);
    promise = aud.play();
    if (promise !== undefined) {
        promise.catch(function(error) {
            playSafariButton = document.getElementById('play-safari');
            playSafariButton.addEventListener('click', function() {
                aud.play();
            }, false);
        }).then(function() {
            console.log('playing');
            update();
        });
    }
}

function loadSong() {


    var url = "";
    if (this.nodeName === "INPUT") {
        var fileReader = new FileReader;
        fileReader.onload = function() {
            var arrayBuffer = this.result;
        }
        fileReader.readAsArrayBuffer(this.files[0]);
        url = URL.createObjectURL(this.files[0]);
    } else {
        url = this.value;
    }
    aud.src = url;
    promise = aud.play();

    if (promise !== undefined) {
        promise.catch(function(error) {
            playSafariButton = document.getElementById('play-safari');
            playSafariButton.addEventListener('click', function() {
                aud.play();
            }, false);
        }).then(function() {
            console.log('playing');
        });
    }
}