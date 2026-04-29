import { Theme } from '../types/theme.enum';

export const themeState = $state({
	current: Theme.Light as string
});
