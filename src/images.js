import deathNoteImg from "../assets/death_note.jpg";
import mashleImg from "../assets/mashle.jpg";
import sevenDeadlySinsImg from "../assets/seven_deadly_sins.jpg";
import drStoneImg from "../assets/dr_stone.jpg";
import onePieceImg from "../assets/one_piece.jpg";
import pokemonImg from "../assets/pokemon.jpg";

class Image {
  constructor(title, source) {
    this.title = title;
    this.source = source;
  }
}

export const images = [
  new Image("Death Note", deathNoteImg),
  new Image("Mashle", mashleImg),
  new Image("Seven Deadly Sins", sevenDeadlySinsImg),
  new Image("Dr. Stone", drStoneImg),
  new Image("One Piece", onePieceImg),
  new Image("Pokémon", pokemonImg),
];
