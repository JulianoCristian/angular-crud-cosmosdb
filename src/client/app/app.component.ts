import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="btn-group" dropdown>
  <button dropdownToggle type="button" class="btn btn-primary dropdown-toggle">
    Button dropdown <span class="caret"></span>
  </button>
  <ul *dropdownMenu class="dropdown-menu" role="menu">
    <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
    <li class="divider dropdown-divider"></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
    </li>
  </ul>
</div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
