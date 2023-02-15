import * as Sentry from "@sentry/remix"
import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async () => {

  // try {
  //   Sentry.captureException(new Error("test error"))

  // } catch(err) {
  //   Sentry.captureException(err)
  // }

  return null;
}

export default function Home() {
  return (
    <div>
      TEST
    </div>
  )
}
