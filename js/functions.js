function check(input) {
  if (input.value != document.getElementById('email').value) {
    input.setCustomValidity('The two email addresses must match.');
  } else {
    // input is valid -- reset the error message
    input.setCustomValidity('');
  }
}

function setCookie(cname, cvalue, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
    return "";
}

function display( pageName )
{
  pages = document.getElementsByClassName('page');
  for( var i=0;i<pages.length;i++)
  {
    if( pages[i].id !=pageName )
    {
      pages[i].style.display='none';
    }
    else
    {
      pages[i].style.display='block';
      //setCookie("lastpage","map",5);
      //console.log(getCookie("lastpage"))
    }
  }
}

function autoResize()
{
  console.log("toto")
    newheight = document.getElementById('googleform').contentWindow.document.getElementsByTagName('body')[0].scrollHeight;

  console.log(newheight)

    document.getElementById(id).height=(newheight) + "px";
}

// Remove ref to keep page at top, if javascript is not available.
function rmHref()
{
  bala = document.getElementById("nav").getElementsByClassName("goto");
  //bala = document.getElementsByTagName("a");
  for( var i=0;i<bala.length;i++)
  {
    bala[i].setAttribute("href","#");
  }
}

// remove href in link to avoid top margin.

display("home");
rmHref();
