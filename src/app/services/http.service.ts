import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpClient: HttpClient;
  router: Router;

  constructor(injector: Injector) {
    this.httpClient = injector.get(HttpClient);
    this.router = injector.get(Router);
  }


  handleError(error: any): any {
    console.log(error)
    let errorMsg: string = this.returnHttpErrorMessage(error);
    return {
      code: error?.code,
      message: errorMsg
    };
  }

  returnHttpErrorMessage(error: any): string {

    console.log("---------error starts-------");
    console.log(error);
    console.log("---------error starts-------");

    if (error.error instanceof ErrorEvent) {
      return `Error: ${error.error.message}`;
    }

    if (error?.code.toString().startsWith("5")) {
      return "Server error occurred, please contact supper";
    }
    // you can include the error body
    switch (error?.code) {
      case 0: {
        return `A network related error occurred: ${error.message}`;
      }
      case 401: {
        return `${error.message}`;
      }
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `  ${error.message}`;
      }
    }
  }

}

