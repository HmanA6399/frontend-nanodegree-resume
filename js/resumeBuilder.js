var work ={
      "jobs":[
          {
             "employer":"jemp_1",
             "title":"jtit_1",
             "location":"Alexandria",
             "dates":"jdat_1",
             "description":"jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 \
                             jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 \
                             jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1 jdesc_1"
          },
          {
             "employer":"jemp_2",
             "title":"jtit_2",
             "location":"Cairo",
             "dates":"jdat_2",
             "description":"jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2\
                            jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2\
                            jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2 jdesc_2"  
          }
      ],
     "display":function() {
         for  (job in this.jobs) {
             $("#workExperience").append(HTMLworkStart)
             var currentJob = this.jobs[job];
             var workAll = HTMLworkEmployer.replace("%data%",currentJob.employer)+
                           HTMLworkTitle.replace("%data%",currentJob.title)+
                           HTMLworkDates.replace("%data%",currentJob.dates)+
                           HTMLworkLocation.replace("%data%",currentJob.location)+
                           HTMLworkDescription.replace("%data%",currentJob.description);
            $(".work-entry:last").append(workAll);

         }
     }
   },
    projects = {
        "projects":[
            {
                "title":"ptit_1",
                "dates":"pdat_1",
                "description":"pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1\
                               pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1\
                               pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 pdisc_1 ",
                "image":"yourPhoto.png"
            },
            {
                "title":"ptit_2",
                "dates":"pdat_2",
                "description":"pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2\
                               pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2\
                               pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2 pdisc_2",
                "image":"yourPhoto.png"
            }
        ],
        "display":function (){
            for (var proj in this.projects){
                var currentProj = this.projects[proj];
                $("#projects").append(HTMLprojectStart);
                var projAll = HTMLprojectTitle.replace("%data%",currentProj.title)+
                              HTMLprojectDates.replace("%data%",currentProj.dates)+
                              HTMLprojectDescription.replace("%data%",currentProj.description)+
                              HTMLprojectImage.replace("%data%",currentProj.image) ;
              $(".project-entry:last").append(projAll);
            }
        }
    },
    bio = {
        "name":"myName",
        "role":"myRole",
        "welcomeMessage":"myWMessage",
        "contacts":{
                        "mobile":"myMob",
                        "email":"myEmail",
                        "gitHub":"myGit",
                        "blog":"myBlog",
                        "location":"Morroco"

                     },
        "bio_pic":"yourPhoto.png",
        "skills":["skill_1","skill_2","skill_3"] ,
        "display":function() {
            var nameRole = HTMLheaderName.replace("%data%",this.name)+
                         HTMLheaderRole.replace("%data%",this.role);
            $("#header").prepend(nameRole);
            var contAll = HTMLmobile.replace("%data%",this.contacts.mobile)+
                          HTMLemail.replace("%data%",this.contacts.email)+
                          HTMLgithub.replace("%data%",this.contacts.gitHub)+
                          HTMLblog.replace("%data%",this.contacts.blog)+
                          HTMLlocation.replace("%data%",this.contacts.location);
            $("#topContacts").append(contAll);
            var bioPic = HTMLbioPic.replace("%data%",this.bio_pic);
            var welcomeMsg = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
            $("#header").append(bioPic+welcomeMsg);
            if (this.skills!=="") {
                $("#header").append(HTMLskillsStart);
                for (var skill in this.skills ) {
                    var skillAll = HTMLskills.replace("%data%",this.skills[skill]);
                    $("#skills").append(skillAll);
                }
            }
        }
    },
    education={
        "schools":[
            {
                "name":"sname_1",
                "location":"New Orleans",
                "degree":"sdeg_1",
                "major":["smaj1_1","smaj2_1","smaj3_1"],
                "dates":"sdates_1"
            },
            {
                "name":"sname_2",
                "location":"Ontario",
                "degree":"sdeg_2",
                "major":["smaj1_2","smaj2_2","smaj3_2"],
                "dates":"sdates_2"
            }
        ],
        "onlineCourses":[
            {
                "title":"ctit_1",
                "school":"cschool_1",
                "dates":"cdat_1",
                "Url":  "curl_1"
            },
            {
                "title":"ctit_2",
                "school":"cschool_2",
                "dates":"cdat_2",
                "Url":  "curl_2"  
            }
        ],
        "display":function() {
            //display Schools
            this.schools.forEach(function(school){
                 $("#education").append(HTMLschoolStart);
                var currentSchool = school;
                var schoolsAll = HTMLschoolName.replace("%data%",currentSchool.name)+
                                 HTMLschoolDegree.replace("%data%",currentSchool.degree)+
                                 HTMLschoolDates.replace("%data%",currentSchool.dates)+
                                 HTMLschoolLocation.replace("%data%",currentSchool.location)+
                                 HTMLschoolMajor.replace("%data%",currentSchool.major);
                $(".education-entry:last").append(schoolsAll);
            })
            //display courses
            $("#education").append(HTMLonlineClasses);
            for (course in this.onlineCourses){
                $("#education").append(HTMLschoolStart);
                var currentCourse = this.onlineCourses[course];
                var courseAll = HTMLonlineTitle.replace("%data%",currentCourse.title)+
                                HTMLonlineSchool.replace("%data%",currentCourse.school)+
                                HTMLonlineDates.replace("%data%",currentCourse.dates)+
                                HTMLonlineURL.replace("%data%",currentCourse.Url);
                $(".education-entry:last").append(courseAll);
            }

        }
    };
work.display();
bio.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
