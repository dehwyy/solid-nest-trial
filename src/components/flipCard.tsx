import { createMemo, createSignal, Match, Show, Switch } from "solid-js"

const FlipCard = () => {
  const flipCards = createMemo(() => [
    { id: 1, face: "教室", backface: "classroom" },
    { id: 2, face: "自転車", backface: "bicycle" },
  ])
  // I should use "createStore rather than createMemo
  // in case to make to arrays for failed and succeed cards
  const [currentCardIndex, setCurrentCardIndex] = createSignal(0)
  const [isStarted, setStarted] = createSignal(false)
  const [isBackfaceVisible, setBackfaceVisible] = createSignal(false)
  return (
    <div class="w-full h-36 px-36 pt-32">
      <div class="h-72 text-xl text-center flex flex-col items-center text-3xl">
        {isStarted() ? (
          <>
            <span class="text-sky-800 underline decoration-pink-500">Are you ready?</span>
            <button onClick={() => setStarted(true)} class="mt-8 text-2xl py-2 px-6 rounded-md bg-pink-400">
              Let's start
            </button>
          </>
        ) : (
          <>
            <span onClick={() => setBackfaceVisible(true)}>{flipCards()[currentCardIndex()].face}</span>
            <Show when={isBackfaceVisible()} keyed={true}>
              <span class="mt-2">{flipCards()[currentCardIndex()].backface}</span>
              <div class="flex gap-3 mt-8">
                <button
                  onClick={() => {
                    setBackfaceVisible(false)
                    setCurrentCardIndex(prev => prev + 1)
                  }}
                  class="py-2 px-4 rounded-md bg-pink-400 w-40 text-xl">
                  Retry
                </button>
                <button
                  onClick={() => {
                    setBackfaceVisible(false)
                    if (flipCards().length - currentCardIndex() - 1) {
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
          </>
        )}
      </div>
    </div>
  )
}

export default FlipCard
