
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/api" | "/api/auth" | "/api/auth/login" | "/api/auth/logout" | "/api/auth/me" | "/api/auth/register" | "/api/recipes" | "/api/recipes/[id]" | "/api/recipes/[id]/comments" | "/api/recipes/[id]/ratings";
		RouteParams(): {
			"/api/recipes/[id]": { id: string };
			"/api/recipes/[id]/comments": { id: string };
			"/api/recipes/[id]/ratings": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/api": { id?: string };
			"/api/auth": Record<string, never>;
			"/api/auth/login": Record<string, never>;
			"/api/auth/logout": Record<string, never>;
			"/api/auth/me": Record<string, never>;
			"/api/auth/register": Record<string, never>;
			"/api/recipes": { id?: string };
			"/api/recipes/[id]": { id: string };
			"/api/recipes/[id]/comments": { id: string };
			"/api/recipes/[id]/ratings": { id: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/auth" | "/api/auth/" | "/api/auth/login" | "/api/auth/login/" | "/api/auth/logout" | "/api/auth/logout/" | "/api/auth/me" | "/api/auth/me/" | "/api/auth/register" | "/api/auth/register/" | "/api/recipes" | "/api/recipes/" | `/api/recipes/${string}` & {} | `/api/recipes/${string}/` & {} | `/api/recipes/${string}/comments` & {} | `/api/recipes/${string}/comments/` & {} | `/api/recipes/${string}/ratings` & {} | `/api/recipes/${string}/ratings/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.png" | string & {};
	}
}