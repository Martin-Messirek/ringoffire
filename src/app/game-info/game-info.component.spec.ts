import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoComponent } from './game-info.component';

describe('GameInfoComponent', () => {
	let component: GameInfoComponent;
	let fixture: ComponentFixture<GameInfoComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [GameInfoComponent],
		});
		fixture = TestBed.createComponent(GameInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
