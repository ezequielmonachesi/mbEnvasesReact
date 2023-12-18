export const goToTheTop = () => {
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    unlisten();
  };