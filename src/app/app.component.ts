import {Component, Renderer2} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  navigate: any;
  constructor(private renderer: Renderer2) {
    this.sideMenu();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  iconMoon = true;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  modeText ='Lichte mode';
  sideMenu() {
    this.navigate =
      [
        {
          title : 'Logout',
          url   : '/apps',
          icon  : 'log-out'
        },


      ];
  }
  toggleDarkMode = () => {
    this.changeNameMode();
    if (this.darkMode) {
      this.renderer.addClass(document.body,'dark');
      console.log('enable darkmode');
    } else {
      this.renderer.removeClass(document.body,'dark');
      console.log('enable lightmode');
    }
  };
  toggleIcon = (): void => {
    this.darkMode = !this.darkMode;
    this.toggleDarkMode();
    this.iconMoon = !this.iconMoon;


  };
  changeNameMode= () => {
    if (this.darkMode) {
      this.modeText = 'Donkere mode';
    } else {
      this.modeText = 'Lichte mode';
    }
  };
}
