
import {PreviewPapersComponent} from './preview-papers/preview-papers.component';
import {PapersManageComponent} from './papers-manage.component';

export const papersManageRoutes = [
  {
    path: '',
    redirectTo: 'papers-manage',
    pathMatch: 'full'
  },
  
  {
    /*试卷管理主页*/
    path: 'papers-manage',
    component: PapersManageComponent
  },
 
  {
    /*预览试卷 */
    path: 'preview',
    component: PreviewPapersComponent
  }
];
