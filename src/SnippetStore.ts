import { writable,get } from "svelte/store";

// SnippetStore

//Code Snippeet

// Title, Code, Language, Favourite
export const snippetStore = writable<CodeSnippet[]>([]);

// addSnippet
export const addSnippet = (input: CodeSnippetInput) => {
    let snippets = get(snippetStore);

    snippetStore.update(() => {
        return [ { ...input, favourite: false } , ...snippets]
    })
}

// deleteSnipet
export const deleteSnippet = (index: number) => {
    let snippets = get(snippetStore);
    console.log(snippets, index);
    snippets.splice(index,1);
    console.log(snippets, index);
    snippetStore.update(() => {
        return snippets
    })
}

// toggleFavourite
export const toggleFavourite = (index: number) => {
    let snippets = get(snippetStore);
    
    snippetStore.update(() => {
        return snippets.map((snippet, sIndex) => {
            if(sIndex === index) {
                return {...snippet, favourite: !snippet.favourite}
            }
            return snippet
        })
    })
}