
export const examinationQuestionManageRoutes = [
  {
    path: '',
    redirectTo: 'papers-manage',
    pathMatch: 'full'
  },
  {
    /*题库管理*/
    path: 'inscription-manage',
    loadChildren: './inscription-manage/inscription-manage.module#InscriptionManageModule'
  },
  {
    path: 'papers-manage',
    loadChildren: './papers-manage/papers-manage.module#PapersManageModule'
  }
  
];


