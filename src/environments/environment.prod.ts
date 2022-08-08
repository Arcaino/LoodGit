import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true
};

export const API_TOKEN: HttpHeaders = new HttpHeaders({
  'Authorization': 'Basic QXJjYWlubzpnaHBfZm5ET2V1Rk1BR0VEbGRMQTdqV2E3ZHdhcDZiTlZxMXViZDZI'
});

export const API_BASE = `https://api.github.com/`;