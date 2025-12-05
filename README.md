# pending

0. dejar todos los tests ok
1. Crear home chula
2. Plugin accesibilidad????
3. Añadir todos los strings a paraglide
4. Login :)
5. feature flags system
6. environment configuration in front
7. dsa lab
8. nalanda lab
9. tanstack query
10. websockets experiment
11. d3.js experiment
12. zod???
13. estandarizar forma de funcionar: página que obtiene datos y luego los pasa a los organims, atoms, molecules.
14. Estudiar atomic desing

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
