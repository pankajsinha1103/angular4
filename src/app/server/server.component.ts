import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverName: string = "";

    checkEmpty(){
        if(this.serverName == ''){
            return true;
        }else{
            return false;
        }
    }

    resetServerName(){
        this.serverName = '';
    }
}