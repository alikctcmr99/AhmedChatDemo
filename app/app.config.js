  angular
  .module('app')
  .run(['Pubnub','currentUser', function(Pubnub, currentUser) {

    Pubnub.init({
          publish_key: 'pub-c-ed33086c-d27d-4b0d-bcf0-cf1b71725cf3',
          subscribe_key: 'sub-c-0ef38832-eab6-11e6-a85c-0619f8945a4f',
          uuid: currentUser,
          origin: 'pubsub.pubnub.com',
          ssl: true
      });

  }])
  .run(['ngNotify', function(ngNotify) {

      ngNotify.config({
          theme: 'paster',
          position: 'top',
          duration: 250
      });

  }]);