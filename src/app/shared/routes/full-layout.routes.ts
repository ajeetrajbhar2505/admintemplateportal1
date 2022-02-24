import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'components',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'ui-elements',
        loadChildren: () => import('../../ui-elements/ui-elements.module').then(m => m.UIElementsModule)
    },
    {
        path: 'charts',
        loadChildren: () => import('../../charts/charts.module').then(m => m.ChartsNg2Module)

    },
    {
        path: 'widgets',
        loadChildren: () => import('../../widgets/widgets.module').then(m => m.WidgetsModule)

    },
    {
        path: 'form',
        loadChildren: () => import('../../form/form.module').then(m => m.FormModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import('../../fullcalendar/fullcalendar.module').then(m => m.FullcalendarModule)

    },
    {
        path: 'table',
        loadChildren: () => import('../../tables/tables.module').then(m => m.TablesModule)

    },
    {
        path: 'datatable',
        loadChildren: () => import('../../datatable/datatable.module').then(m => m.DatatableModule)

    },
    {
        path: 'ui-icons',
        loadChildren: () => import('../../ui-icons/ui-icons.module').then(m => m.UiIconsModule)

    },
    {
        path: 'maps',
        loadChildren: () => import('../../maps/maps.module').then(m => m.MapsModule)

    },
    {
        path: 'pages',
        loadChildren: () => import('../../pages/full-pages/full-pages.module').then(m => m.FullPagesModule)

    },

    {
         path : 'students',
        loadChildren : () => import('../../Lists/students/students.module').then(m => m.StudentsModule)
    },
    {
        path : 'add-students',
       loadChildren : () => import('../../Lists/add-students/add-students.module').then(m => m.AddStudentsModule)
   }
   ,
    {
        path : 'category',
       loadChildren : () => import('../../Category/add-category/add-category.module').then(m => m.AddCategoryModule)
    }
   ,
   {
       path : 'semester',
      loadChildren : () => import('../../Semester/add-semester/add-semester.module').then(m => m.AddSemesterModule)
    }
    ,
    {
        path : 'sem-catlist',
       loadChildren : () => import('../../Category-Semester/sem-catlist/sem-catlist.module').then(m => m.SemCatlistModule)
     }
     ,
     {
         path : 'test-report',
        loadChildren : () => import('../../Test-Report/test-report/test-report.module').then(m => m.TestReportModule)
      }
      ,
      {
          path : 'admin',
         loadChildren : () => import('../../Admin/admin-creation/admin-creation.module').then(m => m.AdminCreationModule)
      }
      ,
      {
          path : 'student-log',
         loadChildren : () => import('../../Student-Logged/student-logged/student-logged.module').then(m => m.StudentLoggedModule)
      }
    
];