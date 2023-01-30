import { createMemo, createSignal, For } from "solid-js"
import { useNavigate } from "@solidjs/router"
import { createStore, produce } from "solid-js/store"

const Cards = () => {
  const inputStyle = `-translate-y-32 transition-transform text-sky-800 text-2xl text-2xl w-96 bg-transparent border-0 border-b-2 border-pink-400 focus:ring-0 focus:border-fuchsia-500 pb-0.5`
  const [cards, setCards] = createStore({
    cards: [
      { id: 1, cards: 11, theme: "日本の町", japanese: true },
      { id: 2, cards: 7, theme: "english adverbs" },
    ],
  })
  const navigate = useNavigate()
  const [createCardStore, setCreateCardStore] = createStore({
    isCreatingCard: false,
    theme: "",
  })
  return (
    <div class="flex flex-col gap-4">
      <form
        class="flex flex-col items-center gap-4 pb-4"
        onSubmit={e => {
          e.preventDefault()
          if (createCardStore.isCreatingCard) {
            setCards(
              produce(state => {
                state.cards.push({ id: 1 + (cards.cards.at(-1)?.id || 0), cards: 0, theme: createCardStore.theme, japanese: false })
              })
            )
          }
          setCreateCardStore("isCreatingCard", prev => !prev)
        }}>
        <input value={createCardStore.theme} onInput={e => setCreateCardStore("theme", (e.target as HTMLInputElement).value)} name="theme" placeholder="theme" type="text" style={{ transform: createCardStore.isCreatingCard ? "translateY(0)" : "" }} class={inputStyle} />
        <button class="rounded px-4 py-2 bg-pink-600 text-white">{createCardStore.isCreatingCard ? "Create" : "Create Card"}</button>
      </form>
      <For each={cards.cards}>
        {card => (
          <div class={`h-24 flex items-center rounded bg-white p-6 text-2xl ${card.japanese && "font-japanese"}`}>
            {card.theme}&nbsp;-&nbsp;
            {card.cards}
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
