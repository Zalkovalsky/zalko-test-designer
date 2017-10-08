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

    showSaveDialogAsync(allowedExtensions: string[]): Promise<string> {
        return new Promise<string>((resolverFn, rejectFn) => {
            if (!allowedExtensions || allowedExtensions.length < 1) {
                rejectFn('At least one allowed extension has to be specified');
                return;
            }

            dialog.showSaveDialog(null, {
                title: 'Save',
                filters: [{ name: '', extensions: allowedExtensions }]
            }, (result) => {
                resolverFn(result);
            });
        });
    }
};
