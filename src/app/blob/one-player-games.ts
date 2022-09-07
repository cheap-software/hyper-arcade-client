import { Game } from "../models/game";

const OnePlayerGames:Game[] = [
    {
        name: "Classic Snake",
        subtitle: "Eat, grow, but don't crash!",
        imgref: "../../../assets/images/gif-5.gif",
        description: "The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult.",
        players: 1
    }, 
    {
        name: "Brick Ball",
        subtitle: "Destroy them all!",
        imgref: "../../../assets/images/gif-6.gif",
        description: "In this game, the player moves a PADDLE from side-to-side to hit a BALL. The game's objective is to eliminate all of the BRICKS at the top of the screen by hitting them with the BALL. But, if the ball hits the bottom ENCLOSURE, the player loses and the game ends! To win the game, all the BRICKS must be eliminated.",
        players: 1
    }, 
    {
        name: "Wordle",
        subtitle: "Find the hidden word!",
        imgref: "../../../assets/images/gif-7.gif",
        description: "The goal is to guess a mystery five-letter word in as few tries as possible. After each guess, the color of the tiles will change to show how close your guess was to the word, the directions state. The simple premise is reminiscent of the color-guessing game",
        players: 1
    }, 
    {
        name: "Flappy Bird",
        subtitle: "Jump, jump",
        imgref: "../../../assets/images/gif-8.gif",
        description: "The player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.",
        players: 1
    }, 
    {
        name: "Tetris",
        subtitle: "Set it on its place",
        imgref: "../../../assets/images/gif-9.gif",
        description: "The player must organize a series of differently shaped blocks in order to form horizontal lines with no gaps. Form a complete line and the blocks disappear. Allow the blocks to stack up to the top of the screen and it's game over.",
        players: 1
    }, 
    {
        name: "Robber Raccoon",
        subtitle: "Steal their food",
        imgref: "../../../assets/images/gif-10.gif",
        description: "The player must steal household garbage without being seen by people. Make sure to only move when you are not seen!",
        players: 1
    }
]

export default OnePlayerGames;