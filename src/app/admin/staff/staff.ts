import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.html',
  styleUrl: './staff.css',
})
export class Staff {
   signIns = 42;
  latenessCount = 3;
  deductions = 1500;

  signInHistory = [
    { date: '2025-10-01', timeIn: '7:58 AM', status: 'Present' },
    { date: '2025-10-02', timeIn: '8:15 AM', status: 'Late' },
    { date: '2025-10-03', timeIn: '7:45 AM', status: 'Present' },
  ];

  staffList = [
    { name: 'Jane Doe', id: 'STF001', department: 'HR', email: 'jane.doe@company.com' },
    { name: 'John Smith', id: 'STF002', department: 'IT', email: 'john.smith@company.com' },
    { name: 'Sarah Brown', id: 'STF003', department: 'Finance', email: 'sarah.brown@company.com' },
  ];

  getDay(date: string): string {
    const d = new Date(date);
    return d.getDate().toString().padStart(2, '0');
  }

  getMonth(date: string): string {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[d.getMonth()];
  }

  formatDate(date: string): string {
    const d = new Date(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

}
