(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1593186149406;

	const files = [
		"service-worker-index.html",
		"favicon.png",
		"global.css",
		"logo-192.png",
		"logo-512.png",
		"manifest.json"
	];

	const shell = [
		"client/client.c5b882d4.js",
		"client/index.fa29c08e.js",
		"client/browser.100d9776.js",
		"client/[country].c26238a7.js",
		"client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener("install", (event) => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then((cache) => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      })
	  );
	});

	self.addEventListener("activate", (event) => {
	  event.waitUntil(
	    caches.keys().then(async (keys) => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    })
	  );
	});

	self.addEventListener("fetch", (event) => {
	  if (event.request.method !== "GET" || event.request.headers.has("range"))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  if (!url.protocol.startsWith("http")) return;

	  // ignore dev server requests
	  if (
	    url.hostname === self.location.hostname &&
	    url.port !== self.location.port
	  )
	    return;

	  // always serve static files and bundler-generated assets from cache
	  if (url.host === self.location.host && cached.has(url.pathname)) {
	    event.respondWith(caches.match(event.request));
	    return;
	  }

	  // for pages, you might want to serve a shell `service-worker-index.html` file,
	  // which Sapper has generated for you. It's not right for every
	  // app, but if it's right for yours then uncomment this section
	  /*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

	  if (event.request.cache === "only-if-cached") return;

	  // for everything else, try the network first, falling back to
	  // cache if the user is offline. (If the pages never change, you
	  // might prefer a cache-first approach to a network-first one.)
	  event.respondWith(
	    caches.open(`offline${timestamp}`).then(async (cache) => {
	      try {
	        const response = await fetch(event.request);
	        cache.put(event.request, response.clone());
	        return response;
	      } catch (err) {
	        const response = await cache.match(event.request);
	        if (response) return response;

	        throw err;
	      }
	    })
	  );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5MzE4NjE0OTQwNjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImdsb2JhbC5jc3NcIixcblx0XCJsb2dvLTE5Mi5wbmdcIixcblx0XCJsb2dvLTUxMi5wbmdcIixcblx0XCJtYW5pZmVzdC5qc29uXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LmM1Yjg4MmQ0LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmZhMjljMDhlLmpzXCIsXG5cdFwiY2xpZW50L2Jyb3dzZXIuMTAwZDk3NzYuanNcIixcblx0XCJjbGllbnQvW2NvdW50cnldLmMyNjIzOGE3LmpzXCIsXG5cdFwiY2xpZW50L3NhcHBlci1kZXYtY2xpZW50LjFlN2E0YTVlLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvKFteXFwvXSs/KVxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsLCByb3V0ZXMgfSBmcm9tIFwiQHNhcHBlci9zZXJ2aWNlLXdvcmtlclwiO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIChldmVudCkgPT4ge1xuICBldmVudC53YWl0VW50aWwoXG4gICAgY2FjaGVzXG4gICAgICAub3BlbihBU1NFVFMpXG4gICAgICAudGhlbigoY2FjaGUpID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNlbGYuc2tpcFdhaXRpbmcoKTtcbiAgICAgIH0pXG4gICk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKFwiYWN0aXZhdGVcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMgKGtleXMpID0+IHtcbiAgICAgIC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmNsaWVudHMuY2xhaW0oKTtcbiAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQucmVxdWVzdC5tZXRob2QgIT09IFwiR0VUXCIgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcyhcInJhbmdlXCIpKVxuICAgIHJldHVybjtcblxuICBjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcblxuICAvLyBkb24ndCB0cnkgdG8gaGFuZGxlIGUuZy4gZGF0YTogVVJJc1xuICBpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKFwiaHR0cFwiKSkgcmV0dXJuO1xuXG4gIC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG4gIGlmIChcbiAgICB1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiZcbiAgICB1cmwucG9ydCAhPT0gc2VsZi5sb2NhdGlvbi5wb3J0XG4gIClcbiAgICByZXR1cm47XG5cbiAgLy8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcbiAgaWYgKHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgY2FjaGVkLmhhcyh1cmwucGF0aG5hbWUpKSB7XG4gICAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXG4gIC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuICAvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cbiAgLypcblx0aWYgKHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCovXG5cbiAgaWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09IFwib25seS1pZi1jYWNoZWRcIikgcmV0dXJuO1xuXG4gIC8vIGZvciBldmVyeXRoaW5nIGVsc2UsIHRyeSB0aGUgbmV0d29yayBmaXJzdCwgZmFsbGluZyBiYWNrIHRvXG4gIC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3VcbiAgLy8gbWlnaHQgcHJlZmVyIGEgY2FjaGUtZmlyc3QgYXBwcm9hY2ggdG8gYSBuZXR3b3JrLWZpcnN0IG9uZS4pXG4gIGV2ZW50LnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YCkudGhlbihhc3luYyAoY2FjaGUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgICAgIGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG4gICAgICAgIGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xuXG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0NBQUE7Q0FDTyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFDdkM7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLGFBQWE7Q0FDZCxDQUFDLFlBQVk7Q0FDYixDQUFDLGNBQWM7Q0FDZixDQUFDLGNBQWM7Q0FDZixDQUFDLGVBQWU7Q0FDaEIsQ0FBQyxDQUFDO0FBRUY7Q0FDTyxNQUFNLEtBQUssR0FBRztDQUNyQixDQUFDLDJCQUEyQjtDQUM1QixDQUFDLDBCQUEwQjtDQUMzQixDQUFDLDRCQUE0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QVc7Q0FDbkIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUs7Q0FDN0QsTUFBTSxJQUFJO0NBQ1YsUUFBUSxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDcEQsUUFBUSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Q0FDbkQsUUFBUSxPQUFPLFFBQVEsQ0FBQztDQUN4QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUU7Q0FDcEIsUUFBUSxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzFELFFBQVEsSUFBSSxRQUFRLEVBQUUsT0FBTyxRQUFRLENBQUM7QUFDdEM7Q0FDQSxRQUFRLE1BQU0sR0FBRyxDQUFDO0NBQ2xCLE9BQU87Q0FDUCxLQUFLLENBQUM7Q0FDTixHQUFHLENBQUM7Q0FDSixDQUFDLENBQUM7Ozs7In0=
