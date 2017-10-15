import * as React from 'react';
import styles from './ReactTestingPart3.module.scss';
import { IReactTestingPart3Props } from './IReactTestingPart3Props';
import { IReactTestingPart3State } from './IReactTestingPart3State';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ReactTestingPart3 extends React.Component<IReactTestingPart3Props, IReactTestingPart3State> {

  constructor(props:IReactTestingPart3Props) {
    super(props);

    this.state = {
      greetings: "Welcome to SharePoint!"
    };
  }

  public render(): React.ReactElement<IReactTestingPart3Props> {
    return (
      <div className={styles.reactTestingPart3}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">{this.state.greetings}</span>
              <p className="ms-font-l ms-fontColor-white">Customize SharePoint experiences using Web Parts.</p>
              <p className="ms-font-l ms-fontColor-white">{escape(this.props.description)}</p>
              <a className={styles.button} onClick={this._buttonHandler.bind(this)}
>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }


  private _buttonHandler(): void {
    
    this.setState((prevState: IReactTestingPart3State, props: IReactTestingPart3Props): IReactTestingPart3State => {
      prevState.greetings = "Welcome to SharePoint Patterns and Practices (PnP)!";
      return prevState;
    });

  }
}
