# pending

1. Crear home chula
2. Añadir test unitarios por compoenente, por ruta y test e2e
3. Plugin accesibilidad????
4. Añadir todos los strings a paraglide

```js
// routes/page.svelte.spec.ts
import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		console.log(heading);
		await expect.element(heading).toBeInTheDocument();
	});
});
``;
```
