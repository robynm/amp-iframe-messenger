const domain = document.getElementById('domain');
chrome.storage.sync.get('messageDomain', data => {
  domain.innerText = data.messageDomain;
})
