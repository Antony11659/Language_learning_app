
var input = document.getElementById('answer');
var card = document.getElementById('character');
var pinyin = document.getElementById('pinyin');
var wordsInLong = document.getElementById('longMemory')
var allWords = document.getElementById('allWords')
var n;
var shortMemory;
var longMemory;
var penaltyList;
var flag;
var countTry = function(){
    if(words.length < 15) {
        flag = 7 
    } else if (words.length > 15 && words.length < 25) {
        flag = 3
    }else {
        flag = 1
    }
}

countTry()

card.addEventListener('click', play)

 
console.log(flag)

input.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        onWrite()
    }
})

document.addEventListener("DOMContentLoaded", onStart)

function toMemorize() {

    function toShortMemory() {
        shortMemory = words.filter(word => word.count <= flag)
    }

    function toLongMemory() {
        longMemory = words.filter(word => word.count > flag - 1)
        wordsInLong.innerHTML = longMemory.length
        allWords.innerHTML = (words.length - longMemory.length)
    }

    toShortMemory()
    toLongMemory()
}

toMemorize()

function showPinyin() {
    pinyin.innerHTML = n.pinyin
}

function showCharacter() {
    character.innerHTML = n.chinese
}

function getAudioEl() {
    document.getElementById('audio').src = "C:/Users/722/OneDrive/Рабочий стол/audio/" + n.chinese + ".mp3"
}

function onStart() {
    if (shortMemory.length > 0) {
        let random = Math.floor(Math.random() * shortMemory.length)
        n = shortMemory[random]
        showCharacter()
        showPinyin()
        changeColorForRight()
        play()
    } else {
        done()
    }
}

function done() {
    document.getElementById('container').id = "done"
    headerForDone()
}

function headerForDone() {
    document.getElementById('forDone').innerHTML = " DONE!"
}

function wrong() {
    if (n.mistakes > 0) {
        character.innerHTML = n.english
    }
    changeColorForWrong()
}

function increaseMistakes() {
    n.mistakes++
    if (n.count >= 0) {
        n.count--
    } else {
        n.count = 0
    }
}

function increaseCount() {
    n.count++
    toMemorize()
}

function onWrite() {

    if (input.value === n.english) {
        onStart()
        increaseCount()
        input.value = ""
    } else {
        increaseMistakes()
        wrong()
        input.value = ""
    }
}

function changeColorForWrong() {
    if (document.getElementById('card')) {
        document.getElementById('card').id = "wrong"
    }
}

function changeColorForRight() {
    if (document.getElementById('wrong')) {
        document.getElementById('wrong').id = "card"
    }
}

function play() {
    getAudioEl()
    audio.play()
}








