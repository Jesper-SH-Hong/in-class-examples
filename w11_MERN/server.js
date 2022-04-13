const express = require('express') //importing express
const app = express()
const https = require('https'); //step5 HTTPS module. 첨 보징 ㅎㅎ import해서 걍 https로 부를게

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
	extended: true
}));
//allows u parse the body


app.listen(5000, function (err) { //err은 포트, 콜백펑션 취해서 에러 체크..
	if (err)
		console.log(err);
	else
		console.log('everything is fine!')
})


// // app.get('/', function (req, res 혹은 t_) {    //get은 (라우터, 라우터 핸들러(fn))을 인자로 받음. 변수명은 관례. 순서만 맞으면 res 대신 t_ 넣어도 되
// //     t_.send('GET request to homepage')
// //   })



//서버사이드의 DB구축 방법1.  서버 - 외부API서 끌어오기
//방법1 라인3 https:// 추가하고 이 라우터로 위에거 다 대체
// app.get("/", function (req, res) { //항상 RQ들은 라우터, 콜백함수를 받지?
// 	var cityName = 'Vancouver';
// 	var apikey = "b660f3402c54cb9a9c48f89c35249e5c"
// 	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apikey

// 	https.get(url, function (https_res) { //https 모듈로 api에 RQ 보냄. .get으로 저거 가져옴. 상단에 방문하고픈 url 명시, 
// 		https_res.on("data", function (data) {   //여기부턴 응답이지. https_res 뭐라 불러도 되지만 res임 무튼ㅋㅋ
// 			console.log(data) //Hex
// 			console.log(JSON.parse(data))  //인간 알아먹게 변환
// 			console.log(JSON.parse(data).weather[0].description)
// 			res.write("<h1> " + cityName + " weather is " + JSON.parse(data).weather[0].description + "</h1>"); //write 메서드: won't be sent until .send().
// 			res.write("<h1> " + cityName + " temp is " + JSON.parse(data).main.temp + "</h1>"); //write안에 html이지?ㅋㅋ
// 			//모든 이 write mthd는 response하지만.. res.send() 전까진 send는 안함
// 			//생각해 봐... 다 메서드에 concat하고플 수도 있음
// 			//console.log(JSON.parse(data).weather[0].icon );
// 			res.write('  <img src="' + "http://openweathermap.org/img/wn/" + JSON.parse(data).weather[0].icon + '.png"' + "/>");
// 			res.send();
// 		})
// 	});

// })




//서버사이드의 소통방법2. 서버 - 우리 로컬 DB(몽고 로컬, 몽고 아틀라스)   // cmd 가서 나빌 복붙으로채우고 오셈ㅎㅎ(db.cities.insert(~~))
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/index.html"); // 내 홈 에 오면 이 html 파일을 뱉을 것. 다만 이렇게 html을 뱉으려면 server.js랑 같은 디렉토리에 있어야 함.
}) //!!!send = text만 ... sendfile = whole html.file or text.file.. 무튼 우리가 지금 하는 수업을 재현만 하면 됨. 미리 노트에 복붙해서

//get은 도달하면 자동으로 해당 콜백 띄워주고
//post는 유저가 뭔가 액션 취하면 작동!ㅎㅎ 그게 둘의 차이점임.

app.post("/", function (req, res) { //post도 같은 홈라우트 쓰네(/) 근데 위에건 .get, 이건 .post 리퀘스트야. 다른 타입의 http 리퀘스트들도  put, delete? 등등.. 데이터를 서버에 보낼 땐 post를 쓸거야. 왜냐 http리퀘스트의 바디를 쓰고 싶으니까.. 보안을 위해.. post 메서드는 또 데이터 크기 제한 없이 보냄. get은 제한이 있다. 꽤 작음..
	// res.send("post req received" + req.body.cityName);
	var apikey = "b660f3402c54cb9a9c48f89c35249e5c";
	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + req.body.cityName + "&units=metric&appid=" + apikey
	//윗줄 기존처럼 변수 할당 ctyname으로 무식하게 떄려 안 박고 req.body.cityName으로 쓰네 이번엔. index.html의 텍스트 필드에서 가져온 거임!
	// 근데 안된다.. bodyparser를 끌고 와야했네 ㅋㅋ 라인5 cnrkgkwk.
	https.get(url, function (https_res) {
		https_res.on("data", function (data) {
			res.write("<h1> " + req.body.cityName + " weather is " + JSON.parse(data).weather[0].description) + "</h1>";
			res.write("<h1> " + req.body.cityName + " temp is " + JSON.parse(data).main.temp) + "</h1>";

			// console.log(JSON.parse(data).weather[0].icon );
			res.write('  <img src="' + "http://openweathermap.org/img/wn/" + JSON.parse(data).weather[0].icon + '.png"' + "/>");
			res.send();
		})
	});

})





