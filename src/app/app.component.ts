import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  activeTab = 'none';
  tabs = [{ title: 'Top Intents' }, { title: 'Last Intents' }];

  message = {
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

  onTabClick(event: any): void {
    const BUTTON_TITLE = event.target.title;
    if (this.activeTab === BUTTON_TITLE) {
      this.activeTab = 'none';
    } else {
      this.activeTab = BUTTON_TITLE;
    }
    console.log('Tab clicked: ', BUTTON_TITLE);
  }

  onButtonClick(message: string): void {
    const RET_VAL = {
      type: 'user',
      text: message,
      timestamp: new Date().getTime()
    };
    console.log('Button clicked: ', RET_VAL);
  }
}
