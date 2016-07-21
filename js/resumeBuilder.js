var bio = {
	 "name":"André Turina"
	,"role":"Web Developer"
	,"contacts":{
		 "mobile":"+44 07398482956"
		,"email":"turinaa@gmail.com"
		,"github":"turinaa"
		,"location":["London, UK"]
	}
	,"welcomeMessage":"Hello Internet"
	,"skills":[]
	,"biopic":"images/turina.jpg"
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

	,

		{
			"title": "Android Development for Beginners"
            ,"school": "Udacity"
            ,"date": 2015
            ,"url": "www.udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "HSBC Bank",
			"title": "Financial Specialyst",
			"location": "Curitiba PR, Brasil",
			"dates": "September 2009 - Current",
			"description": "Create and maintain reports using IBM Cognos Report Studio and IBM Cognos TM1<br>Create and maintain dimensional data model in Oracle<br>Developer ETL process using SQLPLUS and BatchScript<br>Create and maintain intranet web pages using.Net, javascript, JQuery<br>Improve timeefficient in PLSQL process of financial calculation "
		}
		, 
		{
			"employer": "GVT Telecom",
			"title": "Market Analyst",
			"location": "Curitiba PR, Brasil",
			"dates": "April 2008 - August 2009",
			"description": "Development processes that generate sales information for company executives<br>Implemented new analysis tools ( B.O. )<br>Development processes in low platform with MS Access and VBA<br>Develop VBA solution for Excel to final users, automation manual process"
		}
		,
		{
			"employer": "HSBC Bank",
			"title": "Financial Analyst",
			"location": "Curitiba PR, Brasil",
			"dates": "January 2007 - April 2008",
			"description": "Control, generation and maintenance of financial information<br>Participation in development projects related to IT / Finance<br>Development and automation excel spreadsheets using VBA"
		}		
	]
};

var proj = {

	"projects":[
		{
			 "title":"HSBC - Finance Intranet Portal"
			,"dates": 2015
			,"descripttion":"Improve intranet pages to manage cost centers and finance accounts using javascript like Dynatree and DataTable"
			,"images":""
		}
		,
		{
			 "title":"HSBC - Calculation Engine"
			,"dates": 2014
			,"descripttion":"We have created a calculation engine to provide taxes calculation, values allocation and regulatory calculation"
			,"images":""
		}		
		,
		{
			 "title":"HSBC - Finance BI Project"
			,"dates": 2012
			,"descripttion":"Implement a BI solution in finance department to provide data to Month Closing, sales forecast and anual operating plan."
			,"images":""
		}
	]
};

proj.display = function(){
	for(p in proj.projects){
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",proj.projects[p].title ));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",proj.projects[p].dates ));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",proj.projects[p].descripttion ));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",proj.projects[p].images ));
	}
}

education.display = function(){

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

	$(".education-entry").append(HTMLonlineClasses);
	for (online in education.onlineCourses){

		var formattedOnlineTitle 	= HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		var formattedOnlineSchool 	= HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		var formattedOnlineDate 	= HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
		var formattedOnlineUrl 		= HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
		
		$(".education-entry").append(formattedOnlineTitle+formattedOnlineSchool);
		$(".education-entry").append(formattedOnlineDate);
		$(".education-entry").append(formattedOnlineUrl);
	}
}

bio.display = function(){

	//	* header
	$("#header").prepend( HTMLheaderRole.replace("%data%",bio.role) );
	$("#header").prepend( HTMLheaderName.replace("%data%",bio.name) );

	//	* pic /Welcome message
	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	//$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	//  * topContacts
	//$("#topContacts").append(HTMLcontactGeneric);
	$("#topContacts").append( HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append( HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append( HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append( HTMLlocation.replace("%data%",bio.contacts.location));

	// * Skills
	//$("#header").append(HTMLskillsStart);
	//for (var i in bio.skills){
	//	$("#skills").append( HTMLskills.replace( "%data%" , bio.skills[i] ) );
	//}
}

work.display = function(){
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







//Function Calls
bio.display();
work.display();
proj.display();
education.display();




$("#mapDiv").append(googleMap);




/*
$("#header").prepend(formattedRole);
$("#header").prepend(formatedName);
*/
