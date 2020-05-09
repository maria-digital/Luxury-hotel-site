function changeNav() {
   var header = document.getElementById('header'); 
   var headerClassLists = header.classList; 
   if(headerClassLists.contains('header_mobile')){ 
       headerClassLists.remove('header_mobile'); 
   } else { 
       headerClassLists.add('header_mobile'); 
   }
}


