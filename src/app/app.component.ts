import { Component } from '@angular/core';
const lodash = require('lodash');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x_activeTab = { title: null, name: null };
  x_tabs = [
    { title: 'Top Intents', name: 'topIntents' },
    { title: 'Last Intents', name: 'lastIntents' }
  ];

  x_message = {
    attachment: {
      attachments: {
        topIntents: [
          { title: 'question1', count: 1 },
          { title: 'question2', count: 2 },
          { title: 'question3', count: 3 },
          { title: 'question4', count: 4 },
          { title: 'question5', count: 5 }
        ],
        lastIntents: [
          { title: 'How do I buy something?', count: 1 },
          { title: 'How do I make my first purchase?', count: 2 },
          { title: 'how do I get started?', count: 3 },
          { title: 'how can you help?', count: 4 },
          { title: 'What can you help me with?', count: 5 }
        ]
      }
    }
  };

  x_isTabActive(tab: object): boolean {
    return lodash.isEqual(this.x_activeTab, tab);
  }

  x_getTabClass(tab: object): string {
    const RET_VAL = this.x_isTabActive(tab)
      ? 'nav-link w-50 intents-tabs-active'
      : 'nav-link w-50 intents-tabs';
    return RET_VAL;
  }

  x_onTabClick(event: any): void {
    const BUTTON_TITLE = event.target.title;
    const BUTTON_NAME = event.target.name;
    if (this.x_activeTab.title === BUTTON_TITLE) {
      this.x_activeTab.title = null;
      this.x_activeTab.name = null;
    } else {
      this.x_activeTab.title = BUTTON_TITLE;
      this.x_activeTab.name = BUTTON_NAME;
    }
  }

  x_onButtonClick(message: string): void {
    const RET_VAL = {
      type: 'user',
      text: message,
      timestamp: new Date().getTime()
    };
  }
}
