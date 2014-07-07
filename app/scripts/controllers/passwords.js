'use strict';

/**
 * @ngdoc function
 * @name sspmApp.controller:PasswordsCtrl
 * @description
 * # PasswordsCtrl
 * Controller of the sspmApp
 */
angular.module('sspmApp')
  .controller('PasswordsCtrl', ['$scope','Passwords', 'bootbox', function ($scope,Passwords,bootbox) {
		$scope.$watch('passwordGroups',function(){
			Passwords.saveData();
		},true);
		$scope.importExport=Passwords.importExport;
		$scope.userDetails=Passwords.userDetails;
		$scope.selectedGroup=null;
		$scope.generateTypes=[
			'Letters','Letters/Numbers','Letters/Numbers/Symbols'
		];

		$scope.generateDetails={type:$scope.generateTypes[1],length:10};
		
		$scope.selectedPassword=null;
		$scope.createPassword=null;
    $scope.passwordGroups=Passwords.passwordGroups;
		$scope.selectGroup=function(group){
			$scope.selectedGroup=group;
		};
		$scope.deselectGroup=function(){
			$scope.selectedGroup=null;
		};
		$scope.addGroup=Passwords.addGroup;
		$scope.movePasswordUp=function(group,password){
			var idx=group.passwords.indexOf(password);
			if(idx>0){
				var t1=group.passwords[idx];
				var t2=group.passwords[idx-1];
				group.passwords[idx]=t2;
				group.passwords[idx-1]=t1;
			}
		};
		$scope.movePasswordDown=function(group,password){
			var idx=group.passwords.indexOf(password);
			if(idx<group.passwords.length-1){
				var t1=group.passwords[idx];
				var t2=group.passwords[idx+1];
				group.passwords[idx]=t2;
				group.passwords[idx+1]=t1;
			}
		};
		$scope.moveGroupUp=function(group){
			var idx=$scope.passwordGroups.indexOf(group);
			if(idx>0){
				var t1=$scope.passwordGroups[idx];
				var t2=$scope.passwordGroups[idx-1];
				$scope.passwordGroups[idx]=t2;
				$scope.passwordGroups[idx-1]=t1;
			}
		};
		$scope.moveGroupDown=function(group){
			var idx=$scope.passwordGroups.indexOf(group);
			if(idx<$scope.passwordGroups.length-1){
				var t1=$scope.passwordGroups[idx];
				var t2=$scope.passwordGroups[idx+1];
				$scope.passwordGroups[idx]=t2;
				$scope.passwordGroups[idx+1]=t1;
			}
		};
		$scope.deleteGroup=function(group){
			bootbox.confirm('You are you want to delete '+group.name,function(result){
				if(result){
					Passwords.deleteGroup(group);
					$scope.$apply();
				}
			});
		};

		$scope.clearAll=function(){
			bootbox.confirm('You are about to wipe all your password and Groups are you really sure you want to do that??',function(result){
				if(result){
					Passwords.clearAll();
					$scope.$apply();
				}
			});
		};
		$scope.clearPasswords=function(group){
			bootbox.confirm('You are about to wipe all your password in '+group.name+', you really sure you want to do that??',function(result){
				if(result){
					Passwords.clearPasswords(group);
					$scope.$apply();
				}
			});
		};
		$scope.importFile=function(data){
			var result=Passwords.importPasswords(data);
			$scope.$apply();
			if(!result){
				bootbox.alert('Unable to import the file, are you sure that you are using the same passphrase?');
			}
		};
		$scope.addPassword=Passwords.addPassword;
		$scope.deletePassword=function(group,password){
			bootbox.confirm('Are you sure you wish to delete the password for '+password.site,function(result){
				if(result){
					Passwords.deletePassword(group,password);
					$scope.$apply();
				}
			});
		};
		$scope.editPassword=function(password){
			if($scope.selectedPassword){
				$scope.selectedPassword.dirty=false;
			}
			$scope.selectedPassword=password;
		};
		$scope.editPasswordDone=function(password){
			password.dirty=false;
			$scope.selectedPassword=null;
		};
		$scope.generatePassword=function(password){
			$scope.createPassword=password;
		};
		$scope.generateCancel=function(){
			$scope.createPassword=null;
		};
		$scope.randomPassword=function(){
			$scope.createPassword.password=Passwords.randomPassword($scope.generateDetails.type,$scope.generateDetails.length);
			$scope.createPassword=null;
		};
  }]);
