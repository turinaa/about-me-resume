var bio = {
	 "name":"André Turina"
	,"role":"Web Developer"
	,"contacts":{
		 "mobile":"+55 41 99151243"
		,"email":"turinaa@gmail.com"
		,"github":"turinaa"
		,"locations":"Curitiba, Brazil"
	}
	,"welcomeMessage":"Hello Internet"
	,"skills":["A","B"]
	,"biopic":"images/fry.jpg"
};

var education ={
	"schools":[
		{
	         "name": "Centro Tecnológico Positivo"
	        ,"location": "Curitiba, PR, Brasil"
	        ,"degree": "Associate Degree"
	        ,"majors": "Systems Analysis and Development"
	        ,"dates": 2014
	        ,"url": "www.ctup.edu.br"

		}

	]
	,
	"onlineCourses":[
		{
			"title": "JavaScript Basics"
            ,"school": "Udacity"
            ,"date": 2016
            ,"url": "www.udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "HSBC Bank",
			"title": "Financial Specialyst",
			"location": "Curitiba, PR, Brazil",
			"dates": "September 2009 - Current",
			"description": "Create and maintain reports using IBM Cognos Report Studio and IBM Cognos TM1<br>Create and maintain dimensional data model in Oracle<br>Developer ETL process using SQLPLUS and BatchScript<br>Create and maintain intranet web pages using.Net, javascript, JQuery<br>Improve timeefficient in PLSQL process of financial calculation "
		}
		, 
		{
			"employer": "GVT Telecom",
			"title": "Market Analyst",
			"location": "Curitiba, PR, Brazil",
			"dates": "April 2008 - August 2009",
			"description": "Development processes that generate sales information for company executives<br>Implemented new analysis tools ( B.O. )<br>Development processes in low platform with MS Access and VBA<br>Develop VBA solution for Excel to final users, automation manual process"
		}
		,
		{
			"employer": "HSBC Bank",
			"title": "Financial Analyst",
			"location": "Curitiba, PR, Brazil",
			"dates": "January 2007 - April 2008",
			"description": "Control, generation and maintenance of financial information<br>Participation in development projects related to IT / Finance<br>Development and automation excel spreadsheets using VBA"
		}		
	]
};

var proj = {

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


//$("#header").append(HTMLcontactGeneric);
$("#main").append(internationalizeButton);

displayBio();
displayWork();
displayProjects();
displaySchool();



function displayProjects(){
	$("#projects").append(HTMLprojectStart);
	for(p in proj.projects){
		$(".project-entry").append(HTMLprojectTitle.replace("%data%",proj.projects[p].title ));
		$(".project-entry").append(HTMLprojectDates.replace("%data%",proj.projects[p].dates ));
		$(".project-entry").append(HTMLprojectDescription.replace("%data%",proj.projects[p].descripttion ));
		$(".project-entry").append(HTMLprojectImage.replace("%data%",proj.projects[p].images ));
	}
}

function displaySchool(){
	var formattedSchoolStart 	= HTMLschoolStart
	var formattedSchoolName 	= HTMLschoolName.replace("%data%", education.schools[0].name )
	var formattedSchoolDegree 	= HTMLschoolDegree.replace("%data%", education.schools[0].degree)
	var formattedSchoolDates 	= HTMLschoolDates.replace("%data%", education.schools[0].dates)
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location)
	var formattedSchoolMajor 	= HTMLschoolMajor.replace("%data%", education.schools[0].majors)

	$("#education").append(HTMLschoolStart);
	$(".education-entry").append(formattedSchoolName);
	$(".education-entry").append(formattedSchoolDegree);
	$(".education-entry").append(formattedSchoolDates);
	$(".education-entry").append(formattedSchoolLocation);
	$(".education-entry").append(formattedSchoolMajor);
}

function displayBio(){

	//	* header
	$("#header").prepend( HTMLheaderRole.replace("%data%",bio.role) );
	$("#header").prepend( HTMLheaderName.replace("%data%",bio.name) );

	//  * topContacts
	//$("#topContacts").append(HTMLcontactGeneric);
	$("#topContacts").append( HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append( HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append( HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append( HTMLlocation.replace("%data%",bio.contacts.locations));
	
	//	* pic /Welcome message
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	// * Skills
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills){
		$("#skills").append( HTMLskills.replace( "%data%" , bio.skills[i] ) );
	}
}

function displayWork(){
	for (job in work.jobs){
		//create div "work-entry"
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer 			= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle 				= HTMLworkTitle.replace("%data%" , work.jobs[job].title);
		var formattedWorkDates 			= HTMLworkDates.replace("%data%" , work.jobs[job].dates)
		var formattedWorkLocation 		= HTMLworkLocation.replace("%data%" , work.jobs[job].location);
		var formattedWorkDescription 	= HTMLworkDescription.replace("%data%" , work.jobs[job].description);

		var formattedEmployerTitle 		= formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
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


/*
var formatedName = HTMLheaderName.replace("%data%","André");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formatedName);
*/
