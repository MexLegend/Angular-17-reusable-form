import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-control-error',
  standalone: true,
  imports: [],
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  textError = '';

  @Input() set error(value: string) {
    if (value !== this.textError) {
      this.textError = value;
      this._cdr.detectChanges();
    }
  }

  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
}
