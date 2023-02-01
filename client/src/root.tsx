// @refresh reload
import { useLocation, Body, Head, Html, Meta, Scripts, Title, Link } from "solid-start"
import AppWrapper from "./AppWrapper"
import "./index.css"

export default function Root() {
  return (
    <Html lang="en" style="min-height:100vh;height:max-content;min-width:300px">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=700" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Noto+Sans+JP&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Body style={{ "border-top": "5rem solid white" }} class="flex flex-col h-full overflow-x-hidden min-h-screen bg-gradient-to-b from-sky-400 bg-no-repeat">
        <AppWrapper />
        <Scripts />
      </Body>
    </Html>
  )
}
