import { ref, onMounted } from 'vue';

const isDark = ref(false);

export function useTheme() {

    const applyTheme = (dark) => {
        isDark.value = dark;
        if (typeof document !== 'undefined') {
            if (dark) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    };

    const toggleTheme = () => {
        const newVal = !isDark.value;
        applyTheme(newVal);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('theme', newVal ? 'dark' : 'light');
        }
    };

    const initTheme = () => {
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) {
                applyTheme(saved === 'dark');
                return;
            }
        }
        // Auto-detect system preference on first visit
        if (typeof window !== 'undefined' && window.matchMedia) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark);
        }
    };

    return {
        isDark,
        toggleTheme,
        initTheme,
    };
}
