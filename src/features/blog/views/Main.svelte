<script>
	import FeatureMainViewTemplate from '$shared/ui/templates/FeatureMainViewTemplate.svelte';
	import Posts from '../components/Posts.svelte';
</script>

<FeatureMainViewTemplate title="Blog" subtitle="A basic blog example using Tanstack Query.">
	{#snippet content()}
		<Posts />
	{/snippet}
</FeatureMainViewTemplate>
