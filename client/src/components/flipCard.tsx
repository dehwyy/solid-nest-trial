import { createSignal, Match, Show, Switch } from "solid-js"
import { createStore, produce } from "solid-js/store"
import Pencil from "~/svg/pencil.svg"
import Cross from "~/svg/cross.svg"
import { useNavigate } from "@solidjs/router"

const FlipCard = () => {
  const [flipCards, setFlipCards] = createStore({
    cards: [
      { id: 1, face: "教室", backface: "classroom" },
      { id: 2, face: "自転車", backface: "bicycle" },
    ],
  })
  const [createCardStore, setCreateCardStore] = createStore({
    isCreatingCard: false,
    cardFace: "",
    cardBackface: "",
  })
  const inputStyle = `-translate-y-96 transition-transform text-sky-800 text-2xl text-2xl w-96 bg-transparent border-0 border-b-2 border-pink-400 focus:ring-0 focus:border-fuchsia-500 pb-0.5`
  // I should use "createStore rather than createMemo
  // in case to make to arrays for failed and succeed cards
  const navigate = useNavigate()
  const [currentCardIndex, setCurrentCardIndex] = createSignal(0)
  const [isStarted, setStarted] = createSignal(false)
  const [isBackfaceVisible, setBackfaceVisible] = createSignal(false)

  return (
    <div class="w-full h-36 px-36 pt-32">
      <div class="relative h-72 text-xl text-center flex flex-col items-center text-3xl">
        <div
          class="absolute -top-24 left-12 cursor-pointer"
          onClick={() => {
            if (createCardStore.isCreatingCard) {
              setCreateCardStore("isCreatingCard", false)
            } else {
              navigate("/cards")
            }
          }}>
          <Cross />
        </div>
        <div class="absolute -top-24 right-16 cursor-pointer" onClick={() => setCreateCardStore("isCreatingCard", prev => !prev)}>
          <Pencil />
        </div>
        <form
          class="flex flex-col items-center gap-4 pb-4"
          onSubmit={e => {
            e.preventDefault()
            setFlipCards(
              produce(state => {
                state.cards.push({ id: 1 + (state.cards.at(-1)?.id || 0), backface: createCardStore.cardBackface, face: createCardStore.cardFace })
              })
            )
            setCreateCardStore(state => ({ cardFace: "", cardBackface: "" }))
            // I should do floating window that shows what did user just make
          }}>
          <input value={createCardStore.cardFace} onInput={e => setCreateCardStore("cardFace", (e.target as HTMLInputElement).value)} name="face" placeholder="face" type="text" style={{ transform: createCardStore.isCreatingCard ? "translateY(0)" : "" }} class={inputStyle} />
          <input value={createCardStore.cardBackface} onInput={e => setCreateCardStore("cardBackface", (e.target as HTMLInputElement).value)} name="backface" placeholder="backface" type="text" style={{ transform: createCardStore.isCreatingCard ? "translateY(0)" : "" }} class={inputStyle} />
          <Show when={createCardStore.isCreatingCard} keyed={true}>
            <button class="rounded px-4 py-2 bg-pink-600 text-white text-2xl">Create</button>
          </Show>
        </form>
        {!createCardStore.isCreatingCard && (
          <Switch>
            <Match when={!isStarted()} keyed={true}>
              <span class="text-sky-800 underline decoration-pink-500">Are you ready?</span>
              <button onClick={() => setStarted(true)} class="mt-8 text-2xl py-2 px-6 rounded-md bg-pink-400">
                Let's start
              </button>
            </Match>
            <Match when={isStarted()} keyed={true}>
              <span onClick={() => setBackfaceVisible(true)}>{flipCards.cards[currentCardIndex()].face}</span>
              <Show when={isBackfaceVisible()} keyed={true}>
                <span class="mt-2">{flipCards.cards[currentCardIndex()].backface}</span>
                <div class="flex gap-3 mt-8">
                  <button
                    onClick={() => {
                      setBackfaceVisible(false)
                      if (flipCards.cards.length - currentCardIndex() - 1) {
                        setCurrentCardIndex(prev => prev + 1)
                      } else {
                        setCurrentCardIndex(0)
                      }
                    }}
                    class="py-2 px-4 rounded-md bg-pink-400 w-40 text-xl">
                    Retry
                  </button>
                  <button
                    onClick={() => {
                      setBackfaceVisible(false)
                      if (flipCards.cards.length - currentCardIndex() - 1) {
                        setCurrentCardIndex(prev => prev + 1)
                      } else {
                        setCurrentCardIndex(0)
                      }
                    }}
                    class="py-2 px-4 rounded-md bg-pink-400 w-40 text-xl">
                    Alright
                  </button>
                </div>
              </Show>
            </Match>
          </Switch>
        )}
      </div>
    </div>
  )
}

export default FlipCard
