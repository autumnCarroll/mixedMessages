const getRandomInt = () =>{
    var y = Math.floor(Math.random()*5)
    return y;
};
var randomInt = [];

    for (var i = 0; i < 3; i++){
        var x = getRandomInt();
        x += (i);
        randomInt.push(x);
    }

const eightBall = () =>{

    switch (randomInt[0]) {
        case 0:
            console.log('Yes.')
            break;
        case 1:
            console.log('No.')
            break;
        case 2:
            console.log('Maybe')
            break;
        case 3:
            console.log('Certainly not.')
            break;
        case 4:
            console.log('Definitely.')
            break;
        case 5:
            console.log('Outlook promising.')
            break;
        case 6:
             console.log('Outlook not so good.')
             break;
        default:
            console.log('*Error*')
    }
};

const eightBallComment = () =>{
    switch (randomInt[1]) {
        case 0:
            console.log('Now, please go away.')
            break;
        case 1:
            console.log('Sheesh you\'re pushy.')
            break;
        case 2:
            console.log('I hope you get what you\'re looking for.')
            break;
        case 3:
            console.log('That was your last one.')
            break;
        case 4:
            console.log('Now, why not try going outside for a change.')
            break;
        case 5:
            console.log('Are we done yet?')
            break;
        case 6:
            console.log('Satisfied?')
            break;
        default:
            console.log('*Error*')
    }
};

const eightballTip = () =>{
    console.log('Here\'s a helpful tip to get you to leave me alone!~')
    switch(randomInt[2]){
        case 0:
            console.log('Don\'t be so self-centered all the time.')
            break;
        case 1:
            console.log('Get some more sleep, you look like death.')
            break;
        case 2:
            console.log('Drink like double the amount of coffee you already drink.')
            break;
        case 3:
            console.log('Stop worrying so much about what other people think of you, because they don\'t.')
            break;
        case 4:
            console.log('Feeling sorry for yourself won\'t make your life any better.')
            break;
        case 5:
            console.log('Don\'t sweat the small stuff. We\'re all gonna die anyway.')
            break;
        case 6:
            console.log('One day you\'ll wake up and realize it was all a dream.')
            break;
        default:
            console.log('*Error*')
    }
}

eightBall()
eightBallComment()
eightballTip()
console.log('I hope you\'ve enjoyed the magic hateball.')
console.log(randomInt[0], randomInt[1], randomInt[2])
