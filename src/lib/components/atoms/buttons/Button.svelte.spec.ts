import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Button from './Button.svelte';

describe('/Button.svelte', () => {
	it('should render only one button element', async () => {
		const { container } = render(Button, {
			ariaLabel: 'Button',
			children: () => 'Child content'
		});
		const buttons = container.querySelectorAll('button');
		expect(buttons.length).toBe(1);
	});

	it('should render button with default classes', async () => {
		const { container } = render(Button, {
			ariaLabel: 'Button',
			children: () => 'Child content'
		});
		const button = container.querySelector('button');
		expect(button?.classList.toString()).toBe(
			'flex cursor-pointer items-center border-2 bg-l px-4 py-2 hover:bg-lh focus:bg-lh dark:bg-d dark:hover:bg-dh dark:focus:bg-dh '
		);
	});

	it('should render button with default + passed classes', async () => {
		const { container } = render(Button, {
			ariaLabel: 'Button',
			class: 'z-1000',
			children: () => 'Child content'
		});
		const button = container.querySelector('button');
		expect(button?.classList.toString()).toBe(
			'flex cursor-pointer items-center border-2 bg-l px-4 py-2 hover:bg-lh focus:bg-lh dark:bg-d dark:hover:bg-dh dark:focus:bg-dh z-1000'
		);
	});

	it('should render button without content', async () => {
		const { container } = render(Button, {
			ariaLabel: 'Button',
			children: () => 'Child content'
		});
		const button = container.querySelector('button');
		expect(button?.textContent).toBe('');
	});

	it('should render button with passed ariaLabel', async () => {
		const { container } = render(Button, {
			ariaLabel: 'Button',
			children: () => 'Child content'
		});
		const button = container.querySelector('button');
		expect(button?.getAttribute('aria-label')).toBe('Button');
	});

	it('should bubble click event to parent', async () => {
		let clicked = false;
		const { container } = render(Button, {
			ariaLabel: 'Button',
			children: () => 'Child content',
			onclick: () => {
				clicked = true;
			}
		});

		const button = container.querySelector('button');
		button?.click();

		expect(clicked).toBe(true);
	});
});
