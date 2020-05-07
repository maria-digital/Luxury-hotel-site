function changeNav() {
   var header = document.getElementById('header'); 
   var headerClassLists = header.classList; 
   if(headerClassLists.contains('header__mobile')){ 
       headerClassLists.remove('header__mobile'); 
   } else { // в противном случае
       headerClassLists.add('header__mobile'); 
   }
}

