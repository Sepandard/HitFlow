import { Route } from "@angular/router";
import { LayoutComponent } from "@app/core/components";

export const appRoutes: Route[] = [
    {
        path:'',
        component:LayoutComponent,
        children:[]
    }
];
