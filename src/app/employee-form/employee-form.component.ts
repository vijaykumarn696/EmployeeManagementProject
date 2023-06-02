import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent {
  employee: Employee = {
    employeeId: '',
    employeeName: '',
    email: '',
    phoneNo:''
  };

  constructor(private http: HttpClient,private snackBar: MatSnackBar,private router: Router) {}
   submitForm(): void {
     const url = environment.apiUrl+'/DynamicTemplate/SaveEmployeeDetails?filePath=C%3A%5CUsers%5CAL09393%5COneDrive%20-%20Elevance%20Health%5CEmployeeDetails.xlsx'; // Replace with your actual API endpoint

    this.http.post(url, this.employee).subscribe(
      (response) => {
        this.snackBar.open('Employee saved successfully', 'Close', {
          duration: 5000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
        });
        console.log('Employee saved successfully:', response);
        this.router.navigateByUrl('/', { replaceUrl: true });

        // Perform any additional actions or navigate to another page
      },
      (error) => {
        console.error('Error saving employee:', error);
      }
    );

  }
}
