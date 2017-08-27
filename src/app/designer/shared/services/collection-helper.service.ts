import {Injectable} from '@angular/core';

@Injectable()
export class CollectionHelperService {

    shuffle<T>(array: Array<T>): void {
        let length = array.length;

        for (let i = 0; i < length; i++) {
            let j = Math.floor(Math.random() * length);
            this.swap(array, i, j);
        }
    }

    swap<T>(array: Array<T>, index1: number, index2: number) {
        let temp = array[index1];

        array[index1] = array[index2];
        array[index2] = temp;
    }

}
