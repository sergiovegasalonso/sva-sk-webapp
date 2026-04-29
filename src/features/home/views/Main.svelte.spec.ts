import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import HomeMainView from './Main.svelte';

const renderHome = (props = {}) => {
	return render(HomeMainView, {
		...props
	});
};

describe('Home feature: HomeMainView -> $features/home/views/Main.svelte', () => {
	it('should render only one h1 element', async () => {
		const { container } = renderHome();
		const h1s = container.querySelectorAll('h1');
		expect(h1s.length).toBe(1);
	});
});
