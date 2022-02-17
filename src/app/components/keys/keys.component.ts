import { Component, OnInit } from '@angular/core';
import { ApiKeyService } from 'src/app/services/api-key.service';
import { Key } from './../../classes/key';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'value', 'actions'];
  keys: Key[];

  constructor(private apiKeyService: ApiKeyService) { }

  ngOnInit(): void {
    this.apiKeyService.getKeys().then(keys => {
      this.keys = keys;
    })

    this.apiKeyService.setKeysCookie();
  }
}
