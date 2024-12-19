import { Component } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent {
	pickCardAnimation = false;
	currentCard?: string = '';
	game!: Game; // Non-null assertion
	cardsInStack?: number;

	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {
		this.newGame();
	}

	newGame() {
		this.game = new Game();
		this.cardsInStack = this.game.stack.length;
		console.log(this.game, this.cardsInStack);
		console.log(this.game.players);
	}

	takeCard() {
		if (!this.pickCardAnimation) {
			this.currentCard = this.game.stack.pop();
			console.log('New card: ', this.currentCard);
			console.log('Game is ', this.game.playedCards);
			this.pickCardAnimation = true;

			// this.cardsInStack = this.game.stack.length;
			console.log(this.cardsInStack);

			this.game.currentPlayer++;
			this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
			setTimeout(() => {
				if (this.currentCard) {
					this.game.playedCards.push(this.currentCard);
				}
				this.pickCardAnimation = false;
			}, 1750);
		}
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogAddPlayerComponent);

		dialogRef.afterClosed().subscribe((nameInput) => {
			this.game.players.push(nameInput);
		});
	}
}
