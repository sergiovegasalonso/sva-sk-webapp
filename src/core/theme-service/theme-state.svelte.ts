import { Theme } from '$core/theme-service/types/theme.enum';

export const themeState = $state({
	current: Theme.Light as string
});
