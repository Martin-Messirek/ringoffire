import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartScreenComponent } from './start-screen.component';

describe('StartScreenComponent', () => {
	let component: StartScreenComponent;
	let fixture: ComponentFixture<StartScreenComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [StartScreenComponent],
		});
		fixture = TestBed.createComponent(StartScreenComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
