import StaticSiteGenerator from "@/features/extra/StaticSiteGenerator";
import { Suspense } from "react";
import Loading from "./loading";

function SSG() {
  return (
    <Suspense fallback={<Loading />}>
      <StaticSiteGenerator />
    </Suspense>
  );
}

export default SSG;
