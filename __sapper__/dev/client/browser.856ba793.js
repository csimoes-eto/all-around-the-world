function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var browser = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
});
var browser_1 = browser.Headers;
var browser_2 = browser.Request;
var browser_3 = browser.Response;

export { browser as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci44NTZiYTc5My5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmlmIChnbG9iYWwuZmV0Y2gpIHtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZ2xvYmFsLmZldGNoLmJpbmQoZ2xvYmFsKTtcbn1cblxuZXhwb3J0cy5IZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5leHBvcnRzLlJlcXVlc3QgPSBnbG9iYWwuUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxJQUFJLFNBQVMsR0FBRyxZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFO0FBQ2xELENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLE1BQU0sQ0FBQyxFQUFFO0FBQ3RELENBQUMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUUsRUFBRSxPQUFPLE1BQU0sQ0FBQyxFQUFFO0FBQ3RELENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25ELEVBQUM7QUFDRDtBQUNBLElBQUksTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0FBQ3pCO0FBQ0EsY0FBYyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDbEIsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUNEO0FBQ0EsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDakMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFFBQVE7Ozs7Ozs7OyJ9
