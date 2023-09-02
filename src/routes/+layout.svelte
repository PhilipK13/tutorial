<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//Skeleton UI
	import {AppBar, AppShell} from '@skeletonlabs/skeleton';

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<h3 class="text-left"> Codeshare</h3>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
