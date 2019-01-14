  
  //global objects
   
  
  //present the post
  /*function feed_Function(){
	  
    var now = new Date();
    var sec = now.getSeconds()
	var min = now.getMinutes();
	var hr  = now.getHours();
    var user = document.getElementById('user_pic');
        user.name = document.getElementById('feed_text');
        user.name = "vasdfv"; 
		user.date = document.getElementById('feed_text');
		user.date = hr+':'+min+':'+sec;
  
    var a=document.getElementById("text").value;
    document.getElementById("feed_text").innerHTML="&nbsp;&nbsp;&nbsp;"+user.name+"<br />&nbsp;&nbsp;&nbsp;"+user.date+"<br /><br /><br />;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+a
    
  /*
    var b=document.getElementById("like");
    var c=document.getElementById("comment");
    var d=document.getElementById("user_pic");
 
    if (b.style.display === "none") {
    b.style.display = "block";
                                  }	
    else{ b.style.display = "block";
        }  
    if (c.style.display === "none") {
    c.style.display = "block";
                                  }	
    else{ c.style.display = "block";
        }   
    if (d.style.display === "none") {
    d.style.display = "block";
        	                      }	
    else{ d.style.display = "block";
        }   
	   
	
             

 
    var like=document.getElementById("like");
    var comment=document.getElementById("comment");
    var userPic=document.getElementById("user_pic");
 
   like.classList.replace('hidden','visable');
   comment.classList.replace('hidden','visable');
   userPic.classList.replace('hidden','visable');


	}
	*/					   
						   
						   
  
  //comment presentation
  function comment_Function(){
  
   var comFeed=document.getElementById("com_feed");
   var cancel=document.getElementById("cancel");
   var comPost=document.getElementById("com_post");
   var like=document.getElementById("like");

   comFeed.classList.replace('hidden','visable');
   cancel.classList.replace('hidden','visable');
   comPost.classList.replace('hidden','visable');
   like.classList.replace('hidden','visable');

                             }
  
  //cancel comment presentation
  function cancel_Function(){
  
   var comFeed=document.getElementById("com_feed");
   var cancel=document.getElementById("cancel");
   var comPost=document.getElementById("com_post");
 
   comFeed.classList.replace('visable','hidden');
   cancel.classList.replace('visable','hidden');
   comPost.classList.replace('visable','hidden');

  
  }
  //this function dosnt work, yet..
  
  
  //com_post_Function(){
  
 // var a=document.getElementById("com_feed").value;
 // document.getElementById("feed_text2").innerHTML=a;
  
 // }-->
 
 
 //upload files into feed function
 function uploadFunction(){
    var upload_file = document.getElementById('upload_file');

  // gets 'upload_file' id files constractor
  var files = upload_file.files;
  
  // gets 'upload file' id value string
  var file_name = upload_file.value;
  // alert(file_name);
   // gets the file name
  var lastIndex = file_name.lastIndexOf("h");
  //alert(lastIndex);
  var res = file_name.substring(lastIndex+2,file_name.length);
  
  //var  type = res.lastIndexOf(".");
  
  //type++;
  
  //alert(a[0].type);
  
  
  
  
    if(files[0].type =='image/jpeg'){
        var e = document.getElementById("photo_upload");
        e.classList.replace('hidden','visable');
        e.src ="../resources/" + res;
                                }
	if(files[0].type=='video/mp4'){
         
		 
		 var f = document.getElementById("video_upload");
        f.classList.replace('hidden','visable');
        f.src ="../resources/" + res;
		f.load();
		

	                           }	
     if(files[0].type=='audio/mpeg'){
         
		 
		 var g = document.getElementById("audio_upload");
        g.classList.replace('hidden','visable');
        g.src ="../resources/" + res;
		g.load();
		

	                           }	
  
  
  
  
  }
  function cloneThat(){
	
	

    var target = document.querySelector("#output");
	
	var dataArr = extractData();
	
	var indicators = ["post_text","upload_file","user_pic","user_name","time","com_feed"];
   
	var template = document.querySelector("#template");
	
	var clonedCont = template.cloneNode(true);
	clonedCont.id = "neweStat" + Math.random();
	
   
	for(var i = 0; i < indicators.length;i++){
	  var current = indicators[i];
	  clonedCont.querySelector('.' + current).innerHTML = dataArr[current];
      
	  }

	 return target.append(clonedCont);
	
	//var feed = document.getElementById('post');
    //var clone = feed.cloneNode(true);
    //clone.id = "neweStat" + Math.random();
	//target.append(clone);
		//if (dataArr === undefined){
		//	console.error("What the hell, no data");
		//	return null;
		//}
        
	
	/*
	//insert header
	newPost.querySelector(".profilePic").src = "guitar_pics/2.jpg";
	newPost.querySelector(".userName").innerText = "Moshe Cohen";
	
	var date = new Date();
	var dateString = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();
	newPost.querySelector(".dateCreated").innerText = dateString;


	
	
	//insert content
	var imgPosted = document.querySelector("#imgFiles");
	newPost.querySelector(".contentImage").src=imgPosted.value;
	
	var txtPosted = document.querySelector("#textPost");
	newPost.querySelector(".textContent").innerText = txtPosted.value;
		*/

	
	}
	function extractData(){
		
		var now = new Date();
		var sec = now.getSeconds()
		var min = now.getMinutes();
		var hr  = now.getHours();
		
		
		var data_container = {};
		data_container.post_text = document.getElementById('text').value;
		data_container.upload_file = document.getElementById('upload_file').value;
		data_container.user_pic = document.getElementById('photo_upload').value;
		data_container.user_name = "earge";
		data_container.time = hr+':'+min+':'+sec;
		data_container.com_feed = document.getElementById('com_feed').innerText;
		
		
		
		return data_container;
	}
	
	
  