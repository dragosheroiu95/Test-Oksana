import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../../interfaces';
import { ApiService } from '../../../core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: UserInterface;
  apiSubscription: Subscription;

  isLoading = false;

  constructor(private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiSubscription = this.apiService.fetchUserById(userId).subscribe((user: UserInterface) => {
      this.isLoading = false;
      this.user = user;
    }, err => this.isLoading = false);
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
