<script lang="ts">
	import { Github, LinkedIn } from '$lib/components/icons';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

{#snippet paragraph(str: string)}
	<p class="text-sm leading-6 font-medium [&:not(:first-child)]:mt-2">{str}</p>
{/snippet}

<div class="flex h-screen items-center justify-center">
	<Card.Root class="max-w-lg">
		<Card.Header>
			<Card.Title>Geoffrey Belcher</Card.Title>
			<Card.Description>Software developer living in Toronto.</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="flex flex-col gap-2">
				{@render paragraph('I build software in SvelteKit, Rust & IOS.')}
				{@render paragraph('Open to work, but want an in-person role in Toronto.')}
			</div>
		</Card.Content>

		<Card.Footer class="flex items-center justify-end gap-2">
			<a class={buttonVariants({ variant: 'ghost' })} href="mailto:geoffreybelcher@icloud.com"
				>Email</a
			>
			<LinkedIn />
			<Github />
		</Card.Footer>
	</Card.Root>
</div>
