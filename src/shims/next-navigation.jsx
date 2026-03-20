import { useLocation, useNavigate, useSearchParams as useRRSearchParams } from "react-router-dom";

export function usePathname() {
  const location = useLocation();
  return location.pathname;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (url) => navigate(url),
    replace: (url) => navigate(url, { replace: true }),
    back: () => navigate(-1),
  };
}

export function useSearchParams() {
  const [searchParams] = useRRSearchParams();
  return searchParams;
}
