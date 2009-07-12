// ==UserScript==
// @name          FogBugz Useful Quick Input
// @namespace     http://greasemonkey.randomfoo.net/
// @description   Makes the quick input more useful
// @include       http://*.fogbugz.com/* http://*.fogbugz.com/default*
// ==/UserScript==

var UQI = {
  me: GetPersonID(),

  init: function() {
    // Replace newCase_0 w/ my own Elements
    document.getElementById('idNewCase_0').getElementsByTagName('th')[1].innerHTML = '<input id="usefulquickinput" style="width:75%; margin-top: 4px" /> <button id="usefulquickinput_help">?</button>';
    document.getElementById('usefulquickinput').addEventListener('keypress', UQI.process, true);
    document.getElementById('usefulquickinput_help').addEventListener('click', UQI.help, true);
    // TODO: Initialize queryParams.params from NewCaseRows.sQueryParamsFull
  },

  process: function(e) {
    if(e.keyCode == KeyEvent.DOM_VK_RETURN) {
      var commands = document.getElementById('usefulquickinput').value.split(";;");

      // Last overrides first
      commands.reverse();

      for(var i=0; i<commands.length; i++) {
        commands[i].strip();

        if(commands[i].toLowerCase().startsWith('due:')) {
          alert('due! ' + commands[i] );
        } else if(commands[i].toLowerCase().startsWith('est:')) {
        } else if(commands[i].toLowerCase().startsWith('for:')) {
          // split on :
          // shift
          // join the remainder back
          // join().trim().toLowerCase()
          // search in DB
          // this.Person
          // s.FullName, s.Email // @
          // DB.Person.length


        } else if(commands[i].toLowerCase().startsWith('status:')) {
        } else if(commands[i].toLowerCase().startsWith('cat:') || commands[i].toLowerCase().startsWith('category:')) {
        } else if(commands[i].toLowerCase().startsWith('area:')) {
        } else if(commands[i].toLowerCase().startsWith('to:')) {
        } else if(commands[i].toLowerCase().startsWith('p:' || commands[i].toLowerCase().startsWith('prio:') || commands[i].toLowerCase().startsWith('priority:')) {
        } else {
          NewCaseRows.hash[0].elTitle = commands[i];
        }

      }


      // Take apart and replace as needed
      UQI.queryParams.updateParams();

      // Set NewCaseRows.hash[0].elTitle to my input
      NewCaseRows.hash[0].submit()

      e.stopPropagation();
      e.preventDefault();
    }
  },

  help: function(e) {
    var help  = 'Commands\n';
    var help += '========\n';
    var help += '* Enter \n';
    var help += '* Split commands with two semicolons ;;\n';

    alert(help);
                                                                                                        e.stopPropagation();
    e.preventDefault();
  },

  queryParams: {
    params: new Object,

    updateParams: function() {
      var query = "";
      for(var param in queryParam.params) {
        query += param + "=" + encodeURIComponent(queryParam.params[param]) + "&";
      }
      NewCaseRows.sQueryParamsFull = query;
    },

    storeParams: function(str) {
      // TODO: Take apart & put into queryParam.param
    },
  },

}
UQI.init();




sQueryParamsFull

hrsEst=20m


DB.Area.select() where ixProject

g_sFilterParams"ixProject=14"
ixProject=14 from hash as well...


})()
