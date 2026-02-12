function performSearch() {
    var inputText = document.getElementById("inputText").value;
    var searchText = document.getElementById("searchText").value;
    var resultText = document.getElementById("outputText");

    try {
        var matches = inputText.match(new RegExp(searchText, "g"));
        resultText.value = matches ? matches.join("\n") : "No matches found";
    } catch (error) {
        resultText.value = "Invalid regular expression";
    }
}

function performReplace() {
    var inputText = document.getElementById("inputText").value;
    var searchText = document.getElementById("searchText").value;
    var replaceText = document.getElementById("replaceText").value;
    var resultText = document.getElementById("outputText");

    try {
        resultText.value = inputText.replace(
            new RegExp(searchText, "g"),
            replaceText
        );
    } catch (error) {
        resultText.value = "Invalid regular expression";
    }
}

function performFormat() {
    var inputText = document.getElementById("inputText").value;
    var resultText = document.getElementById("outputText");

    resultText.value = inputText.replace(
        /\b\w/g,
        char => char.toUpperCase()
    );
}
