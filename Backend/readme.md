# Backe Photos
Backend CRUD, up images.

## Technologies
* Node JS
* Express
* Multer
* Morgan
* Nodemon
* uuid/v4
* rim-raf
* fs-extra
* ts-node
* Typescript
* Mongoose

## Installation

```bash
npm install
```

## Run Proyect

```
npm run dev
```

## Enviroments
NODE_ENV:  Indicate if is Dev or Prod

PORT_SERVER:  indicate Number Port

## Nodemon Config:
```
{
    "watch": ["src"], //indicate to nodemon that watch the src folder
    "ext": "ts", //indicate to nodemon  that the extension will be reviewed
    "ignore": [ //indicate which file we want nodemon to ignore
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node" //indicate to nodemon that it executes certain typescript files, but we can use ts-node
} ```
