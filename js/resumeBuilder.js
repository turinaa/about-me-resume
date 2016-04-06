var bio = {
	 "name":"André Turina"
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


//$("#header").append(HTMLcontactGeneric);
$("#main").append(internationalizeButton);

displayBio();
displayWork();
displaySchool();

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
	var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
	var formattedheaderRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedheaderRole);
	$("#header").prepend(formattedHeaderName);

	//  * topContacts
	var formattedContactGeneric = HTMLcontactGeneric;
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.locations);
	$("#topContacts:last").append(formattedMobile);
	$("#topContacts:last").append(formattedEmail);
	$("#topContacts:last").append(formattedGithub);
	$("#topContacts:last").append(formattedLocation);

	//	* pic
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header:last").append(formattedBioPic);
	// * Welcome message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header:last").append(formattedWelcomeMsg);

	// * skills start
	var formattedSkillsStart = HTMLskillsStart;
	$("#header:last").append(formattedSkillsStart);
	// * skills list
	for (var i in bio.skills){
		var formattedSkills = HTMLskills.replace( "%data%" , bio.skills[i] );
		$("#skills").append(formattedSkills);
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
