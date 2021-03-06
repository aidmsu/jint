// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype property "getUTCMinutes" has { DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.21/S15.9.5.21_A1_T2.js
 * @description Checking absence of DontDelete attribute
 */

if (delete Date.prototype.getUTCMinutes  === false) {
  $ERROR('#1: The Date.prototype.getUTCMinutes property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCMinutes')) {
  $FAIL('#2: The Date.prototype.getUTCMinutes property has not the attributes DontDelete');
}


