# pending

0. dejar todos los tests ok, cambiar todos los renderPage :S
1. /home/zegio/projects/high-performance-web/sva-sk-webapp/src/shared/components/molecules/app-options/AppOptions.svelte.spec.ts revisar y ordenar, también **mocks**
2. Revisar Drawer, Header, LocaleButton, ThemeButton and ToggleDrawerButton
3. limpiar lib
4. Crear home chula
5. Plugin accesibilidad????
6. Añadir todos los strings a paraglide
7. Login :)
8. feature flags system
9. environment configuration in front
10. dsa lab
11. nalanda lab
12. tanstack query
13. websockets experiment
14. d3.js experiment
15. zod???
16. estandarizar forma de funcionar: página que obtiene datos y luego los pasa a los organims, atoms, molecules.
17. Estudiar atomic desing

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
