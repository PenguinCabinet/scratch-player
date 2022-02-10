	function appendScript(URL) {
    	var el = document.createElement('script');
    	el.src = URL;
    	document.body.appendChild(el);
    };
	function my_find(v){
		return v.getElementsByClassName("guiPlayer fullscreen").length==0
	}
    Is_clicked=false;
	document.addEventListener('DOMContentLoaded', function() {
		let window_fix=8;
		window.onload=function () {
			window.setInterval(function(){
				if(document.getElementsByClassName("app")==null)
					return
                Is_clicked=true;
				
					/*
				//let temp3=document.getElementsByClassName("guiPlayer fullscreen").item(0).children[0].children[1];
				let temp3=document.getElementsByClassName("guiPlayer fullscreen").item(0).children[0].children[1];
				let temp2=document.getElementsByClassName("inner").item(1)
				temp2.children[0].style.display ="none";
				//temp2.children[2].style.display ="none";
					
				temp3.style.display="initial";

				//let temp2=document.getElementsByClassName("guiPlayer fullscreen").item(0).children[0].children[0];
				//temp3.style.height ="100vh";
				//temp3.style.width="100vw";
				*/


				let temp2=document.getElementById("app").children[0].children[0]
				temp2.style.display ="none";

				let temp3=document.getElementById("app").children[0].children[1]
				temp3.style.width="100vw";
				temp3.style.height="100vh";

				let temp4=document.getElementsByTagName("canvas")[0];
				temp4.width=document.documentElement.clientWidth-window_fix
				temp4.height=document.documentElement.clientHeight-window_fix
				temp4.style.width =(document.documentElement.clientWidth.toString()-window_fix)+"px"
				temp4.style.height=(document.documentElement.clientHeight.toString()-window_fix)+"px"

				temp4.parentElement.parentElement.style.width =(document.documentElement.clientWidth-window_fix).toString()+"px"
				temp4.parentElement.parentElement.style.height=(document.documentElement.clientHeight-window_fix).toString()+"px"

				document.getElementById("app").children[0].className=""


				window.onresize =function(){
					let temp4=document.getElementsByTagName("canvas")[0];
					temp4.width =document.documentElement.clientWidth-window_fix
					temp4.height=document.documentElement.clientHeight-window_fix
					temp4.style.width =(document.documentElement.clientWidth-window_fix).toString()+"px";
					temp4.style.height=(document.documentElement.clientHeight-window_fix).toString()+"px"
				}
                //document.getElementById("app").children[0].children[1].children[0].children[2].click()
		
			},100);
		}
	})