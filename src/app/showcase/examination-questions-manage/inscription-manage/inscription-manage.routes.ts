import {InscriptionManageComponent} from './inscription-manage.component';

export const InscriptionRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inscription-manage'
  },
  {
    /**
     * 题库管理主页
     */
    path: 'inscription-manage',
    component: InscriptionManageComponent
  }

];
