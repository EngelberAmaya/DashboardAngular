import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

   public currentFramework = computed(
     () => `Change Detection - ${this.frameworkAsSignal().name}`
   )

    public frameworkAsSignal = signal({
        name: 'Angular',
        release: 2024
    });

    public frameworkAsProperty = {
      name: 'Angular',
      release: 2024
    };

    constructor() {
      setTimeout(() => {
        //this.frameworkAsProperty.name = 'React';
        this.frameworkAsSignal.update(value => ({
          ...value,
          name: 'React'
        }))

        console.log('Hecho');
      }, 3000);
    }
}
