//Psuedocode:
//top level function to call everything in order and return response
//need somewhere to keep track of results
//need to isolate each word and count the length
//bonus to remove spaces that are identified as 'words'
//compares word length and adds to correct result property
//adds to the result object

//==================================

//top level function to call everything in order and return response
const getWordLengths = (sentance) => {
    let result = createResponse()
    let wordLengths = wordLength(sentance)
    wordLengths.map((eachLength) => {
        incrementResult(eachLength, result)
    })
    console.log(result)
}

//need somewhere to keep track of results
const createResponse = () => {
    return {
        short: 0,
        medium: 0,
        long: 0,
    }
}

//need to isolate each word and count the length
const wordLength = (str) => {
    return str.split(' ')
        .filter(sanitiseSpaces)
        .map(word => word.length)
}

//adds to the result object
const editResult = (key, result) => {
    result[key]++
}

//bonus to remove spaces that are identified as 'words'
const sanitiseSpaces = (word) => {
    return word !== ''
}

//compares word length and adds to correct result property
const incrementResult = (wordLength, result)=>{
    if(wordLength <= 3) { editResult('short' , result) }
    if(wordLength >= 4 && wordLength <= 5) { editResult('medium', result) }
    if(wordLength >= 6) { editResult('long', result) }
}

getWordLengths("hello! this is a new thing")


/////// Version 2

// const result = {}

// creates key only when needed
// const editResult = (key, result) => {
//     key in result ? result[key]++ : result[key] = 1
// }

////// Version 3

//regex to get rid of things we dont like
// const stripUndesirables = (word) => {
//     return word.replace(/[,.!]/g, "");
// }

//add the function to the word length chain
// const wordLength = (str) => {
//     return str.split(' ')
//         .map(stripUndesirables)
//         .filter(sanitiseSpaces)
//         .map(word => word.length)
// }


