import path from 'path';

export const uploadGet = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/en/upload.html`));
}