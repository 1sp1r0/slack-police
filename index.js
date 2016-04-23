'use strict';

var CLIENT                = require('@slack/client'),
    RTM                   = CLIENT.RtmClient,
    CLIENT_EVENTS         = CLIENT.CLIENT_EVENTS,
    RTM_CLIENT_EVENTS     = CLIENT_EVENTS.RTM,
    RTM_EVENTS            = CLIENT.RTM_EVENTS;

var TEST_TOKEN = 'xoxp-10174793360-10174916500-37149626276-016d6ac868';

var rtm = new RTM(TEST_TOKEN, {
  loglevel: 'debug'
});

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData) {
  console.log('Auth event');
  console.log(rtmStartData);
});

rtm.on(RTM_EVENTS.MESSAGE, function (msg) {
  console.log('message events');
  console.log(msg);
});


rtm.on(RTM_CLIENT_EVENTS.RTM_CONNECTION_OPENED, function () {
  console.log('Connection event');
});

rtm.start();
