

import { ViewSuggestionComponent  } from './view-suggestion/view-suggestion.component';
import {  ViewSingleOptionComponent  } from './view-single-option/view-single-option.component';
import {  ViewMultipleOptionComponent  } from './view-multiple-option/view-multiple-option.component';




export const curriculumRoutes = [
    { path: 'viewsuggestion', component:ViewSuggestionComponent },
    { path: 'viewsingleoption', component:ViewSingleOptionComponent },
    { path: 'viewmultipleoption', component:ViewMultipleOptionComponent }


];
