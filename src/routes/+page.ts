import type { PageLoad } from "./$types";

export const load = (() => {

    return {
        snippets: [ 
			{
				title: "Logging in TS",
				language: "typescript",
				code: `console.log("Hello World")`,
				favourite: false
			},
			{
				title: "Test Code Snippet",
				language: "html",
				code: "<h1>Sup Brother</h1>",
				favourite: false
			} 
		]
    }

}) satisfies PageLoad; 