# TmdbApp

An Angular app utilizing TMDB API to display movies
Suppports text search for movie titles and display movie details with cast and crew.
A demo video inside demo folder

Use of Angular Material to display movie tiles
To run the app: Run npm install.
Replace token in environment.ts with your own from TMDB
Run ng serve

Architecture:

- App divided into modules for features
- Lazily loaded modules for improved performance
- Shared components for common UI
- State management using signals and RxJs
- Seperate data services to communicate with API
- HTTP interceptors for auth mechanism

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
