import * as React from 'react';
import styles from './ReactTestingPart4.module.scss';
import { IReactTestingPart4Props } from './IReactTestingPart4Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReactTestingPart4State } from './IReactTestingPart4State';
import { IceCream } from '../iceCream/IceCream';

export default class ReactTestingPart4 extends React.Component<IReactTestingPart4Props, IReactTestingPart4State> {


  constructor(props: IReactTestingPart4Props) {
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
      this.setState((prevState: IReactTestingPart4State, props: IReactTestingPart4Props): IReactTestingPart4State => {

        prevState.iceCreamFlavoursList = result;

        return prevState;
      });
    });
  }

  public render(): React.ReactElement<IReactTestingPart4Props> {
    return (
      <div className={styles.reactTestingPart4}>
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
    
    this.setState((prevState: IReactTestingPart4State, props: IReactTestingPart4Props): IReactTestingPart4State => {
      prevState.selectedIceCream = iceCream;
      prevState.hasBoughtIceCream = false;
      return prevState;
    });

  }

  public buyHandler(id: number): void {
    
    this.props.iceCreamProvider.buy(id).then(result => {

      this.setState((prevState: IReactTestingPart4State, props: IReactTestingPart4Props): IReactTestingPart4State => {
        prevState.hasBoughtIceCream = true;
        return prevState;
      });

    });
  }
}
