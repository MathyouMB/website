var o=document.cookie.split(";");for(var a=1;a<=o.length;a++){var t=o[a-1],d=t.split("=");document.cookie=d[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}window.caches.keys().then(function(e){for(let n of e)window.caches.delete(n)});const i=await window.indexedDB.databases();i.forEach(e=>{window.indexedDB.deleteDatabase(e.name)});window.localStorage.clear();window.sessionStorage.clear();