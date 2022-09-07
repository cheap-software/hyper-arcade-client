import { Game } from "../models/game";

const MultiplayerGames:Game[] = [
    {
        name: "Classic Snake",
        subtitle: "Eat, grow, but don't crash!",
        imgref: "../../../assets/images/gif-5.gif",
        description: "The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult.",
        players: 4
    }, 
    {
        name: "Tic Tac Toe",
        subtitle: "Accuracy is everything",
        imgref: "../../../assets/images/gif-12.gif",
        description: "Is a pencil-and-paper game for two players, O and X, who take turns marking the spaces in a 3 x 3 grid. The player who succeeds in placing three respective marks in a horizontal, vertical or diagonal row wins the game.",
        players: 2
    }, 
    {
        name: "Robber Raccoon",
        subtitle: "Steal their food",
        imgref: "../../../assets/images/gif-10.gif",
        description: "The player must steal household garbage without being seen by people. Make sure to only move when you are not seen!",
        players: 4
    }
]

export default MultiplayerGames;