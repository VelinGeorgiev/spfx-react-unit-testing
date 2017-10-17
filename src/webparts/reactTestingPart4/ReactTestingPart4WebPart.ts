import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactTestingPart4WebPartStrings';
import ReactTestingPart4 from './components/ReactTestingPart4';
import { IReactTestingPart4Props } from './components/IReactTestingPart4Props';
import { IceCreamFakeProvider } from './iceCream/IceCreamFakeProvider';

export interface IReactTestingPart4WebPartProps {
  description: string;
}

export default class ReactTestingPart4WebPart extends BaseClientSideWebPart<IReactTestingPart4WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactTestingPart4Props > = React.createElement(
      ReactTestingPart4,
      {
        title: "SharePoint Ice Cream Truck",
        iceCreamProvider: new IceCreamFakeProvider()
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
