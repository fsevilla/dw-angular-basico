import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends BaseService {


  protected override endpoint: string = 'albums';

  getAlbumsByUser(userId: Number): Observable<any> {
    const url = 'albums?userId=' + userId;
    return this.get(url);
  }
}
