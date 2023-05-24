const dailyMotivation = () => {
    
    let quote = ["Focus on you, until the focus is you", "You can start over, each morning", "Believe in your current self, to create your future self", "If you want better, go get better", "Better is coming", "excuses make today easy, but harder tomorrow", "Take the risk, or lose the chance", ];

    let toDo = ["Clean your room", "Clean your house", "Drink more water", "Eat more fruit & vegetables", "Read for 30 minutes", "Walk for 30 minutes", "Check your mail", "Rest for 45 minutes", "Don't make excuses", "Treat yourself"];

    const reward = ["Watch your favorite movie", "Watch your favorite Serie", "Drink a glass of whine", "Buy yourself something nice", "Get a message", "Go home early", "Have a cheatday", "Get to bed early"];

    // make the messages random
    let randomQuote = Math.floor(Math.random() * quote.length);
    let randomtoDO = Math.floor(Math.random() * toDo.length);
    let randomReward = Math.floor(Math.random() * reward.length);

    // output random end result to console
    let output = []; output.push('Your motivation for today is: ' + quote[randomQuote] + '. Today, you need to: ' + toDo[randomtoDO] + '. If you finish it, your reward is to: ' + reward[randomReward]);
    return output
}; 



console.log(dailyMotivation());
