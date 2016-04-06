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
			,"dates":"2009"
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

//Make Header
$("#header").append(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLheaderRole.replace("%data%",bio.role));
$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
$("#header").append(HTMLlocation.replace("%data%",bio.contacts.locations));


$("#header").append(HTMLcontactGeneric);

$("#main").append(internationalizeButton);

function displayWork(){

	for (job in work.jobs){

		//create div "work-entry"
		$("#workExperience").append(HTMLworkStart);
		

		var formattedEmployer 		= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle 			= HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle 	= formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		
		$(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));

	}
}

function inName(strName){
	var strNameFormatted = "";
	var splitName = strName.split(" ");
	var max = splitName.length-1;
	
	for(name in splitName){
		var strWord = splitName[name];
		//First Name
		if(name == 0){
			strWord = strWord.substr(0,1).toUpperCase() + strWord.substr(1).toLowerCase();
		}

		//Last Name
		if(name == max){ 
			strWord = strWord.toUpperCase(); 
		}

		strNameFormatted = strNameFormatted + " " + strWord
	}
	return strNameFormatted;
}

inName('Andre Turina');

displayWork();

/*

var formatedName = HTMLheaderName.replace("%data%","André");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");


$("#header").prepend(formattedRole);
$("#header").prepend(formatedName);

*/