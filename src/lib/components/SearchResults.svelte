<script>
	import { untrack } from 'svelte';
	import { page } from '$app/state';
	import { ui } from '#lib/i18n.js';
	import { search, queryFromSearch } from '#lib/search.js';

	// Locale-specific search results for the query in location.search, read in
	// the browser only. The index fetched is always the one for `slug`.
	let { slug } = $props();

	let query = $state('');
	let status = $state('idle'); // idle | loading | ready | unavailable
	/** @type {any[]} */
	let results = $state([]);

	async function run() {
		query = queryFromSearch(page.url.search);
		results = [];
		if (!query) {
			status = 'idle';
			return;
		}
		status = 'loading';
		let index;
		try {
			const response = await fetch(`/search/${slug}.json`);
			if (!response.ok) throw new Error(String(response.status));
			index = await response.json();
		} catch {
			status = 'unavailable';
			return;
		}
		results = search(index, query, slug);
		status = 'ready';
	}

	$effect(() => {
		// Runs on mount and whenever the URL's query or locale changes.
		page.url.search;
		slug;
		untrack(run);
	});

	const t = $derived(ui(slug));
	const resultsParts = $derived(t.search.results.split('{query}'));
	const resultsBefore = $derived(resultsParts[0].replace('{count}', String(results.length)));
	const resultsAfter = $derived((resultsParts[1] ?? '').replace('{count}', String(results.length)));
</script>

{#if status === 'loading'}
	<p aria-live="polite">{t.search.loading}</p>
{:else if status === 'unavailable'}
	<p>{t.search.unavailable}</p>
{:else if status === 'ready'}
	<p aria-live="polite">{resultsBefore}<q>{query}</q>{resultsAfter}</p>
	<ol class="results">
		{#each results as result (result.id)}
			<li>
				<a href={result.url}>{result.title}</a>
				<small>{result.section}</small>
				<p>{result.snippet}</p>
			</li>
		{/each}
	</ol>
{/if}
