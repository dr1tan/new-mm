import { useRouter } from 'vue-router';

export const useScrollToSection = (): {
  scrollToSection: (sectionId: string) => void;
} => {
  const router = useRouter();

  const scrollToSection = (sectionId: string): void => {
    const headerHeight: number = window.innerWidth >= 750 ? 100 : 32;

    const scrollToPosition = (): void => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY; // Use scrollY instead of pageYOffset
        const offsetPosition = sectionPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };

    if (router.currentRoute.value.path !== '/') {
      router.push('/').then(() => {
        setTimeout(() => {
          scrollToPosition();
        }, 300);
      });
    } else {
      scrollToPosition();
    }
  };

  return { scrollToSection };
};
