//////////////////////////loader////////////////////////////////////
var page;
document.body.addEventListener("onload",myFunction())

function myFunction() {
  page = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loaderdiv").style.display = "none";
  document.getElementById("maindiv").style.display = "block";
}
/////////////////////////////////////////////////////////////
var button=document.getElementById('send')
var score=0
var result=document.getElementById('result') //p tags id through which the result will appear
var useranswers=[]
var answers=["one","two","three","four","five"]
button.addEventListener("click",showresults)
/////////////////////////////////
function showresults(){
	insert()
 checkanswers()
}
//////////////////////////////////////compare the two arrays/////////////////////
function checkanswers (){

 if (useranswers.length==answers.length) {
	 for (var i = 0; i < answers.length; i++) {
	if (useranswers[i]==answers[i]) {
	score++
	result.innerHTML=" You Scored "+score+" Out Of 5 "
	send.style.display="none"
	} }

 } else {
	 useranswers=[]
	 alert('Please Answer All The Questions')
	 score=0

 }
}
////////////////////////////////////Inser User Answers///////////
function insert() {
	var numberofquestions=5
	for (var j = 1; j <numberofquestions+1; j++) {
		var question=document.getElementsByName('question'+j)
		for (var i = 0; i <question.length; i++) {
			if (question[i].checked) {
				useranswers.push(question[i].value)

			}

		}
	}


}
