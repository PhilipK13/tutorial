<script lang="ts">
	import CodeSnippetCard from "../CodeSnippetCard.svelte";
	import { addSnippet, snippetStore } from "../SnippetStore";
	import type { PageData } from "./$types";
	export let data: PageData;

	let formData : CodeSnippetInput = {
		title: "",
		language:"html",
		code:""
	}

	// createSnippet(input : CodeSnippetInput)
	snippetStore.set(data.snippets)
	// SnippetStore -> a local writable that allows us to store code snippets
	// create / delete snippets
	// favourite snippets
	// +page.ts to initially load i some example snippets (mocking a database request)
</script>


<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create a code snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<form class="form" on:submit={() => addSnippet(formData)}>
				<label class="label">
					<span>Snippet Title</span>
					<input class="input" type="text" placeholder="Enter title here..." bind:value={formData.title}/> 
				</label>
				<label class="label">
					<span>Programming</span>
					<select class="select" bind:value={formData.language}>
						<option value="html">HTML</option>
						<option value="css">CSS</option>
						<option value="typescript">TypeScript</option>
					</select>
				</label>
				<label class="label">
					<span>Code Snippet</span>
					<textarea class="textarea" rows="4" placeholder="Enter your code snippet here..." bind:value={formData.code}/>
				</label>
				<div class="flex justify-center">
					<button type="submit" class="btn btn-md variant-filled-success self-center">Submit</button>
				</div>
			</form>
			
			<div class="text-center py-6">
				<h2>My Code Snippets</h2>
			</div>
			{#each $snippetStore as snippet, index}
				<CodeSnippetCard snippet={snippet} index={index}/>
			{/each}
		</div>
	</div>
</div>