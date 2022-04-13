const express = require('express') //파이썬의 import 같은 거임. express는 모듈임.
const app = express() //app은 server를 만드는 데 도움 줌. constructor
const collection = require('./data.js')
const valid_keys = require('./valid_keys.js')

const cors = require('cors');
app.use(cors());

// app.listen(5000) // 아래랑 같은 거. 한 서버가 동시에 2개 열리면 안됨!!

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
}) //서버가 이 포트를 듣게 이렇게 해보자.


// app.get('/', function (req, res) {       첫 인자는 내 디렉토리 속 Route that we'll respond to. 둘째는 노드 메서드. 각주해야 딴 놈이 이 라우터 쓸 것
//     res.send('GET request to homepage')
//     })


app.get('/contact', function (req, res) { //ㅋㅋ 그래서 클라이언트가 /contact라우트로 오면 우린 아래껄 띄워줄 것
    res.send('Hi there, here is my <a href="mailto:nabil_alrousan@bcit.ca"> email </a>.') //response 오브젝트의 send 메서드. 걍 써 express가 지원함.
})

// res.send() method will send a text or HTML response to the client. 위처럼 html 링크 ㅋㅋㅋ 
//Alternatively, you can send chunks of your response using res.write()s 
// and then signal the end of the response by calling res.send(). Check the following example.



// app.get('/', function (req, res) {
//     res.write(`Weather of ${req.query["q"]} is 4.8 Celsius. `);
//     res.write(`Your API key is ${req.query["appid"]}. `);
//     res.send();
// })


// app.get('/', function (req, res) {
//     res.json(                              //response오브젝트. .send 대신 res.json도 쓰네. 이럼 홈 라우터에 뜸 ㅇㅇ. 근데 아래같이 json file
//         {~~~~
//         }
//     );
// })


app.get('/', function (req, res) {
    // console.log(collection["cities"])
    if (valid_keys["keys"].find(
        (key) => key == req.query["appid"]
    )) { 
        res.json(collection["cities"].find(
            // (city) => city.name == "Vancouver"
            (city) => city.name == req.query["q"]   //request 즉 주소에서 읽어오긔 ㅋㅋ
        ))
    }
    else{
        res.send("Invalid key"); //여긴 니맘대로임ㅋㅋ 걍 로 해도 되고.. res.status 404나 400으로.. 근데 그럼 heroku 에러 
    }
    
})