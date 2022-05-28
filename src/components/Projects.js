// Import Assets
import test from '../assets/test.png'
import portfoliosite from '../assets/portfolio.png'
import token from '../assets/token.png'
import todo from '../assets/todolist.png'
import game from '../assets/jumpingGame.png'
import cache from '../assets/cache.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">


                <div className="projects__card">
                    <h3>Personal Token</h3>
                    <img src={token} alt="Compound Landing Page" />
                    <p>A personal ERC20 based token.
                        It is build using Solidity. It is hosted in uniswap for crypto exchange.
                    </p>

                    <a href="https://app.uniswap.org/#/swap?chain=kovan" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Deepjyoti-Sarmah/My-Blockchain-Token" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Todo List</h3>
                    <img src={todo} alt="Aave Landing Page" />
                    <p>A daily todo list build from scratch using just HTML, CSS and Javascript.
                        It stores all the data into your local buffer storages.
                    </p>

                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    <a href="https://github.com/Deepjyoti-Sarmah/To-Do-List" target="_blank" className="button">Code</a>
                </div>


                <div className="projects__card">
                    <h3>Web3 game</h3>
                    <img src={game} alt="Aave Landing Page" />
                    <p>A Web3 running game made from scratch using HTML, CSS , Javascript, Solidity and Ethers.js.
                        In this game you can play and win NFTs and can claim them and use those in other places.
                    </p>

                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    <a href="https://github.com/Deepjyoti-Sarmah/Jumping-Blockchain-Game" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Cache</h3>
                    <img src={cache} alt="Aave Landing Page" />
                    <p>A LRU type cache build from scratch in Golang.
                        It works on the priciple of least recently used. It was created with the help of concepts like LinkedList, Hash and Queues.
                    </p>

                    {/* <a href="https://aave.com/" target="_blank" className="button">Site</a> */}
                    <a href="https://github.com/Deepjyoti-Sarmah/Jumping-Blockchain-Game" target="_blank" className="button">Code</a>
                </div>




            </div>
        </section>
    );
}

export default Projects;