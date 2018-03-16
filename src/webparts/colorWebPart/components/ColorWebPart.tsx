import * as React from 'react';
import styles from './ColorWebPart.module.scss';
import { IColorWebPartProps } from './IColorWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IColorWebPartState } from './IColorWebPartState';

export default class ColorWebPart extends React.Component<IColorWebPartProps, IColorWebPartState> {

  constructor() {
    super();
    this.state = { color: 'green' };
  }

  public render(): React.ReactElement<IColorWebPartProps> {
    return (
      <div style={{width:400, height:400, backgroundColor: this.state.color}}>
        <button id='changeColorButton' onClick={this.changeColorHandler.bind(this)}>Get color</button>
      </div>
    );
  }

  private async changeColorHandler(): Promise<void> {

    const json = await this.props.colorProvider.getColor();

    this.setState((state) => {
      state.color = json.color;
      return state;
    });
  }
}
