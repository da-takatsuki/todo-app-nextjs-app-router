import ServerSideRendering from "@/features/extra/ServerSideRendering";
import { Suspense } from "react";
import Loading from "./loading";

function SSR() {
  return (
    <Suspense fallback={<Loading />}>
      <ServerSideRendering />
    </Suspense>
  );
}

export default SSR;
