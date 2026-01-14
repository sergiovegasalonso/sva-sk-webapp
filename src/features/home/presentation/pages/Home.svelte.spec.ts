import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Home from './Home.svelte';

const renderHome = (props = {}) => {
	return render(Home, {
		...props
	});
};

describe('/Home.svelte', () => {
	it('should render only one h1 element', async () => {
		const { container } = renderHome();
		const h1s = container.querySelectorAll('h1');
		expect(h1s.length).toBe(1);
	});
});
