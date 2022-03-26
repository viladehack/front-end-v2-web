import path from 'path';

export const mainGet = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/en/chat.html`));
};