import * as React from 'react';
import styles from './IceCreamWebPart.module.scss';
import { IIceCreamComponentProps } from './IIceCreamComponentProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IIceCreamComponentState } from './IIceCreamComponentState';
import { IceCream } from '../iceCreamProviders/IceCream';

export default class IceCreamComponent extends React.Component<IIceCreamComponentProps, IIceCreamComponentState> {


  constructor(props: IIceCreamComponentProps) {
    super(props);

    this.state = {
      iceCreamFlavoursList: [],
      selectedIceCream: null,
      hasBoughtIceCream: false
    };
  }

  public componentDidMount(): void {

    // Retrieve the ice cream types.
    this.props.iceCreamProvider.getAll().then((result: Array<IceCream>) => {

      // Update the iceCreamFlavoursList.
      this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {

        prevState.iceCreamFlavoursList = result;

        return prevState;
      });
    });
  }

  public render(): React.ReactElement<IIceCreamComponentProps> {
    return (
      <div className={styles.IceCreamWebPart}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">{this.props.title}</span>
              <p className="ms-font-l ms-fontColor-white">Ice cream flavours list.</p>
              <ul id="iceCreamFlavoursList">
              {
                this.state.iceCreamFlavoursList.map((item, index) => {

                    return <li key={index} data-id={item.id}>
                            
                              <button className={styles.button} 
                                 onClick={this.selectHandler.bind(this, item)} >
                                 Select
                              </button>

                              <span> {item.flavour}</span>

                           </li>;
                })
              }
              </ul>
              <p>Selected flavour:</p>
              {this.state.selectedIceCream && 

                <div>
                  
                  <p id="selectedFlavour">{this.state.selectedIceCream.flavour}</p>
                  
                  <button className={styles.button} id="buyButton"
                     onClick={this.buyHandler.bind(this, this.state.selectedIceCream.id)}>
                     Buy it!
                  </button>

                </div>
              }

              {this.state.hasBoughtIceCream && <p>Success!</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  private selectHandler(iceCream: IceCream): void {
    
    this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {
      prevState.selectedIceCream = iceCream;
      prevState.hasBoughtIceCream = false;
      return prevState;
    });

  }

  public buyHandler(id: number): void {
    
    this.props.iceCreamProvider.buy(id).then(result => {

      this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {
        prevState.hasBoughtIceCream = true;
        return prevState;
      });

    });
  }
}
