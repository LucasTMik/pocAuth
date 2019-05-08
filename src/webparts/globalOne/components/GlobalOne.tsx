
// import * as React from 'react';
// import {
//   DocumentCard,
//   DocumentCardType,
//   DocumentCardPreview,
//   DocumentCardTitle,
//   DocumentCardActivity
// } from 'office-ui-fabric-react';
// import { IDocument } from '../IDocument';
// import styles from './RecentDocuments.module.scss';
// import { IRecentDocumentsProps } from './IRecentDocumentsProps';

// export default class RecentDocuments extends React.Component<IRecentDocumentsProps, any> {
//   public render(): React.ReactElement<IRecentDocumentsProps> {
//     const documents: JSX.Element[] = this.props.documents.map((document: IDocument, index: number, array: IDocument[]): JSX.Element => {
//       return (
//         <DocumentCard type={DocumentCardType.compact} onClickHref={document.url} accentColor='#ce4b1f' key={index}>
//           <DocumentCardPreview previewImages={[{
//             name: document.title,
//             url: document.url,
//             previewImageSrc: document.imageUrl,
//             iconSrc: document.iconUrl,
//             width: 144
//           }]} />
//           <div className='ms-DocumentCard-details'>
//             <DocumentCardTitle
//               title={document.title}
//               shouldTruncate={true} />
//             <DocumentCardActivity
//               activity={document.activity.title}
//               people={
//                 [
//                   { name: document.activity.actorName, profileImageSrc: document.activity.actorImageUrl }
//                 ]
//               }
//               />
//           </div>
//         </DocumentCard>
//       );
//     });
//     return (
//       <div className={styles.helloWorld}>
//         {documents}
//       </div>
//     );
//   }
// }

// // import * as React from 'react';
// // import styles from './GlobalOne.module.scss';
// // import { IGlobalOneProps } from './IGlobalOneProps';
// // import { escape } from '@microsoft/sp-lodash-subset';

// // export default class GlobalOne extends React.Component<IGlobalOneProps, {}> {
// //   public render(): React.ReactElement<IGlobalOneProps> {
// //     return (
// //       <div className={ styles.globalOne }>
// //         <div className={ styles.container }>
// //           <div className={ styles.row }>
// //             <div className={ styles.column }>
// //               <span className={ styles.title }>Welcome to SharePoint!</span>
// //               <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
// //               <p className={ styles.description }>{escape(this.props.description)}</p>
// //               <a href="https://aka.ms/spfx" className={ styles.button }>
// //                 <span className={ styles.label }>Learn more</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

