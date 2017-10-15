import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactTestingPart3WebPartStrings';
import ReactTestingPart3 from './components/ReactTestingPart3';
import { IReactTestingPart3Props } from './components/IReactTestingPart3Props';

export interface IReactTestingPart3WebPartProps {
  description: string;
}

export default class ReactTestingPart3WebPart extends BaseClientSideWebPart<IReactTestingPart3WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactTestingPart3Props > = React.createElement(
      ReactTestingPart3,
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
