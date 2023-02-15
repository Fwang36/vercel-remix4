import * as Sentry from "@sentry/remix"
import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async () => {

  Sentry.captureException(new Error("test error"))
  return null;
}

export default function Home() {
  return (
    <div>
      TEST
    </div>
  )
}