import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PreviewImage } from 'projects/preview-gallery/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'libs';

  showImgs(e: Array<PreviewImage>): void {
    console.log(e)
  }
}
