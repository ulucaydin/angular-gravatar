(function(angular){
  'use strict';

  angular.module('ngGravatar', [])
  .directive('gravatar', function(){

    function _getHashedEmail(email){
      return md5(email);
    }

    function _buildQuerystring(params){
      var ret = [];
      for (var d in params)
         ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(params[d]));
      return '?' + ret.join("&");
    }

    return {
      template: '<img class="{{ ::class }}" src="{{ ::gravatarUrl }}" alt="{{ ::alt }}">',
      restrict: 'E',
      scope: {
        email: '@',
        'default': '@',
        rating: '@',
        size: '@'
      },
      controller: function($scope){
        $scope.alt = $scope.alt || 'gravatar';
        $scope.class = $scope.class || 'gravatar';

        var gravatarParams = {};

        if( angular.isDefined($scope.default))
          gravatarParams.d = $scope.default;

        if( angular.isDefined($scope.rating))
          gravatarParams.rating = $scope.rating;

        if( angular.isDefined($scope.size))
          gravatarParams.s = $scope.size;

        var protocol = window.location.protocol=="https:"?"https:":"http:"

        $scope.gravatarUrl = protocol + '//www.gravatar.com/avatar/' + _getHashedEmail($scope.email);

        if(!angular.equals({}, gravatarParams))
          $scope.gravatarUrl += _buildQuerystring(gravatarParams);
      }
    }
  });

})(angular);
