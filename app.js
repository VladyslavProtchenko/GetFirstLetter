function getFirstLetter(word){
    if(word.trim().length === 0){return console.log('what the fuck man?')} 

    if(!Number(word[0]) && !/^[A-ZА-ЯЁ]+$/i.test(word[0])){

        for(i=0;i<word.length; i++){

            if(/^[A-ZА-ЯЁ]+$/i.test(word[i])) {
                return console.log(word[i])
            }
        
        }

    } else if(Number(word[0])) {
        console.log('0-9');
    } else {
        console.log(word[0]);
    }  
}



getFirstLetter('test') === 't' ;
getFirstLetter('9-test') === '0-9';
getFirstLetter("'/symbol") === 's';