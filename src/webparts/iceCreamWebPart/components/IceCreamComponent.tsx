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
      quantity: 1,
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
      <div className={`ms-bgColor-themeDark ms-fontColor-white ${styles.padding}`} id="iceCreamComponent">
        <span className="ms-font-xl ms-fontColor-white">{this.props.title}</span>
        <p className="ms-font-l ms-fontColor-white">Ice cream flavours list.</p>

        <ul id="iceCreamFlavoursList">
          {
            this.state.iceCreamFlavoursList.map((item, index) => {

              return <li key={index} data-id={item.id}>

                <button className={styles.button} onClick={this.selectHandler.bind(this, item)}>
                  Select
                </button>

                <span> {item.flavour}</span>

              </li>;
            })
          }
        </ul>

        {this.state.selectedIceCream &&

          <div>
            <input type="number" value={this.state.quantity} onChange={this.quantityChangeHandler.bind(this)}/>

            <button className={styles.button} id="buyButton" onClick={this.buyHandler.bind(this)}>
              Buy {this.state.selectedIceCream.flavour}
            </button>
          </div>
        }

        {this.state.hasBoughtIceCream && <p>Success!</p>}
      </div>
    );
  }

  public selectHandler(iceCream: IceCream): void {

    this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {
      prevState.selectedIceCream = iceCream;
      prevState.hasBoughtIceCream = false;
      return prevState;
    });
  }

  public buyHandler(id: number): void {
    
    if(this.isValid() == false) return;

    this.props.iceCreamProvider.buy(id).then(result => {

      this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {
        prevState.hasBoughtIceCream = true;
        return prevState;
      });
    });
  }

  public quantityChangeHandler(event: React.ChangeEvent<any>) {
    const inputValue = event.target.value
    console.log(inputValue);

    this.setState((prevState: IIceCreamComponentState, props: IIceCreamComponentProps): IIceCreamComponentState => {
      prevState.quantity = inputValue;
      return prevState;
    });
  }

  private isValid(): boolean {
    return this.state.selectedIceCream 
      && this.state.selectedIceCream.id > 0 
      && this.state.quantity > 0;
  }
}
