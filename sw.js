// static/sw.js
const BLOCKED_URLS = [
  'cdnstatic.tencentcs.com/edgeone',
];

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  const isBlocked = BLOCKED_URLS.some(pattern => url.includes(pattern));
  
  if (isBlocked) {
    // 返回空响应，阻止脚本加载
    event.respondWith(
      new Response('', {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' }
      })
    );
  }
});