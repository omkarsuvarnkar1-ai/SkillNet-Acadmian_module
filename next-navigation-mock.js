export function useRouter() {
  return {
    push: (url) => {
      console.log("Navigating to:", url);
      window.location.href = url;
    },
    replace: (url) => {
      window.location.href = url;
    },
    back: () => window.history.back(),
    forward: () => window.history.forward(),
    refresh: () => window.location.reload(),
  };
}
