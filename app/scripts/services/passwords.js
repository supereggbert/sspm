'use strict';

/**
 * @ngdoc service
 * @name sspmApp.Passwords
 * @description
 * # Passwords
 * Factory in the sspmApp.
 */
angular.module('sspmApp')
  .factory('Passwords', function () {
		var passwordGroups=[];
		var userDetails={
			newUser:localStorage.passwordData?false:true,
			validated:false
		};
		var importExport={
			link:''
		};
		var masterPassphrase;
		
		var addPassword=function(group){
			group.passwords.push({site:'',url:'',username:'',password:'',dirty:true,idx:+new Date});
		};
		
		var deletePassword=function(group,password){
			group.passwords.splice(group.passwords.indexOf(password),1);
		};
		var deleteGroup=function(group){
			passwordGroups.splice(passwordGroups.indexOf(group),1);
		};
		
		var addGroup=function(){
			var group={name:'New Group',passwords:[],idx:+new Date};
			addPassword(group);
			passwordGroups.push(group);
		};
		
		var randomPassword=function(type,length){
			var letters='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			var numbers='0123456789';
			var symbols='!"$%^&*()@~#;:[]{}<>.,_-=+/\\';
			var password='';
			var i;
			switch(type){
				case 'Letters':
					for(i=0;i<length;i++){
						password+=letters[parseInt(Math.random()*letters.length)];
					}
					break;
				case 'Letters/Numbers':
					for(i=0;i<length;i++){
						if(Math.random()>0.5){
							password+=letters[parseInt(Math.random()*letters.length)];
						}else{
							password+=numbers[parseInt(Math.random()*numbers.length)];
						}
					}
					break;
				case 'Letters/Numbers/Symbols':
					for(i=0;i<length;i++){
						var r=Math.random();
						if(r>0.6666){
							password+=letters[parseInt(Math.random()*letters.length)];
						}else if(r>0.33333){
							password+=numbers[parseInt(Math.random()*numbers.length)];
						}else{
							password+=symbols[parseInt(Math.random()*symbols.length)];
						}
					}
					break;
			}
			return password;
		};
		var saveData=function(){
			if(masterPassphrase){
				var json=JSON.stringify(passwordGroups);
				var data=CryptoJS.AES.encrypt(json, masterPassphrase).toString();
				importExport.link="data:text/plain;base64,"+btoa(data);
				localStorage.passwordData=data;
			}
		};
		var importPasswords=function(data){
			var oldData=localStorage.passwordData;
			localStorage.passwordData=data;
			var result=loadData();
			if(!result){
				localStorage.passwordData=oldData;
				loadData();
			}
			return result;
		};
		var loadData=function(){
			if(masterPassphrase){
				var data=localStorage.passwordData;
				try{
					var json=CryptoJS.AES.decrypt(data, masterPassphrase).toString(CryptoJS.enc.Utf8);
					clearAll();
				
					var savedPasswords=JSON.parse(json);
					for(var i in savedPasswords){
						passwordGroups[i]=savedPasswords[i];
					}
					userDetails.validated=true;
          saveData();
					return true;
				}catch(e){
					masterPassphrase=null;
					return false;
				}
			}else{
				return false;
			}
		};
		var clearAll=function(){
			while(passwordGroups.length) passwordGroups.pop();
			addGroup();
		};
		var clearPasswords=function(group){
			while(group.passwords.length) group.passwords.pop();
		};
		var validatePhasephrase=function(passphrase){
			if(!localStorage.passwordData){
				masterPassphrase=passphrase;
				addGroup();
				saveData();
				userDetails.validated=true;
				return true;
			}else{
				masterPassphrase=passphrase;
				return loadData();
			}
		};
		var logout=function(){
			masterPassphrase='';
			while(passwordGroups.length) passwordGroups.pop();
			userDetails.validated=false;
		};

		
    return {
			passwordGroups: passwordGroups,
			addGroup: addGroup,
			deleteGroup: deleteGroup,
			addPassword: addPassword,
			deletePassword: deletePassword,
			randomPassword: randomPassword,
			saveData: saveData,
			clearAll: clearAll,
			validatePhasephrase: validatePhasephrase,
			clearPasswords: clearPasswords,
			userDetails: userDetails,
			importExport:importExport,
			importPasswords:importPasswords,
			logout:logout
    };
  });
