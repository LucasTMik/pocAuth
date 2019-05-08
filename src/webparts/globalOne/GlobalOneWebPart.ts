import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'GlobalOneWebPartStrings';
import GlobalOne from './components/GlobalOne';
import { IGlobalOneProps } from './components/IGlobalOneProps';

import { IDocument } from '../recentDocuments/IDocument';

export interface IGlobalOneWebPartProps {
  documents: IDocument[];
}

export default class GlobalOneWebPart extends BaseClientSideWebPart<IGlobalOneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGlobalOneProps > = React.createElement(
      GlobalOne,
     
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
              groupFields: []
            }
          ]
        }
      ]
    };
  }
}
