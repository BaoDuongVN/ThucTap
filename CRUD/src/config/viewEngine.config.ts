const path = require('path');
import express from 'express';

export const configViewEngine = (app: express.Application) => {
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    app.use(express.static(path.join('./src', 'public')));
}