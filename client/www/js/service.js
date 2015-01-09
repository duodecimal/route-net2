angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('DomainsService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var wishs = {};

  return {
    set: function(params){
      wishs=params;
    },
    all: function() {
      return wishs;
    },
    get: function() {
      // Simple index lookup
      return wishs;
    }
  }
})
.factory('LocationService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var locations = [{Location:{latitude:7.010568199999999, longitude: 100.48500}
  },{Location:{latitude:7.005368199999999, longitude:100.49500}

  }]

  return {
    getAll: function() {
      // Simple index lookup
      return locations;
    }
  }
});