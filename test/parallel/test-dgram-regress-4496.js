'use strict';
// Remove this test once we support sending strings.

require('../common');
const assert = require('assert');
const dgram = require('dgram');

// Should throw but not crash.
const socket = dgram.createSocket('udp4');
assert.throws(function() { socket.send(true, 0, 1, 1, 'host'); }, TypeError);
assert.throws(function() { socket.sendto(5, 0, 1, 1, 'host'); }, TypeError);
socket.close();
