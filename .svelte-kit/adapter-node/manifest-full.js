export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.GlLH9UAu.js",app:"_app/immutable/entry/app.C0RlzlYb.js",imports:["_app/immutable/entry/start.GlLH9UAu.js","_app/immutable/chunks/DJiE7LMq.js","_app/immutable/chunks/BTXrJkxh.js","_app/immutable/chunks/ByZMWdq-.js","_app/immutable/chunks/C3BLZL5R.js","_app/immutable/entry/app.C0RlzlYb.js","_app/immutable/chunks/BTXrJkxh.js","_app/immutable/chunks/1vzc476d.js","_app/immutable/chunks/Dz7pCa6H.js","_app/immutable/chunks/C3BLZL5R.js","_app/immutable/chunks/9tYRfuwp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/auth/login",
				pattern: /^\/api\/auth\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/auth/login/_server.js'))
			},
			{
				id: "/api/auth/logout",
				pattern: /^\/api\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/auth/logout/_server.js'))
			},
			{
				id: "/api/auth/me",
				pattern: /^\/api\/auth\/me\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/auth/me/_server.js'))
			},
			{
				id: "/api/auth/register",
				pattern: /^\/api\/auth\/register\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/auth/register/_server.js'))
			},
			{
				id: "/api/recipes",
				pattern: /^\/api\/recipes\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_server.js'))
			},
			{
				id: "/api/recipes/[id]",
				pattern: /^\/api\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_id_/_server.js'))
			},
			{
				id: "/api/recipes/[id]/comments",
				pattern: /^\/api\/recipes\/([^/]+?)\/comments\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_id_/comments/_server.js'))
			},
			{
				id: "/api/recipes/[id]/ratings",
				pattern: /^\/api\/recipes\/([^/]+?)\/ratings\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/recipes/_id_/ratings/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
