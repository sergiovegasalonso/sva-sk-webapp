<script lang="ts">
	import Heading1 from '$shared/ui/atoms/headings/Heading1.svelte';
	import Heading2 from '$shared/ui/atoms/headings/Heading2.svelte';

	let { title, subtitle, content } = $props();
</script>

<Heading1 text={title} />
<Heading2 text={subtitle} />
<section class="w-full">
	{@render content()}
</section>
