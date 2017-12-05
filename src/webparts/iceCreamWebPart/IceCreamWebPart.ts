import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'IceCreamWebPartWebPartStrings';
import IceCreamWebPart from './components/IceCreamComponent';
import { IIceCreamComponentProps } from './components/IIceCreamComponentProps';
import { IceCreamFakeProvider } from './iceCreamProviders/IceCreamFakeProvider';

export interface IIceCreamWebPartWebPartProps {
  description: string;
}

export default class IceCreamWebPartWebPart extends BaseClientSideWebPart<IIceCreamWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIceCreamComponentProps > = React.createElement(
      IceCreamWebPart,
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
