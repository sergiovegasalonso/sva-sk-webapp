# pending
CORREGIR ERROR CON LOS BORDES
0. arquitectura escalable GeorgeBYTES +ATOMIC DESING
1. create agents and copilot intructions...
2. /home/zegio/projects/high-performance-web/sva-sk-webapp/src/shared/components/molecules/app-options/AppOptions.svelte.spec.ts revisar y ordenar, también **mocks**
3. Revisar Drawer, Header, LocaleButton, ThemeButton and ToggleDrawerButton
4. limpiar lib
5. Crear home chula
6. Plugin accesibilidad????
7. Añadir todos los strings a paraglide
8. Login :)
9. feature flags system
10. environment configuration in front
11. dsa lab
12. nalanda lab
13. tanstack query
14. websockets experiment
15. d3.js experiment
16. zod???
17. estandarizar forma de funcionar: página que obtiene datos y luego los pasa a los organims, atoms, molecules.
18. Estudiar atomic desing

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
