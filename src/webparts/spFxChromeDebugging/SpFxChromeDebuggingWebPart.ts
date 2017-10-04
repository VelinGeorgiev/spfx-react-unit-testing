import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxChromeDebuggingWebPartStrings';
import SpFxChromeDebugging from './components/SpFxChromeDebugging';
import { ISpFxChromeDebuggingProps } from './components/ISpFxChromeDebuggingProps';

export interface ISpFxChromeDebuggingWebPartProps {
  description: string;
}

export default class SpFxChromeDebuggingWebPart extends BaseClientSideWebPart<ISpFxChromeDebuggingWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpFxChromeDebuggingProps > = React.createElement(
      SpFxChromeDebugging,
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
