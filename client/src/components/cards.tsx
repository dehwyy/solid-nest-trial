import { createResource, For } from "solid-js"
import { useNavigate } from "@solidjs/router"
import { createStore, produce } from "solid-js/store"
import GetRequest from "~/req/get"
import PostRequest from "~/req/post"

const Cards = () => {
  const inputStyle = `-translate-y-32 transition-transform text-sky-800 text-2xl text-2xl w-96 bg-transparent border-0 border-b-2 border-pink-400 focus:ring-0 focus:border-fuchsia-500 pb-0.5`
  const [cards, setCards] = createStore<ICardsCreateStore>({
    cards: [],
    isCreatingCard: false,
    theme: "",
  })
  const navigate = useNavigate()
  createResource(async () => {
    const cards = await GetRequest.getAllCollections()
    setCards("cards", cards)
  })
  return (
    <div class="flex flex-col gap-4">
      <form
        class="flex flex-col items-center gap-4 pb-4"
        onSubmit={async e => {
          e.preventDefault()
          if (cards.isCreatingCard) {
            const res = await PostRequest.createCollection(cards.theme)
            setCards(
              produce(state => {
                state.cards.unshift({ ...res, cards: [] })
              })
            )
          }
          setCards("isCreatingCard", prev => !prev)
        }}>
        <input value={cards.theme} onInput={e => setCards("theme", (e.target as HTMLInputElement).value)} name="theme" placeholder="theme" type="text" style={{ transform: cards.isCreatingCard ? "translateY(0)" : "" }} class={inputStyle} />
        <button class="rounded px-4 py-2 bg-pink-600 text-white">{cards.isCreatingCard ? "Create" : "Create Card"}</button>
      </form>
      <For each={cards.cards}>
        {card => (
          <div class={`h-24 flex items-center rounded bg-white p-6 text-2xl ${card.japanese && "font-japanese"}`}>
            {card.theme}&nbsp;-&nbsp;
            {card.cards.length}
            <button onClick={() => navigate(`${card.id}`)} class="ml-auto font-poppins py-2 px-6 text-xl rounded-md bg-pink-400">
              Go
            </button>
          </div>
        )}
      </For>
    </div>
  )
}

export default Cards
