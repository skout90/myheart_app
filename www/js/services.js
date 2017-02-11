angular.module('starter.services', [])

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