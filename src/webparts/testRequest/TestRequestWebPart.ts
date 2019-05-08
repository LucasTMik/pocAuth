import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'TestRequestWebPartStrings';
import TestRequest from './components/TestRequest';
import { ITestRequestProps } from './components/ITestRequestProps';

export interface ITestRequestWebPartProps {
  description: string;
}

//  /src/webparts/<nomeWebpart>/<nomeWebpart>WebPart.ts
import { AadHttpClient, AadTokenProvider, SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse, HttpClientResponse } from '@microsoft/sp-http';
import * as $ from 'jquery';

export default class TestRequestWebPart extends BaseClientSideWebPart<ITestRequestWebPartProps> {

  public render(): void {

    // this.context.aadTokenProviderFactory
    //   .getTokenProvider()
    //     .then((tokenProvider: AadTokenProvider) :Promise<string> => {
    //       return tokenProvider.getToken('a85867e6-4ad0-43a8-ba66-492e3a828eed');
    //     })
    //     .then((accessToken: string): void => {
    //       console.log(accessToken);
    //       const myOptions: ISPHttpClientOptions = {
    //         headers: {
    //           authorization: `Bearer ${accessToken}`,
    //           accept: 'application/json'
    //         },
    //         method: 'GET',
    //         mode: 'cors'
    //       }

    //       this.context.spHttpClient.get('https://inpmongeralapi.azurewebsites.net/api/profile/getmyprofile', SPHttpClient.configurations.v1, myOptions)
    //       .then((apiResponse: SPHttpClientResponse) => apiResponse.json())
    //       .then(data => console.log(data))
    //       .catch(err => console.log(err));
    //     });

    // console.log("AEWFEASF ASF ASF ASF ");
    // this.context.aadHttpClientFactory
    //   .getClient('a85867e6-4ad0-43a8-ba66-492e3a828eed')
    //   .then((client: AadHttpClient): void => {
    //     console.log("CLIENT", client)
    //     client.get('https://inpmongeralapi.azurewebsites.net/api/profile/getmyprofile', AadHttpClient.configurations.v1)
    //       .then((response: HttpClientResponse): Promise<any> => {
    //         response.json().then(data => console.log(data));
    //         return response.json();
    //       })
    //       .catch((error) => {
    //         error.json().then(err => console.error(err))
    //       })
    //   });

    // $.support.cors = true;
    // this.context.aadTokenProviderFactory
    //   .getTokenProvider()
    //   .then((tokenProvider: AadTokenProvider): Promise<string> => {
    //     return tokenProvider.getToken('a85867e6-4ad0-43a8-ba66-492e3a828eed');
    //   })
    //   .then((accessToken: string): void => {
    //     $.get({
    //       url: 'https://inpmongeralapi.azurewebsites.net/api/profile/getmyprofile',
    //       method: 'GET',
    //       headers: {
    //         authorization: `Bearer ${accessToken}`,
    //         accept: "application/json"
    //       }
    //     })
    //     .done((data: any): void => {
    //       console.log(data);
    //     })
    //     .fail((err:any) => {
    //       console.log(err);
    //     })
    //   });

    this.context.aadHttpClientFactory
    .getClient('a85867e6-4ad0-43a8-ba66-492e3a828eed')
    .then((client: AadHttpClient): void => {
      client.get('https://inpmongeralapi.azurewebsites.net/api/profile/getmyprofile', AadHttpClient.configurations.v1)
        .then((response: HttpClientResponse): Promise<any> => {
          response.json().then(data => console.log(data));
          return response.json();
        })
    });

    const element: React.ReactElement<ITestRequestProps> = React.createElement(
      TestRequest,
      {
        description: this.properties.description
      }
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
