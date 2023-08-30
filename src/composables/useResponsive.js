import { useBreakpoints } from '@vueuse/core';
import { ref } from 'vue';

export default function useResponsive() {
    const breakpoints = useBreakpoints({
        mobile: 425,
        tablet: 768,
        desktop: 1366
    });
    const responsiveMobile = breakpoints.smallerOrEqual('mobile');
    const responsiveDesktop = breakpoints.greaterOrEqual('desktop');
    const showForm = ref(true);

    return { responsiveMobile, responsiveDesktop, showForm };
}