import { Injectable } from '@angular/core';

// Only available in electron
const electronRemote = require('electron').remote;
const { dialog } = electronRemote;

@Injectable()
export class DialogService {

    confirmAsync(message: string): Promise<boolean> {

        const options = ['Yes', 'No'];
        const confirmOptionNo = 0;

        let promise = new Promise<boolean>((resolverFn) => {

            dialog.showMessageBox(null, {
                title: 'Confirmation',
                message: message,
                buttons: options,
                type: 'question'
            }, (responseNo: number) => {
                resolverFn(responseNo === confirmOptionNo);
            });
        });

        return promise;
    }
};
