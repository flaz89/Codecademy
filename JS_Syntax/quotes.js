
//Every time a user runs a program, they should get a new, randomized output
// it gonna output inspirational quotes

function quotes() {
    let randomVariable = Math.floor(Math.random() * 6);

    switch (randomVariable) {
        case 0:
            return "Today gonna be a pain in the a** day";
            break;
        case 1:
            return "Today is your day! Go kick'em a**";
            break;
        case 2:
            return "What's wrong with you?";
            break;
        case 3:
            return "Let's try to survive";
            break;
        case 4:
            return "No one better then you!";
            break;
        case 5:
            return "Enjoy as better as you can.";
    }
}


console.log(quotes());

