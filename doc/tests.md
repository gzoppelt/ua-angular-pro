[Home](../README.md)
## Adjusting Test Specifications **.spec.ts*

#### If module uses Angular Material
import **AppMaterialModule** in your TestBed<br>
(respective ModuleMaterialModule inside modules) 

    import { AppMaterialModule } from '../app-material';        // <== insert

    describe('AppComponent', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ],
          imports: [
            AppMaterialModule,                                  // <== insert
          ],
        }).compileComponents();
      }));
      it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      }));
    });
 #### If module uses Router
 ##### forRoot()
 You need *RouterModule, [routes](./app-routes.md)* and *APP_BASE_HREF*<br>
 as well as any Module that will be instantly loaded (*HomeModule* in this example)  
  
    
    import { RouterModule } from '@angular/router';             // <== insert
    import { routes } from '../app-routes';                     // <== insert
    import { APP_BASE_HREF } from '@angular/common';            // <== insert
    import { HomeModule } from '../_modules/home/home.module';  // <== insert
        
    describe('AppComponent', () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ],
          imports: [
            AppMaterialModule,
            RouterModule.forRoot(routes),                       // <== insert
            HomeModule,                                         // <== insert
          ],
          providers: [                                          // <== insert
            { provide: APP_BASE_HREF, useValue : '/' }          // <== insert
          ]                                                     // <== insert    
        }).compileComponents();
      }));
      it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      }));
    });
##### forChild() 
Do the same: Use **RouterModule.forRoot(routes)** as the TestBed works independent 
and always needs **forRoot()**
* **ToDo** not sure about APP_BASE_HREF