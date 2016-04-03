var education ={
	"schools":[
		{
	         "name": "Centro Tecnológico Positivo"
	        ,"location": "Curitiba, PR, Brasil"
	        ,"degree": "Associate Degree"
	        ,"majors": "Analysis and Systems Development"
	        ,"dates": 2014
	        ,"url": "www.ctup.edu.br"

		}

	]
	,"onlineCourses":[
		{
			"title": "JavaScript Basics"
            ,"school": "Udacity"
            ,"date": 2016
            ,"url": "www.udacity.com"
		}
	]

};


var bio = {
	 "name":"André Negrini Turina"
	,"role":"Web Developer"
	,"contacts":{
		 "mobile":"+55 41 99151243"
		,"email":"turinaa@gmail.com"
		,"github":"https://github.com/turinaa"
		,"locations":"Curitiba, Brazil"
	}
	,"welcomeMessage":"Hello Internet"
	,"skills":["A","B"]
	,"biopic":"images/fry.jpg"

};


var work = {
	"jobs":[
		{
			"employer":"HSBC Bank"
			,"title":"Financial Specialyst"
			,"location":"Curitiba, PR, Brazil"
			,"dates":2009
			,"description":"cnnuifisnfuirnfinfukefgiefui5usgnf5ien5eiged"
		}
	]
};



var projects = {

	"projects":[
		{
			 "title":"Project 1"
			,"dates": 2015
			,"descripttion":"Implement internal web page using dynatree an Json"
			,"images":""
		}
		,
		{
			 "title":"Project 2"
			,"dates": 2015
			,"descripttion":"Implement internal web page using dynatree an Json"
			,"images":""
		}
	]
};


for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';



	$(".work-entry:last").append(formattedEmployerTitle);




}


/*

var formatedName = HTMLheaderName.replace("%data%","André");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formatedName);

*/