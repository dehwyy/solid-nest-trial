import { Routes, Route, useNavigate, A } from "@solidjs/router"
import Cards from "~/components/cards"
import Home from "~/components/Home"
import flipCard from "./components/flipCard"
import Kolyaska from "~/svg/disabled-toilet-svgrepo-com.svg"
import HomePageIcon from "~/svg/grid-view-svgrepo-com.svg"
import Github from "~/svg/github.svg"
import { createMemo, For } from "solid-js"

const AppWrapper = () => {
  const navigationButton = createMemo(() => [
    { id: 1, href: "/", location: "Home", icon: <Kolyaska /> },
    { id: 2, href: "/cards", location: "Cards", icon: <HomePageIcon /> },
  ])
  const navigate = useNavigate()
  return (
    <>
      <nav class="items-center px-12 w-full h-20 fixed top-0 right-0 left-0 bg-white flex text-2xl">
        <For each={navigationButton()}>
          {navigation => (
            <div onClick={() => navigate(navigation.href)} class="p-2 pt-3 transition-all duration-200 rounded mr-12 cursor-pointer flex gap-1 hover:bg-sky-300">
              {navigation.location}
              {navigation.icon}
            </div>
          )}
        </For>
      </nav>
      <div class=" bg pt-12 flex-grow">
        <div class="m-auto" style={{ width: "700px" }}>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="cards">
              <Route path="/" component={Cards} />
              <Route path="/:cardId" component={flipCard} />
            </Route>
          </Routes>
        </div>
      </div>
      <footer class="py-2 text-2xl flex justify-center">
        <span>Creator:&nbsp;</span>
        <Github />
        <A target="_blank" href="https://github.com/dehwyy" class="text-pink-600 underline decoration-pink-600">
          &nbsp;dehwyy
        </A>
      </footer>
    </>
  )
}

export default AppWrapper
