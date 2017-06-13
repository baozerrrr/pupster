'use strict';

app.controller('SettingCtrl', function(Auth, $ionicPopup) {
    var sett = this;

    sett.maxAge = window.localStorage.getItem('maxAge') || 25;
    sett.male = JSON.parse(window.localStorage.getItem('male'));
    sett.male = sett.male === null ? true : sett.male;
    sett.female = JSON.parse(window.localStorage.getItem('female'));
    sett.female = sett.female === null ? true : sett.female;


    sett.changeMaxAge = function() {
    	window.localStorage.setItem('maxAge', sett.maxAge);
    };

    sett.selectMale = function() {
    	window.localStorage.setItem('male', sett.male);

    };

    sett.selectFemale = function() {
    	window.localStorage.setItem('female', sett.female);

    };

    sett.logout = function() {
    	$ionicPopup.confirm({
    		title: 'Logout',
    		template: 'Are you sure you want to logout?'
    	}).then(function(res) {
    		if (res){
    			Auth.logout();
    		}
    	});
    };
});