import image from "../../public/preview.jpg"
const Home = () => {
    return (
        <div class="flex flex-col items-center font-medium underline text-sky-800 decoration-pink-500">
            <div class="text-4xl py-4 text">
                Flashcards Light Edition with SolidJS
            </div>
            <div class="w-96 h-96 cursor-pointer">
                <a target="_blank" href="https://github.com/dehwyy">
                    <img src={image} alt="preview" class="w-full h-full" style={{"object-fit": "cover"}}/>
                </a>
            </div>
        </div>
    );
};

export default Home;