const mongoose = require('mongoose'); //node.js의 몽고db와 소통하게 해주는 프레임웤

mongoose.connect("mongodb://localhost:27017/test", //디폴트로 몽고디비는 27017 포트를 썽.  또 db의 이름인 test를 주었음.
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
const citySchema = new mongoose.Schema({ //키와 타입임. name은 꼭 string이어야 함. 등등
	name: String,
	temperature: Number, //뭐.. String으로도 될듯..
	description: String
});
const cityModel = mongoose.model("cities", citySchema); //음흠 citySchema. 위에 정의한 거고 ㅋㅋ


//last step. 개별도시용. city_name을 라우터에 주고 있음.
// : 이 콜론 뭐야? query parameter를 define함.
app.get('/cities/:city_name', function (req, res) {
//아랫줄에서 저걸 요긴하게 써먹으려구 ㅎㅎ req 오브젝트, req.params을 통해서 city_name 받아ㅋㅋㅋ 쿼리 파라미터 자체임.
	console.log("received a request for " + req.params.city_name);
	//그래서 주소창에 /cities/Vancouver라 치면 그 밴쿠버의 결과만 뜸. 이번 랩에서 했던 신택스처럼 '키:밸류'로 검색 기준을 특정한 거임.
	//params는 리스트임. 그 안에 원하는 만큼 param을 가질 수 있어. /Vancuver&unit=metric
	//그럼 라우터가 /cities/:city_name&:units 같이 되야 할 것 req.param.units 써먹게 되겠지 ㅎㅎ
	// 무튼 쟤네를 어케 읽어온다? 우선 라우터에 : 사용. 네 변수가 어딨는지 알려주게 ㅎㅎ
	//코드에 request object 써야 함.(저게 http req의 일종임. 헤더에 저장되어있는)
	//그리고 req.params.네가원하는쿼리변수명 ex.req.params.city_name
	//그동안은 헤더/바디를 썼다 유저가. 바디parse 기억나지? name: req.body.name이었다고  
	//만약 유저가 url을 쓰면 req.params를 통해 취하고. 일반적인 웹게발에서 서버는 3가지 방식이 있다. 
	//client send data. 1)url, 2)body/header html request(오늘) 3/ session variables = 같은 웹사이트 내 페이지 이동(정보 오버로드).. 랩탑 덮었따 켜도 계속 로긴돼있음.

	cityModel.find({
		name: req.params.city_name
	}, function (err, cities) {
		if (err) {
			console.log("Error " + err);
		} else {
			console.log("Data " + JSON.stringify(cities));
		}
		res.send(JSON.stringify(cities));
	});
})
//아니;; 이 부분 시험에 포커스 안한다구요..?
app.get('/cities', function (req, res) {   
	// code to retrieve all cities...
	// citymodel은 cityschema에 기반하는 놈. cityschema는 내 db 콜렉션과 연결한 오브젝트.
	cityModel.find({}, function (err, cities) { // find() 기억 나지? projection까지 원하면 {} {}로  맨 마지막은 콜백펑션. 결과도 갖고 오고 그걸로 뭐할놈
		if (err) {
			console.log("Error " + err);
		} else {
			console.log(cities)
			// console.log("Data " + JSON.stringify(cities));  //스트링화해서 결과를 돌려줌. 좀 투머치인가 여러분에게...
		}
		res.send(cities); //JSON.stringify 빼자 걍; 참고로 JSON.parse와 반대. 만약 string으로 표현된 json object를 JSON 오브젝트화하고 싶으면 저걸,
		//자바스크립트의 JSON data를 네트워크에서 쓰려면 .stringify써야 함(????) 이미 센드메시지가 json format으로 뱉어주니 stringifiy 필요 없을듯..
	});
})
// .get템플맀이었던걸 노션 긁어서 대체 복붙.
// .get이 2개임 하나는 /cities/:city_name
// .get 하나는 /citiees


app.post('/cities', (req, res) => {
	// code to add a new city...
	res.json(req.body);
  });

app.put('/cities/:name', (req, res) => { // 내 db에서 내가 원하는대로 이 put과 delete 하기 위해.
	const {
		name
	} = req.params;
	// code to update a city...
	res.json(req.body);
});

app.delete('/cities/:name', (req, res) => {
	const {
		name
	} = req.params;
	// code to delete a city...
	res.json({
		deleted: id
	});
});