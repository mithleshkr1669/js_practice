function longestPrefix(word) {
    let strng = "";
    let secondStrng = "";
    let prefix = "";
    let secondPrefix=''
    for (let i = 0; i < word.length; i++){
        if (strng === "") {
            strng = word[i]
            continue;
        }
        secondStrng = word[i]
        for (let i = 0; i <strng.length; i++){
            if (strng[i] === secondStrng[i]) {
                    prefix+=strng[i] 
            } else {
                console.log("prefix",prefix)
                secondPrefix = prefix;
                 prefix = ""
                break;
            }
        }
    }
    console.log("secondPrefix",secondPrefix)
}

let word = ["flower", "flow", "flight"]
longestPrefix(word)