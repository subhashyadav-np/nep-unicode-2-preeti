function convert(x) {
    switch (x) {
        // nepali unicode to ASCII
        case "अ": return "c";
        case "आ": return "cf";
        case "ा": return "f";
        case "इ": return "O";
        case "ई": return "O{";
        case "र्": return "{";
        case "उ": return "p";
        case "ए": return "P";
        case "े": return "]";
        case "ै": return "}";
        case "ो": return "f]";
        case "ौ": return "f}";
        case "ओ": return "cf]";
        case "औ": return "cf}";
        case "ं": return "+";
        case "ँ": return "F";
        case "ि": return "l";
        case "ी": return "L";
        case "ु": return "'";
        case "ू": return '"';
        case "क": return "s";
        case "ख": return "v";
        case "ग": return "u";
        case "घ": return "3";
        case "ङ": return "ª";
        case "च": return "r";
        case "छ": return "5";
        case "ज": return "h";
        case "झ": return "´";
        case "ञ": return "`";
        case "ट": return "6";
        case "ठ": return "7";
        case "ड": return "8";
        case "ढ": return "9";
        case "ण": return "0f";
        case "त": return "t";
        case "थ": return "y";
        case "द": return "b";
        case "ध": return "w";
        case "न": return "g";
        case "प": return "k";
        case "फ": return "km";
        case "ब": return "a";
        case "भ": return "e";
        case "म": return "d";
        case "य": return "o";
        case "र": return "/";
        case "रू": return "?";
        case "ृ": return "[";
        case "ल": return "n";
        case "व": return "j";
        case "स": return ";";
        case "श": return "z";
        case "ष": return "if";
        case "ज्ञ": return "1";
        case "ह": return "x";
        case "१": return "!";
        case "२": return "@";
        case "३": return "#";
        case "४": return "$";
        case "५": return "%";
        case "६": return "^";
        case "७": return "&";
        case "८": return "*";
        case "९": return "(";
        case "०": return ")";
        case "।": return ".";
        case "्": return "\\";
        case "ऊ": return "pm";
        case "-": return " ";
        case "(": return "-";
        case ")": return "_";
        case " ": return " ";
        // ASCII to ASCII
        case "a": return "a";
        case "b": return "b";
        case "c": return "c";
        case "d": return "d";
        case "e": return "e";
        case "f": return "f";
        case "g": return "g";
        case "h": return "h";
        case "i": return "i";
        case "j": return "j";
        case "k": return "k";
        case "l": return "l";
        case "m": return "m";
        case "n": return "n";
        case "o": return "o";
        case "p": return "p";
        case 'q': return 'q';
        case "r": return "r";
        case "s": return "s";
        case "t": return "t";
        case "u": return "u";
        case "v": return "v";
        case "w": return "w";
        case "x": return "x";
        case "y": return "y";
        case "z": return "z";
        case ",": return ",";
        case "<": return "<";
        case ".": return ".";
        case ">": return ">";
        case "/": return "/";
        case "?": return "?";
        case ";": return ";";
        case ":": return ":";
        case "'": return "'";
        case '"': return '"';
        case "[": return "[";
        case "{": return "{";
        case "]": return "]";
        case "}": return "}";
        case "`": return "`";
        case "~": return "~";
        case "1": return "1";
        case "!": return "!";
        case "2": return "2";
        case "@": return "@";
        case "3": return "3";
        case "#": return "#";
        case "4": return "4";
        case "$": return "$";
        case "5": return "5";
        case "%": return "%";
        case "6": return "6";
        case "^": return "^";
        case "7": return "7";
        case "&": return "&";
        case "8": return "8";
        case "*": return "*";
        case "9": return "9";
        case "(": return "(";
        case "0": return "0";
        case ")": return ")";
        case "-": return "-";
        case "_": return "_";
        case "=": return "=";
        case "+": return "+";
    }
}

let unicode2preetiConverter = document.getElementById('unicodeToPreetiConverterBtn');
let displayInput = document.getElementById('displayInput');
let displayCopytextBtn = document.getElementById('copyDisplayTextBtn');
let clearDisplayBtn = document.getElementById('clearDisplayBtn');

unicode2preetiConverter.addEventListener('click', function () {
    var nepaliUnicode = document.getElementById('nepaliUnicodeInput').value;
    for (var i = 0; i < nepaliUnicode.length; i++) {
        displayInput.value += convert(nepaliUnicode[i]);
    }
});

displayCopytextBtn.addEventListener('click', function () {
    /* Select the text field */
    displayInput.select();
    displayInput.setSelectionRange(0, 99999); /* for mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(displayInput.value);
})

clearDisplayBtn.addEventListener('click', function () {
    displayInput.value = "";
});