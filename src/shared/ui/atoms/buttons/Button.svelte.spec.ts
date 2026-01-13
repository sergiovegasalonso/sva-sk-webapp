import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Button from './Button.svelte';

const DEFAULT_CLASSES = [
	'flex',
	'cursor-pointer',
	'items-center',
	'border-2',
	'bg-l',
	'px-4',
	'py-2',
	'hover:bg-lh',
	'focus:bg-lh',
	'dark:bg-d',
	'dark:hover:bg-dh',
	'dark:focus:bg-dh'
];

const renderButton = (props = {}) => {
	return render(Button, {
		ariaLabel: 'Button',
		children: () => 'Child content',
		...props
	});
};

describe('/Button.svelte', () => {
	it('should render only one button element', async () => {
		const { container } = renderButton();
		const buttons = container.querySelectorAll('button');
		expect(buttons.length).toBe(1);
	});

	it('should render button with default classes', async () => {
		const { container } = renderButton();
		const button = container.querySelector('button');
		expect(button?.classList.toString()).toBe(`${DEFAULT_CLASSES.join(' ')} `);
	});

	it('should render button with default and custom classes', async () => {
		const { container } = renderButton({ class: 'z-1000' });
		const button = container.querySelector('button');
		expect(button?.classList.toString()).toBe(`${DEFAULT_CLASSES.join(' ')} z-1000`);
	});

	it('should render button without content', async () => {
		const { container } = renderButton();
		const button = container.querySelector('button');
		expect(button?.textContent).toBe('');
	});

	it('should render button with custom aria-label attribute', async () => {
		const { container } = renderButton();
		const button = container.querySelector('button');
		expect(button?.getAttribute('aria-label')).toBe('Button');
	});

	it('should call onclick handler when clicked', async () => {
		let clicked = false;
		const { container } = renderButton({
			onclick: () => {
				clicked = true;
			}
		});

		const button = container.querySelector('button');
		button?.click();

		expect(clicked).toBe(true);
	});
});
