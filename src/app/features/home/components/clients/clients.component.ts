import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'Hayaa', logo: 'assets/images/clients/hayaacola.jpg' },
    { name: 'Alieaz Resources', logo: 'assets/images/clients/ch15.jpg' },
    { name: 'WPEDO', logo: 'assets/images/clients/north-avenue.jpg' },
    { name: 'Rosachy', logo: 'assets/images/clients/rosachy.jpg' },
    { name: 'Artisan Energy', logo: 'assets/images/clients/wpedo.jpg' }
  ];
}
