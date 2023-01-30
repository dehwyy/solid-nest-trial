import {createMemo, For} from "solid-js";
import {useNavigate} from "@solidjs/router";

const Cards = () => {
    const cards = createMemo(() => [
        {id:1, cards: 11, theme: "日本の町", japanese: true},
        {id:2, cards: 7, theme: "english adverbs"},
    ])
    const navigate = useNavigate()
    return (
        <div class="flex flex-col gap-4">
            <For each={cards()}>
                {card => (
                    <div class={`h-24 flex items-center rounded bg-white p-6 text-2xl ${card.japanese && "font-japanese"}`}>
                        {card.theme}&nbsp;-&nbsp;
                        {card.cards}
                        <button onClick={() => navigate(`${card.id}`)} class="ml-auto font-poppins py-2 px-6 text-xl rounded-md bg-pink-400">Go</button>
                    </div>
                )}
            </For>
        </div>
    );
};

export default Cards;