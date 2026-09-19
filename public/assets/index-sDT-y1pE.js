// Fallback for browsers with cached index.html
console.log("Stale bundle requested. Refreshing cache to load latest version...");
if (!sessionStorage.getItem('aptis_cache_refresh')) {
  sessionStorage.setItem('aptis_cache_refresh', 'true');
  window.location.reload(true);
} else {
  window.location.href = window.location.pathname.replace(/\/assets\/.*$/, '/') + '#/';
}
