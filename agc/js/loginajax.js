<!--
var BrowseWidth = 0;
var BrowseHeight = 0;

function browser_dimensions() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) // If Internet Explorer, return version number
    {
        if (document.documentElement && document.documentElement.clientHeight) {
            BrowseWidth = document.documentElement.clientWidth;
        } else if (document.body) {
            BrowseWidth = document.body.clientWidth;
        }
        if (document.documentElement && document.documentElement.clientHeight) {
            BrowseHeight = document.documentElement.clientHeight;
        }
        else if (document.body) {
            BrowseHeight = document.body.clientHeight;
        }
    } else {
        BrowseWidth = window.innerWidth;
        BrowseHeight = window.innerHeight;
    }

    document.vicidial_form.JS_browser_width.value = BrowseWidth;
    document.vicidial_form.JS_browser_height.value = BrowseHeight;
}

// ################################################################################
// Send Request for allowable campaigns to populate the campaigns pull-down
function login_allowable_campaigns() {
    //	alert(document.vicidial_form.JS_browser_width.value + '|' + BrowseWidth + '|' + document.vicidial_form.JS_browser_height.value + '|' + BrowseHeight);
    var xmlhttp = false;
    /*@cc_on @*/
    /*@if (@_jscript_version >= 5)
      // JScript gives us Conditional compilation, we can cope with old IE versions.
      // and security blocked creation of the objects.
       try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {
        try {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
         xmlhttp = false;
        }
       }
      @end @*/
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    if (xmlhttp) {
        logincampaign_query = "&user=" + document.vicidial_form.VD_login.value + "&pass=" + document.vicidial_form.VD_pass.value + "&ACTION=LogiNCamPaigns&format=html";
        xmlhttp.open('POST', 'vdc_db_query.php');
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xmlhttp.send(logincampaign_query);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                Nactiveext = null;
                Nactiveext = xmlhttp.responseText;
                //	alert(logincampaign_query);
                //	alert(xmlhttp.responseText);
                document.getElementById("LogiNCamPaigns").innerHTML = Nactiveext;
                document.getElementById("LogiNReseT").innerHTML = "<input type=\"button\" value=\"Refresh Campaign List\" onclick=\"login_allowable_campaigns()\" />";
                document.getElementById("VD_campaign").focus();
            }
        }
        delete xmlhttp;
    }
}

// -->
