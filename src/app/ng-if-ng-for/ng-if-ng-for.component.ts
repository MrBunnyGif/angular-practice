import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-if-ng-for',
	templateUrl: './ng-if-ng-for.component.html',
	styleUrls: ['./ng-if-ng-for.component.scss']
})
export class NgIfNgForComponent implements OnInit {
	arrNumeros = ['pedro', 'de', 'souza', 'botega'];
	constructor() { }

	ngOnInit(): void {
	}

}
