
###Enviroments
NODE_ENV to Indicate if is Dev or Prod
PORT_SERVER to indicate Number Port

###Nodemon Config:

{
    "watch": ["src"], //indicate to nodemon that watch the src folder
    "ext": "ts", //indicate to nodemon  that the extension will be reviewed
    "ignore": [ //indicate which file we want nodemon to ignore
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node" //indicate to nodemon that it executes certain typescript files, but we can use ts-node
}