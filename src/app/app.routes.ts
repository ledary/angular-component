
import {TestComponent } from './showcase/test.component'
export const appRoutes = [
    { path: 'showcase', loadChildren: './showcase/test.module#TestModule'}
];
