function frequencyOfLetter(word) {
    let characters = '';
    let frequencyOfLetter=''
    for (let i = 0; i < word.length; i++){
        if (word[i] !== word[i + 1]) {
          characters+=word[i]
            let letterFrequency = characters.length;
            frequencyOfLetter+=letterFrequency+word[i]
            characters=''
            continue;
        }
        characters+=word[i]
    }
    console.log(frequencyOfLetter)
}

frequencyOfLetter("abbcccddddeea")