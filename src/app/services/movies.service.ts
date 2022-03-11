import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends BaseService {
  
  protected override endpoint: string = 'posts';

}
