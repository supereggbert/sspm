'use strict';

describe('Controller: PasswordsCtrl', function () {

  // load the controller's module
  beforeEach(module('sspmApp'));

  var PasswordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,Passwords) {
    localStorage.passwordData=null;
    delete(localStorage.passwordData);
    Passwords.validatePhasephrase('passphrase');
    scope = $rootScope.$new();
    PasswordsCtrl = $controller('PasswordsCtrl', {
      $scope: scope
    });
  }));

  it('Adding Groups', function () {
    scope.addGroup();
    expect(scope.passwordGroups.length).toBe(2);
  });
  it('Selecting Groups', function () {
    expect(scope.selectedGroup).toBe(null);
    scope.selectGroup(scope.passwordGroups[0])
    expect(scope.selectedGroup).toBe(scope.passwordGroups[0]);
    scope.deselectGroup();
    expect(scope.selectedGroup).toBe(null);
  });
  it('Removing Groups', function () {
    expect(scope.passwordGroups.length).toBe(1);
    scope.deleteGroup(scope.passwordGroups[0]);
    expect(scope.passwordGroups.length).toBe(0);
  });
  it('Moving Groups', function () {
    scope.addGroup();
    scope.passwordGroups[0].name='Group1';
    scope.passwordGroups[1].name='Group2';
    //check moving group up    
    scope.moveGroupUp(scope.passwordGroups[1]);
    expect(scope.passwordGroups[0].name).toBe('Group2');
    expect(scope.passwordGroups[1].name).toBe('Group1');
    //check moving group down
    scope.moveGroupDown(scope.passwordGroups[0]);
    expect(scope.passwordGroups[0].name).toBe('Group1');
    expect(scope.passwordGroups[1].name).toBe('Group2');
  });
  it('Adding Passwords', function () {
    //add and additional password
    scope.addPassword(scope.passwordGroups[0]);
    expect(scope.passwordGroups[0].passwords.length).toBe(2);
  });
  it('Removing Passwords', function () {
    //delete default first password
    scope.deletePassword(scope.passwordGroups[0],scope.passwordGroups[0].passwords[0]);
    expect(scope.passwordGroups[0].passwords.length).toBe(0);
  });
  it('Editing Passwords', function () {
    scope.addPassword(scope.passwordGroups[0]);
    //edit initial password
    scope.editPassword(scope.passwordGroups[0].passwords[0]);
    //check that the edit has been set
    expect(scope.selectedPassword).toBe(scope.passwordGroups[0].passwords[0]);
    //make sure password is initially dirty
    expect(scope.passwordGroups[0].passwords[0].dirty).toBe(true);
    //finish editing
    scope.editPasswordDone(scope.passwordGroups[0].passwords[0]);
    //dirty flag should now be false
    expect(scope.passwordGroups[0].passwords[0].dirty).toBe(false);
    //editing done so there should be no selection
    expect(scope.selectedPassword).toBe(null);
  });
  it('Moving Passwords', function () {
    scope.addPassword(scope.passwordGroups[0]);
    scope.passwordGroups[0].passwords[0].site='site1';
    scope.addPassword(scope.passwordGroups[0]);
    scope.passwordGroups[0].passwords[1].site='site2';
    //check the move up
    scope.movePasswordUp(scope.passwordGroups[0],scope.passwordGroups[0].passwords[1]);
    expect(scope.passwordGroups[0].passwords[0].site).toBe('site2');
    expect(scope.passwordGroups[0].passwords[1].site).toBe('site1');
    //check the move down
    scope.movePasswordDown(scope.passwordGroups[0],scope.passwordGroups[0].passwords[0]);
    expect(scope.passwordGroups[0].passwords[0].site).toBe('site1');
    expect(scope.passwordGroups[0].passwords[1].site).toBe('site2');
  });
  it('Clearing Passwords', function () {
    //check we have default password
    expect(scope.passwordGroups[0].passwords.length).toBe(1);
    //clear and check the group is empty
    scope.clearPasswords(scope.passwordGroups[0]);
    expect(scope.passwordGroups[0].passwords.length).toBe(0);
  });
  it('Clearing All', function () {
    //add additional group and check it's added
    scope.addGroup();
    expect(scope.passwordGroups.length).toBe(2);
    //clear all and check we are left with a single default group
    scope.clearAll()
    expect(scope.passwordGroups.length).toBe(1);
  });
  it('Import', function () {
    var importFile='U2FsdGVkX19QslFy2hCZFTHmcrC3BRngA6lkD0f2ft1dMetgOm98UbWfuJaUkKEwPUITWBrcGQoE7oybM7Praq7z4FbuYZiQpJswzt4pu6fls26h6l7wjh7MsL7rr4VytKF8qPCVy6Ium/b3jfy8g4MwAgB8KnF8RPfdptxyr1bhNxiyIqzZXQSxy0SQtQ62mhEvlCcs0yJAYTIHwAX5YCE3JBgklNqqrsRKDkErD6PyJu6cNZDur3BVBejePJvAy29EeAc6LjOHlfyRVgD4AZbFCQzOtIpoJpQVbZZuHiY=';
    scope.importFile(importFile);    
    expect(scope.passwordGroups.length).toBe(2);
  });


});
