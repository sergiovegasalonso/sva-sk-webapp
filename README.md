# pending

entender, paso a paso las Action, actualizar las versiones de los de las acciones predefinidos, optimizar la instalación de los navegadores de Play, Right Play, Right Play Right Play Right y hacer bien el despliegue a producción de netlify,crean otro workflow que on push en ina rama de feature desplegar en entorno de dev
1. arquitectura escalable GeorgeBYTES +ATOMIC DESING explain with a readme in every folder
2. Estudiar atomic desing => resolver el tema de los templates
3. config copilot instructions and mcps aunque no los use, remove lib
4. /home/zegio/projects/high-performance-web/sva-sk-webapp/src/shared/components/molecules/app-options/AppOptions.svelte.spec.ts revisar y ordenar, también **mocks** 3. Revisar Drawer, Header, LocaleButton, ThemeButton and ToggleDrawerButton 4. limpiar lib 5. Crear home chula 6. Plugin accesibilidad???? 7. Añadir todos los strings a paraglide 8. Login :) 9. feature flags system 10. environment configuration in front 11. dsa lab 12. nalanda lab with rxjs and tanstack query 13. websockets experiment 14. d3.js experiment 15. zod??? 16. estandarizar forma de funcionar: página que obtiene datos y luego los pasa a los organims, atoms, molecules.
   change favicon if a tasks if working example

- add sonar

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
