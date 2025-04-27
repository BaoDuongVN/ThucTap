const path = require('path');
import express from 'express';

export const configViewEngine = (app: any) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');


    // Config static file
    app.use(express.static(path.join('./src', 'public')));
}