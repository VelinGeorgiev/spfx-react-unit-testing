import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactTestingPart1WebPartStrings';
import ReactTestingPart1 from './components/ReactTestingPart1';
import { IReactTestingPart1Props } from './components/IReactTestingPart1Props';

export interface IReactTestingPart1WebPartProps {
  description: string;
}

export default class ReactTestingPart1WebPart extends BaseClientSideWebPart<IReactTestingPart1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactTestingPart1Props > = React.createElement(
      ReactTestingPart1,
      {
        description: this.properties.description
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
