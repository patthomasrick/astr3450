/* menu, no jquery */
function mobileMenu() {
   if (document.getElementById('searchform').style.display == 'none' || document.getElementById('searchform').style.display == '') {
     document.getElementById('searchform').style.display='flex';
     document.getElementById('menu-toggle').className = 'menu-toggle open';
   }
   else {
     document.getElementById('searchform').style.display='none';
     document.getElementById('menu-toggle').className = 'menu-toggle';
   }
}

function addHeaderBlock(header_text) {
   document.getElementById("department_name").style.display='block';
   document.getElementById("department_name").innerHTML = header_text;
}

function openToggleID(IDname){
   if (document.getElementById(IDname).className == '') {
      document.getElementById(IDname).className = 'open';
   }
   else {
      document.getElementById(IDname).className = '';
   }
}
