import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ColorWebPartWebPartStrings';
import ColorWebPart from './components/ColorWebPart';
import { IColorWebPartProps } from './components/IColorWebPartProps';
import { ColorRestProvider } from './providers/ColorRestProvider';

export interface IColorWebPartWebPartProps {
  description: string;
}

export default class ColorWebPartWebPart extends BaseClientSideWebPart<IColorWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IColorWebPartProps > = React.createElement(
      ColorWebPart,
      {
        colorProvider: new ColorRestProvider()
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
