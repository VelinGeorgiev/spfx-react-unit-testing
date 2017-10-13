import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactTestingPart2WebPartStrings';
import ReactTestingPart2 from './components/ReactTestingPart2';
import { IReactTestingPart2Props } from './components/IReactTestingPart2Props';

export interface IReactTestingPart2WebPartProps {
  description: string;
}

export default class ReactTestingPart2WebPart extends BaseClientSideWebPart<IReactTestingPart2WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactTestingPart2Props > = React.createElement(
      ReactTestingPart2,
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
