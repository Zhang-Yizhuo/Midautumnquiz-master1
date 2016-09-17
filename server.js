var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
});

app.listen(process.env.PORT || 8888);

app.use(express.static("public"));

var jokes=[{question:"哪一位诗人有写关于中秋节的诗?",punchlineright:"李白" ,punchlinewrong:"杜甫"},{setup:"嫦娥到了月亮后，仙丹变成了什么？",punchlineright:"玉兔" ,punchlinewrong:"猴子"},{setup:中秋节除了吃月饼，还会有什么食物？,punchlineright:"柚子" ,punchlinewrong"石榴" },{setup:"但愿人长久，千里共婵娟出自哪一位词人之手？",punchlineright:"苏轼",punchlinewrong:"辛弃疾"},{setup:"在中秋节， 吃月饼的习俗是在多少年前开始的？",punchlineright:"650年前",punchlinewrong:"750年前"},{setup:嫦娥为什么会飞到月亮上去？,punchlineright:"她吞下后羿留下的仙丹", punchlinewrong:"她得道成仙"},{setup:"后羿射下了几个太阳?",punchlineright:"10", punchlinewrong:"9"},{setup:"按照传统，中秋节起源于?",punchlineright:"汉朝",punchlinewrong:"宋朝"},{setup:"中秋节又称为?",punchlineright:"月夕",punchlinewrong:"除夕"},{setup:"后羿是从谁得到仙丹的?",punchlineright:"西王母",punchlinewrong:"玉皇大帝"}];

app.route("/jokes").get(function(req,res,next){
	randomJokeIndex = Math.floor(Math.random()*jokes.length);

	jokes[randomJokeIndex].id = randomJokeIndex;

	res.send(jokes[randomJokeIndex]);
});

app.post('/upvote', function(req, res) {
    var jokeIndex = req.body.id;
    if (typeof jokes[jokeIndex].rightans === 'undefined') {
        console.log("Right Answer!");
        jokes[jokeIndex].rightans = 0;
    }

    jokes[jokeIndex].rightans++;

    res.send(jokes[jokeIndex]);
});

app.post('/downvote', function(req, res) {
    var jokeIndex = req.body.id;
    if (typeof jokes[jokeIndex].rightans === 'undefined') {
        console.log("Wrong Answer!");
        jokes[jokeIndex].rightans = 0;
    }

    jokes[jokeIndex].rightans+=0;

    res.send(jokes[jokeIndex]);
});
