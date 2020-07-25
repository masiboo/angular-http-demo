import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'my-http';
	public employees = [];
	public errorMsg;

	constructor(private _employeeService: EmployeeService) {

	}

	ngOnInit() {
		this._employeeService.getEmployee()
			.subscribe(data => this.employees = data);
	}
}
