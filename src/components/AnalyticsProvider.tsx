import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import posthog from "../lib/posthog";

type Props = {
  children: React.ReactNode;
};

export default function AnalyticsProvider({ children }: Props) {
  const location = useLocation();

  useEffect(() => {
    posthog.capture("$pageview");
  }, [location]);

  return <>{children}</>;
}