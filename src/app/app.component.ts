import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  activeTab = 'None';

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

  onButtonClick(message: string): void {
    const RET_VAL = {
      type: 'user',
      text: message,
      timestamp: new Date().getTime()
    };
    this.activeTab = 'lastIntents';
    console.log('Button clicked: ', RET_VAL);
    //this.onTopLastSearchesItemClicked.emit(RET_VAL);
  }
}
