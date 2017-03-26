angular.module('starter.services', [])

.factory('ajax', ['$http', function ($http) {
    return {
        get: function(url) {
	        return $http.get(url);
	    },
	    post: function(url, param) {
	        $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	        return $http.post(url, param);
	    }
	  };
}])

.factory('Schedules', ['$http', 'ajax', function ($http, ajax) {
	var urlBase = BASE_URL + '/schedule';
    var Schedules = {};

    Schedules.all = function ($scope) {
    	var result = ajax.post(urlBase + '/selectScheduleList.do', '');
    	result.success(function(data, status, headers, config) {
    		$scope.schedules = data;
    	});
    	result.error(function(data, status, headers, config) {
        	console.log(status);
        });
    };

    return Schedules;
}])

.factory('Posts', function () {
    var posts = [{
        id: 0,
        name: '진돗개',
        title: '배고프다',
        text: '안녕'
    }];
    return {
        all: function () {
            return posts;
        },
        get: function (postId) {
            for (var i = 0; i < posts.length; i++) {
                if (posts[i].id === parseInt(postId)) {
                    return posts[i];
                }
            }
            return null;
        }
    }
});

//	var schedules;
//	return {
//		all: function () {
//			
//			return schedules;
//		},
//		get: function (postId) {
//			for (var i = 0; i < schedules.length; i++) {
//				if (schedules[i].id === parseInt(postId)) {
//					return posts[i];
//				}
//			}
//			return null;
//		}
//	}
//});