let w2v = require( 'word2vec' );
let words;
//let input = document.getElementsByTagName("input")[0]; 

let queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    let queries = queryString.split("=");
console.log(queries[1])
if (queries[1]) {
    getMostSimilarWords(queries[1])
}



function getMostSimilarWords(value) {
    w2v.loadModel( 'word2vec-50size.txt', function( error, model ) {
        console.log("Get most similar words:");
        words = model.mostSimilar(value, 20 );
        console.log(words);
    });
}
