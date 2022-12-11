/// <reference types="vite/client" />

declare module "*.vue" {
	import type { DefineComponent } from "vue";

	// const component: DefineComponent<{}, {}, any>;

	const component: DefineComponent<string, unknown>;

	export default component;
}
