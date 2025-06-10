import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',//*é obrigatorio e posso usar fora outro template
  styleUrl: './app.component.scss'//*não é obrigatorio ter no corpo
})
export class AppComponent {
  title = 'meu-primeiros-passos';
}
