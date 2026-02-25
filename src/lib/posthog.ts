import posthog from "posthog-js";

const key = import.meta.env.VITE_POSTHOG_KEY;
const host = import.meta.env.VITE_POSTHOG_HOST;

if (key) {
  posthog.init(key, {
    api_host: host,
    capture_pageview: false, // we control pageviews manually
    persistence: "localStorage",
    autocapture: true,
  });
}

export default posthog;