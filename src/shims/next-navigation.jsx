export function usePathname() {
  return window.location.pathname;
}

export function useRouter() {
  return {
    push: (url) => { window.location.href = url; },
    replace: (url) => { window.location.replace(url); },
    back: () => { window.history.back(); },
  };
}

export function useSearchParams() {
  return new URLSearchParams(window.location.search);
}
