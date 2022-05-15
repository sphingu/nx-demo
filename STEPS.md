#NX-Demo

## Create empty workspace

> ❯ npx create-nx-workspace@latest my-org

```
apps              [an empty workspace with no plugins with a layout that works best for building apps]
core              [an empty workspace with no plugins set up to publish npm packages (similar to yarn workspaces)]
ts                [an empty workspace with the JS/TS plugin preinstalled]
react             [a workspace with a single React application]
angular           [a workspace with a single Angular application]
next.js           [a workspace with a single Next.js application]
nest              [a workspace with a single Nest application]
express           [a workspace with a single Express application]
web components    [a workspace with a single app built using web components]
react-native      [a workspace with a single React Native application]
react-express     [a workspace with a full stack application (React + Express)]
angular-nest      [a workspace with a full stack application (Angular + Nest)]
```

> ❯ **apps**

> ❯ Use Nx Cloud? **No**

## Create React application and library along with react-component

> ❯ npm install -d @nrwl/react

> ❯ nx g @nrwl/react:app my-site

```
✔ What name would you like to use for the application? · my-site
✔ Which stylesheet format would you like to use? · css
✔ Would you like to add React Router to this application? (y/N) · false
```

> ❯ nx g @nrwl/react:lib ui-login
> ❯ nx g @nrwl/react:component --project=ui-login page-title

## Create express application

> ❯ npm install -D @nrwl/express

> ❯ nx g @nrwl/express:app api --frontendProject=my-site

## Create TS library

> ❯ nx g @nrwl/workspace:lib api-interface
