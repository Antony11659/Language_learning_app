var words = [
    {
        english: "do",
        chinese: "干",
        pinyin: "Gàn",
        count: 0,
        mistakes: 0
    },
    {
        english: "enter",
        chinese: "入",
        pinyin: "Rù",
        count: 0,
        mistakes: 0
    }, {
        english: "open",
        chinese: "开",
        pinyin: "Kāi",
        count: 0,
        mistakes: 0
    },
    {
        english: "well",
        chinese: "井",
        pinyin: "Jǐng",
        count: 0,
        mistakes: 0
    },
    {
        english: "become",
        chinese: "成",
        pinyin: "Chéng",
        count: 0,
        mistakes: 0
    },
    {
        english: "or",
        chinese: "或",
        pinyin: "Huò",
        count: 0,
        mistakes: 0
    },
    {
        english: "self" || "already",
        chinese: "己",
        pinyin: "Jǐ",
        count: 0,
        mistakes: 0
    },
    {
        english: "direction",
        chinese: "方",
        pinyin: "Fāng",
        count: 0,
        mistakes: 0
    },
    {
        english: "must",
        chinese: "必",
        pinyin: "Bì",
        count: 0,
        mistakes: 0
    },
    {
        english: "old",
        chinese: "旧",
        pinyin: "Jiù",
        count: 0,
        mistakes: 0
    },
    {
        english: "just",
        chinese: "正",
        pinyin: "Zhèng",
        count: 0,
        mistakes: 0
    },
    {
        english: "stop",
        chinese: "止",
        pinyin: "Zhǐ",
        count: 0,
        mistakes: 0
    },
    {
        english: "to sell",
        chinese: "卖",
        pinyin: "Mài",
        count: 0,
        mistakes: 0
    },
    {
        english: "river",
        chinese: "川",
        pinyin: "Chuān",
        count: 0,
        mistakes: 0
    },

    {
        english: "state",
        chinese: "州",
        pinyin: "Zhōu",
        count: 0,
        mistakes: 0
    },
    {
        english: "use",
        chinese: "用",
        pinyin: "Yòng",
        count: 0,
        mistakes: 0
    },
    {
        english: "angle",
        chinese: "角",
        pinyin: "Jiǎo",
        count: 0,
        mistakes: 0
    },
    {
        english: "for",
        chinese: "为",
        pinyin: "Wèi",
        count: 0,
        mistakes: 0
    },
    {
        english: "manage",
        chinese: "办",
        pinyin: "Bàn",
        count: 0,
        mistakes: 0
    },
    {
        english: "farming",
        chinese: "农",
        pinyin: "Nóng",
        count: 0,
        mistakes: 0
    },
    {
        english: "middle",
        chinese: "中",
        pinyin: "Zhōng",
        count: 0,
        mistakes: 0
    },
    {
        english: "notebook",
        chinese: "本子",
        pinyin: "Běnzi",
        count: 0,
        mistakes: 0
    },
    {
        english: "end",
        chinese: "末",
        pinyin: "Mò",
        count: 0,
        mistakes: 0
    },
    {
        english: "picture",
        chinese: "图片",
        pinyin: "Túpiàn",
        count: 0,
        mistakes: 0
    },
    {
        english: "too",
        chinese: "太",
        pinyin: "Tài",
        count: 0,
        mistakes: 0
    },
    {
        english: "blood",
        chinese: "血",
        pinyin: "Xuè",
        count: 0,
        mistakes: 0
    },
]


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

function toMemorise() {

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

toMemorise()

function showPinyin() {
    pinyin.innerHTML = n.pinyin
}

function showCharanter() {
    character.innerHTML = n.chinese
}

function getAudioEl() {
    document.getElementById('audio').src = "C:/Users/722/OneDrive/Рабочий стол/audio/" + n.chinese + ".mp3"
}

function onStart() {
    if (shortMemory.length > 0) {
        let random = Math.floor(Math.random() * shortMemory.length)
        n = shortMemory[random]
        showCharanter()
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
    toMemorise()
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








